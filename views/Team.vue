<template>
  <div class="team-page">
    <!-- Header da página -->
    <section class="team-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">A Nossa Equipa</h1>
          <p class="page-subtitle">
            Advogadas especializadas ao seu serviço com dedicação e experiência
          </p>
          <div class="header-divider"></div>
        </div>
      </div>
    </section>

    <!-- Conteúdo da equipa -->
    <section class="team-content">
      <!-- Primeira instância - Carina Babo (layout original) -->
      <LawyerProfile
        label="ADVOGADA"
        name="CARINA BABO"
        :description="'Serviço jurídico\ncom discrição\ne prontidão'"
        :extra-info="carinaExtraInfo"
        image-url="/images/carina.png"
        :reverse="false"
      />

      <!-- Segunda instância - Sara Costa (layout invertido) -->
      <LawyerProfile
        label="ADVOGADA"
        name="SARA COSTA"
        :description="'Serviço jurídico\ncom discrição\ne prontidão'"
        :extra-info="saraExtraInfo"
        image-url="/images/sara.png"
        :reverse="true"
      />
    </section>

    <AppFooter />
  </div>
</template>

<script>
import LawyerProfile from '../components/LawyerProfile.vue'
import Footer from '../components/shared/AppFooter.vue'

export default {
  name: 'TeamView',
  components: {
    LawyerProfile,
    AppFooter: Footer,
  },
  data() {
    return {
      carinaExtraInfo: `<strong>Áreas de Especialização:</strong><br>
      • Direito de Família e Menores<br>
      • Direito Civil e Contratual<br>
      • Direito do Trabalho<br><br>

      <strong>Formação Académica:</strong><br>
      • Licenciada em Direito pela Universidade do Porto<br>
      • Pós-graduação em Direito de Família<br>
      • Formação contínua em Mediação Familiar<br><br>

      <strong>Experiência:</strong><br>
      Com mais de 10 anos de experiência, dedica-se especialmente a questões familiares complexas, sempre com uma abordagem humana e personalizada.`,

      saraExtraInfo: `<strong>Áreas de Especialização:</strong><br>
      • Direito Penal<br>
      • Direito Administrativo<br>
      • Direito dos Seguros<br><br>

      <strong>Formação Académica:</strong><br>
      • Licenciada em Direito pela Universidade de Coimbra<br>
      • Mestrado em Ciências Jurídico-Criminais<br>
      • Especialização em Direito Administrativo<br><br>

      <strong>Experiência:</strong><br>
      Advogada com sólida experiência em processos criminais e contencioso administrativo. Reconhecida pela sua dedicação e rigor na defesa dos interesses dos clientes.`,
    }
  },
}
</script>

<style scoped>
.team-page {
  width: 100%;
  min-height: 100vh;
  background: #f1eee9;
  overflow-x: hidden;
}

/* Header da página */
.team-header {
  background: #f1eee9;
  padding: 120px 0 60px 0;
  border-bottom: 2px solid #8b7355;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 6rem;
  font-weight: 100;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.page-subtitle {
  font-size: 2.4rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.4;
  margin: 0 0 40px 0;
  font-family: 'Object Sans', sans-serif;
}

.header-divider {
  width: 200px;
  height: 4px;
  background: #5c5545;
  margin: 0 auto;
}

/* Conteúdo da equipa */
.team-content {
  background: #f1eee9;
}

/* Responsividade */
@media (max-width: 1024px) {
  .team-header {
    padding: 100px 0 50px 0;
  }

  .page-title {
    font-size: 5rem;
  }

  .page-subtitle {
    font-size: 2rem;
  }

  .header-divider {
    width: 160px;
    height: 3px;
  }
}

@media (max-width: 768px) {
  .team-header {
    padding: 80px 0 40px 0;
  }

  .page-title {
    font-size: 4rem;
  }

  .page-subtitle {
    font-size: 1.8rem;
  }

  .header-divider {
    width: 120px;
  }

  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .team-header {
    padding: 60px 0 30px 0;
  }

  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1.5rem;
  }

  .header-divider {
    width: 100px;
    height: 3px;
  }
}
</style>
