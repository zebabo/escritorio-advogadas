<template>
  <HomeButton />
  <div class="services-page">
    <!-- Header da página -->
    <section class="services-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Áreas de Atuação</h1>
          <p class="page-subtitle">
            Oferecemos soluções jurídicas especializadas e personalizadas,
            com uma abordagem integrada que combina rigor técnico,
            proximidade e compromisso com os melhores resultados.
          </p>
          <div class="header-divider"></div>
        </div>
      </div>
    </section>

    <!-- Grid de serviços -->
    <section class="services-content">
      <ServiceCard
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :services="service.services"
      />
    </section>

    <AppFooter />
  </div>
</template>

<script>
import ServiceCard from '../components/ServiceCard.vue'
import AppFooter from '../components/shared/AppFooter.vue'
import HomeButton from '../components/shared/HomeButton.vue'

export default {
  name: 'ServicesView',
  components: {
    ServiceCard,
    AppFooter,
    HomeButton,
  },
  data() {
    return {
      services: [
        {
          title: 'Comercial e Societário',
          services: [
            'Elaboração e análise de contratos comerciais;',
            'Constituição e dissolução de sociedades comerciais;',
            'Ações judiciais comerciais e societárias (impugnação de deliberações sociais, ações de responsabilidade civil, etc);',
            'Atos societários (cessão de quotas, aumentos de capital, elaboração de atas, etc).'
          ]
        },
        {
          title: 'Contencioso',
          services: [
            'Cobrança judicial e extrajudicial de créditos;',
            'Injunções ;',
            'Insolvências (de pessoa singular ou coletiva);',
            'Litígios judiciais e extrajudiciais.'
          ]
        },
        {
          title: 'Criminal e Contraordenacional',
          services: [
            'Representação em processos crime;',
            'Representação em processos contraordenacionais;',
            'Aconselhamento preventivo.'
          ]
        },
        {
          title: 'Família e Sucessões',
          services: [
            'Processos de maior acompanhado;',
            'Partilhas e Inventários;',
            'Testamentos;',
            'Regulação das responsabilidades parentais;',
            'Divórcios.'
          ]
        },
        {
          title: 'Fiscal',
          services: [
            'Processos Tributários;',
            'Imposto (IRS, IRC, Imposto do Selo, IMT).'
          ]
        },
        {
          title: 'Laboral',
          services: [
            'Elaboração e cessação de contratos de trabalho;',
            'Procedimentos disciplinares;',
            'Processos judiciais e contraordenacionais;',
            'Despedimentos;',
            'Acidentes de trabalho.'
          ]
        },
        {
          title: 'Registos e Notariado',
          services: [
            'Reconhecimento de assinaturas;',
            'Autenticação de documentos;',
            'Certificação de traduções;',
            'Certificação de fotocópias;',
            'Registos;',
            'Elaboração e análise de contratos.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.services-page {
  width: 100%;
  min-height: 100vh;
  background: #f1eee9;
  overflow-x: hidden;
}

/* Header da página */
.services-header {
  background: #f1eee9;
  padding: 120px 0 60px 0;
  border-bottom: 2px solid #8b7355;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 60px;
}

.header-content {
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
}

.page-title {
  font-size: 5rem;
  font-weight: 100;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 60px 0;
  font-family: 'Noto Serif Display', serif;
}

.page-subtitle {
  font-size: 1.4rem;
  color: #5c5545;
  font-weight: 300;
  line-height: 1.5;
  margin: 0 0 40px 0;
  font-family: 'Aileron', sans-serif;
  font-style: italic;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.header-divider {
  width: 200px;
  height: 4px;
  background: #5c5545;
  margin: 0 auto;
}

/* Conteúdo dos serviços */
.services-content {
  background: #f1eee9;
  padding: 80px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  align-items: start;
}

/* Responsividade */
@media (max-width: 1024px) {
  .services-header {
    padding: 100px 0 50px 0;
  }

  .container {
    max-width: 1400px;
    padding: 0 40px;
  }

  .header-content {
    max-width: 1200px;
  }

  .page-title {
    font-size: 3.5rem;
  }

  .page-subtitle {
    font-size: 1rem;
    max-width: 1100px;
  }

  .header-divider {
    width: 160px;
    height: 3px;
  }

  .services-content {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding: 60px 20px;
  }
}

@media (max-width: 768px) {
  .services-header {
    padding: 80px 0 40px 0;
  }

  .container {
    padding: 0 20px;
  }

  .header-content {
    max-width: 100%;
  }

  .page-title {
    font-size: 2.8rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
    max-width: 600px;
    padding: 0 20px;
  }

  .header-divider {
    width: 120px;
  }

  .services-content {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 40px 25px;
  }
}

@media (max-width: 480px) {
  .services-header {
    padding: 60px 0 30px 0;
  }

  .container {
    padding: 0 15px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 0.9rem;
    max-width: 100%;
    padding: 0 25px;
  }

  .header-divider {
    width: 100px;
    height: 3px;
  }

  .services-content {
    padding: 30px 20px;
    gap: 20px;
  }
}
</style>
