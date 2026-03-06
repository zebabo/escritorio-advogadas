<template>
  <div class="admin-dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <h2>Admin</h2>
        <div class="sidebar-divider"></div>
      </div>
      <nav class="sidebar-nav">
        <span class="nav-item active">Artigos</span>
      </nav>
      <button class="logout-btn" @click="logout">Sair</button>
    </aside>

    <!-- Conteúdo principal -->
    <main class="main-content">

      <!-- Cabeçalho -->
      <div class="dashboard-header">
        <h1>Gestão de Artigos</h1>
        <button class="new-article-btn" @click="openForm()">+ Novo Artigo</button>
      </div>

      <!-- Mensagem de sucesso/erro global -->
      <p v-if="globalMsg" :class="['global-msg', globalMsgType]">{{ globalMsg }}</p>

      <!-- Lista de artigos -->
      <div class="articles-list" v-if="!showForm">
        <div v-if="loading" class="state-msg">A carregar artigos...</div>
        <div v-else-if="articles.length === 0" class="state-msg">Nenhum artigo encontrado.</div>

        <div v-else v-for="article in articles" :key="article.id" class="article-row">
          <div class="article-row-info">
            <span class="article-row-category">{{ article.category }}</span>
            <h3 class="article-row-title">{{ article.title }}</h3>
            <span class="article-row-meta">{{ article.author }} · {{ formatDate(article.date) }}</span>
          </div>
          <div class="article-row-actions">
            <button class="btn-edit" @click="openForm(article)">Editar</button>
            <button class="btn-delete" @click="deleteArticle(article.id)">Eliminar</button>
          </div>
        </div>
      </div>

      <!-- Formulário novo/editar artigo -->
      <div class="article-form-wrapper" v-if="showForm">
        <div class="form-header">
          <h2>{{ editingArticle ? 'Editar Artigo' : 'Novo Artigo' }}</h2>
          <button class="btn-back" @click="closeForm">← Voltar</button>
        </div>

        <form class="article-form" @submit.prevent="saveArticle">

          <div class="form-row">
            <div class="form-group">
              <label>Título *</label>
              <input v-model="form.title" type="text" placeholder="Título do artigo" required />
            </div>
          </div>

          <div class="form-row two-cols">
            <div class="form-group">
              <label>Autora *</label>
              <select v-model="form.author" required @change="onAuthorChange">
                <option value="">Selecionar autora</option>
                <option value="Sara S. Costa">Sara S. Costa</option>
                <option value="Carina Babo">Carina Babo</option>
              </select>
            </div>
            <div class="form-group">
              <label>Categoria *</label>
              <input v-model="form.category" type="text" placeholder="Ex: Direito de Família" required />
            </div>
          </div>

          <div class="form-row two-cols">
            <div class="form-group">
              <label>Data *</label>
              <input v-model="form.date" type="date" required />
            </div>
            <div class="form-group">
              <label>Tempo de leitura (min)</label>
              <input v-model.number="form.readTime" type="number" min="1" placeholder="Ex: 5" />
            </div>
          </div>

          <div class="form-group">
            <label>Tags <span class="hint">(separadas por vírgula)</span></label>
            <input v-model="tagsInput" type="text" placeholder="Ex: Direito Penal, Contraordenação" />
          </div>

          <div class="form-group">
            <label>Resumo *</label>
            <textarea v-model="form.excerpt" rows="3" placeholder="Breve descrição do artigo..." required></textarea>
          </div>

          <div class="form-group">
            <label>Conteúdo completo *</label>
            <div class="editor-wrapper">
              <div id="quill-editor"></div>
            </div>
          </div>

          <p v-if="formError" class="error-msg">{{ formError }}</p>

          <div class="form-actions">
            <button type="button" class="btn-cancel" @click="closeForm">Cancelar</button>
            <button type="submit" class="btn-save" :disabled="saving">
              {{ saving ? 'A guardar...' : 'Guardar Artigo' }}
            </button>
          </div>

        </form>
      </div>

    </main>
  </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const AUTHORS = {
  'Sara S. Costa': '/images/sara.png',
  'Carina Babo': '/images/carina.png'
}

