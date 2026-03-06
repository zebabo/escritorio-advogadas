<template>
  <div class="admin-login">
    <div class="login-box">
      <div class="login-header">
        <h1 class="login-title">Área Reservada</h1>
        <div class="login-divider"></div>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Introduza a password"
            :disabled="loading"
            autocomplete="current-password"
          />
        </div>

        <p v-if="error" class="error-msg">{{ error }}</p>

        <button type="submit" class="login-btn" :disabled="loading">
          {{ loading ? 'A entrar...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export default {
  name: 'AdminLogin',
  data() {
    return {
      password: '',
      error: '',
      loading: false
    }
  },
  created() {
    // Se já tiver token válido, redirecionar direto para o dashboard
    if (localStorage.getItem('admin_token')) {
      this.$router.push('/admin/artigos')
    }
  },
  methods: {
    async handleLogin() {
      this.error = ''
      this.loading = true

      try {
        const res = await fetch(`${API_URL}/api/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password: this.password })
        })

        const data = await res.json()

        if (!res.ok) {
          this.error = data.error || 'Password incorreta'
          return
        }

        localStorage.setItem('admin_token', data.token)
        this.$router.push('/admin/artigos')
      } catch (err) {
        this.error = 'Erro de ligação ao servidor'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.admin-login {
  min-height: 100vh;
  background: #f1eee9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-box {
  background: #ffffff;
  border: 2px solid #5c5545;
  padding: 60px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 10px 30px rgba(139, 115, 85, 0.1);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-title {
  font-size: 2.4rem;
  font-weight: 300;
  color: #5c5545;
  font-family: 'Noto Serif Display', serif;
  margin: 0 0 20px 0;
}

.login-divider {
  width: 80px;
  height: 3px;
  background: #5c5545;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 1rem;
  color: #5c5545;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.form-group input {
  padding: 14px 16px;
  border: 2px solid #5c5545;
  background: #f1eee9;
  font-size: 1rem;
  color: #5c5545;
  font-family: 'Aileron', sans-serif;
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #8b7355;
  background: #ffffff;
}

.form-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-msg {
  color: #c0392b;
  font-size: 0.95rem;
  font-family: 'Aileron', sans-serif;
  margin: 0;
  text-align: center;
}

.login-btn {
  background: #5c5545;
  color: #f1eee9;
  border: none;
  padding: 16px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Object Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.login-btn:hover:not(:disabled) {
  background: #4a473a;
  transform: translateY(-2px);
}

.login-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .login-box {
    padding: 40px 30px;
  }

  .login-title {
    font-size: 1.8rem;
  }
}
</style>