export default {
  name: 'AdminDashboard',
  data() {
    return {
      articles: [],
      loading: true,
      showForm: false,
      editingArticle: null,
      saving: false,
      formError: '',
      globalMsg: '',
      globalMsgType: 'success',
      tagsInput: '',
      quillEditor: null,
      form: this.emptyForm()
    }
  },
  async created() {
    if (!localStorage.getItem('admin_token')) {
      this.$router.push('/admin')
      return
    }
    // Carregar Quill dinamicamente
    await this.loadQuill()
    await this.fetchArticles()
  },
  methods: {
    emptyForm() {
      return {
        title: '',
        excerpt: '',
        fullContent: '',
        author: '',
        authorImage: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
        tags: [],
        readTime: 5
      }
    },
    loadQuill() {
      return new Promise((resolve) => {
        if (window.Quill) { resolve(); return }

        // Carregar CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.quilljs.com/1.3.7/quill.snow.css'
        document.head.appendChild(link)

        // Carregar JS
        const script = document.createElement('script')
        script.src = 'https://cdn.quilljs.com/1.3.7/quill.min.js'
        script.onload = resolve
        document.head.appendChild(script)
      })
    },
    async fetchArticles() {
      this.loading = true
      try {
        const res = await fetch(`${API_URL}/api/articles`)
        this.articles = await res.json()
      } catch (err) {
        this.showGlobalMsg('Erro ao carregar artigos', 'error')
      } finally {
        this.loading = false
      }
    },
    async openForm(article = null) {
      this.formError = ''
      this.editingArticle = article

      if (article) {
        this.form = { ...article }
        this.tagsInput = article.tags ? article.tags.join(', ') : ''
      } else {
        this.form = this.emptyForm()
        this.tagsInput = ''
      }

      this.showForm = true
      window.scrollTo({ top: 0, behavior: 'smooth' })

      await this.$nextTick()
      this.initQuill()
    },
    initQuill() {
      if (this.quillEditor) {
        this.quillEditor = null
      }

      const editorEl = document.getElementById('quill-editor')
      if (!editorEl || !window.Quill) return

      this.quillEditor = new window.Quill('#quill-editor', {
        theme: 'snow',
        placeholder: 'Escreva o conteúdo do artigo aqui...',
        modules: {
          toolbar: [
            [{ header: [2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ]
        }
      })

      if (this.form.fullContent) {
        this.quillEditor.root.innerHTML = this.form.fullContent
      }
    },
    closeForm() {
      this.showForm = false
      this.editingArticle = null
      this.formError = ''
      this.quillEditor = null
    },
    onAuthorChange() {
      this.form.authorImage = AUTHORS[this.form.author] || ''
    },
    async saveArticle() {
      this.formError = ''

      if (this.quillEditor) {
        this.form.fullContent = this.quillEditor.root.innerHTML
      }

      if (!this.form.fullContent || this.form.fullContent === '<p><br></p>') {
        this.formError = 'O conteúdo completo é obrigatório'
        return
      }

      this.saving = true

      this.form.tags = this.tagsInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0)

      const token = localStorage.getItem('admin_token')
      const isEditing = !!this.editingArticle
      const url = isEditing ? `${API_URL}/api/articles/${this.editingArticle.id}` : `${API_URL}/api/articles`
      const method = isEditing ? 'PUT' : 'POST'

      try {
        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(this.form)
        })

        const data = await res.json()

        if (!res.ok) {
          if (res.status === 401) { this.logout(); return }
          this.formError = data.error || 'Erro ao guardar artigo'
          return
        }

        await this.fetchArticles()
        this.closeForm()
        this.showGlobalMsg(isEditing ? 'Artigo atualizado com sucesso!' : 'Artigo criado com sucesso!')
      } catch (err) {
        this.formError = 'Erro de ligação ao servidor'
      } finally {
        this.saving = false
      }
    },
    async deleteArticle(id) {
      if (!confirm('Tem a certeza que pretende eliminar este artigo?')) return

      const token = localStorage.getItem('admin_token')

      try {
        const res = await fetch(`${API_URL}/api/articles/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        })

        if (!res.ok) {
          if (res.status === 401) { this.logout(); return }
          this.showGlobalMsg('Erro ao eliminar artigo', 'error')
          return
        }

        await this.fetchArticles()
        this.showGlobalMsg('Artigo eliminado com sucesso!')
      } catch (err) {
        this.showGlobalMsg('Erro de ligação ao servidor', 'error')
      }
    },
    showGlobalMsg(msg, type = 'success') {
      this.globalMsg = msg
      this.globalMsgType = type
      setTimeout(() => { this.globalMsg = '' }, 4000)
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-PT', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    },
    logout() {
      localStorage.removeItem('admin_token')
      this.$router.push('/admin')
    }
  }
}
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  min-height: 100vh;
  background: #f1eee9;
  font-family: 'Aileron', sans-serif;
}

.sidebar {
  width: 220px;
  min-height: 100vh;
  background: #5c5545;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar-logo h2 {
  color: #f1eee9;
  font-family: 'Noto Serif Display', serif;
  font-weight: 300;
  font-size: 1.8rem;
  margin: 0 0 16px 0;
}

.sidebar-divider {
  width: 40px;
  height: 2px;
  background: #8b7355;
  margin-bottom: 40px;
}

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  color: #f1eee9;
  font-size: 1rem;
  padding: 10px 14px;
  cursor: pointer;
  border-left: 3px solid transparent;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-item.active {
  border-left-color: #f1eee9;
}

.logout-btn {
  background: none;
  border: 1px solid #8b7355;
  color: #f1eee9;
  padding: 10px;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease;
}

.logout-btn:hover { background: #4a473a; }

.main-content {
  margin-left: 220px;
  flex: 1;
  padding: 50px 60px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 2px solid #5c5545;
}

.dashboard-header h1 {
  font-size: 2.4rem;
  font-weight: 300;
  color: #5c5545;
  font-family: 'Noto Serif Display', serif;
  margin: 0;
}

.new-article-btn {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease, transform 0.2s ease;
}

.new-article-btn:hover { background: #4a473a; transform: translateY(-2px); }

.global-msg {
  padding: 14px 20px;
  margin-bottom: 30px;
  font-size: 1rem;
  border-left: 4px solid;
}

.global-msg.success { background: #eaf5ea; color: #2d6a2d; border-color: #2d6a2d; }
.global-msg.error { background: #fdecea; color: #c0392b; border-color: #c0392b; }

.state-msg { color: #5c5545; font-size: 1.1rem; padding: 20px 0; }

.article-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 2px solid #5c5545;
  padding: 24px 30px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;
}

.article-row:hover { box-shadow: 0 6px 20px rgba(139, 115, 85, 0.15); }

.article-row-info { display: flex; flex-direction: column; gap: 6px; }

.article-row-category {
  font-size: 0.85rem;
  color: #8b7355;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Object Sans', sans-serif;
}

.article-row-title {
  font-size: 1.3rem;
  font-weight: 400;
  color: #5c5545;
  font-family: 'Noto Serif Display', serif;
  margin: 0;
}

.article-row-meta { font-size: 0.9rem; color: #8b7355; }

.article-row-actions { display: flex; gap: 12px; flex-shrink: 0; }

.btn-edit {
  background: none;
  border: 2px solid #5c5545;
  color: #5c5545;
  padding: 8px 20px;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-edit:hover { background: #5c5545; color: #f1eee9; }

.btn-delete {
  background: none;
  border: 2px solid #c0392b;
  color: #c0392b;
  padding: 8px 20px;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-delete:hover { background: #c0392b; color: #fff; }

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 2px solid #5c5545;
}

.form-header h2 {
  font-size: 2rem;
  font-weight: 300;
  color: #5c5545;
  font-family: 'Noto Serif Display', serif;
  margin: 0;
}

.btn-back {
  background: none;
  border: none;
  color: #5c5545;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  text-decoration: underline;
}

.article-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 900px;
}

.form-row { display: flex; flex-direction: column; }

.form-row.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group { display: flex; flex-direction: column; gap: 8px; }

.form-group label {
  font-size: 0.9rem;
  color: #5c5545;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.hint {
  font-size: 0.8rem;
  color: #8b7355;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #5c5545;
  background: #f1eee9;
  font-size: 1rem;
  color: #5c5545;
  font-family: 'Aileron', sans-serif;
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #8b7355;
  background: #fff;
}

.editor-wrapper :deep(.ql-toolbar) {
  border: 2px solid #5c5545;
  border-bottom: none;
  background: #f1eee9;
  font-family: 'Object Sans', sans-serif;
}

.editor-wrapper :deep(.ql-container) {
  border: 2px solid #5c5545;
  font-size: 1rem;
  font-family: 'Aileron', sans-serif;
  min-height: 250px;
  background: #ffffff;
}

.editor-wrapper :deep(.ql-editor) {
  min-height: 250px;
  color: #5c5545;
  line-height: 1.8;
}

.editor-wrapper :deep(.ql-editor.ql-blank::before) {
  color: #a09880;
  font-style: italic;
}

.editor-wrapper :deep(.ql-stroke) { stroke: #5c5545; }
.editor-wrapper :deep(.ql-fill) { fill: #5c5545; }

.error-msg { color: #c0392b; font-size: 0.95rem; margin: 0; }

.form-actions { display: flex; gap: 16px; padding-top: 10px; }

.btn-cancel {
  background: none;
  border: 2px solid #5c5545;
  color: #5c5545;
  padding: 14px 30px;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn-cancel:hover { background: #5c5545; color: #f1eee9; }

.btn-save {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  padding: 14px 40px;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn-save:hover:not(:disabled) { background: #4a473a; transform: translateY(-2px); }
.btn-save:disabled { opacity: 0.6; cursor: not-allowed; }

@media (max-width: 768px) {
  .sidebar { display: none; }
  .main-content { margin-left: 0; padding: 30px 24px; }
  .dashboard-header { flex-direction: column; gap: 16px; align-items: flex-start; }
  .form-row.two-cols { grid-template-columns: 1fr; }
  .article-row { flex-direction: column; align-items: flex-start; gap: 16px; }
}
</style>
