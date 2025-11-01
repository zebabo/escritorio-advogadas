<template>

   <HomeButton />
  <div class="team-page">
    <!-- Header da página -->
    <section class="team-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">A Nossa Equipa</h1>
          <p class="page-subtitle">
            Somos uma equipa de advogadas movida pelo compromisso com o rigor, a ética e a proximidade.
             Acreditamos que a advocacia se constrói com conhecimento profundo, dedicação e uma escuta ativa
             das necessidades dos nossos clientes. Atuamos de forma ágil e personalizada, antecipando desafios e propondo soluções
             que garantem segurança e confiança — hoje e no futuro.
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
        name="Carina Babo"
        :description="'Ser advogada é transformar\nconhecimento jurídico\nem soluções concretas.'"
        :extra-info="carinaExtraInfo"
        image-url="/images/carina.png"
        :reverse="false"
      />

      <!-- Segunda instância - Sara Costa (layout invertido) -->
      <LawyerProfile
        label="ADVOGADA"
        name="Sara S. Costa"
        :description="'Ser advogada é defender princípios,\nservir com integridade e\ntransformar vidas através do direito.'"
        :extra-info="saraExtraInfo"
        image-url="/images/sara.png"
        :reverse="true"
        :image-scale="90"
      />
    </section>

    <AppFooter />
  </div>
</template>

<script>
import LawyerProfile from '../components/LawyerProfile.vue'
import AppFooter from '../components/shared/AppFooter.vue'
import HomeButton from '../components/shared/HomeButton.vue'

export default {
  name: 'TeamView',
  components: {
    LawyerProfile,
    AppFooter,
    HomeButton,
  },
  data() {
    return {
      carinaExtraInfo: `<strong>Identificação:</strong><br>
      • Nome: Carina Babo<br>
      • Data de nascimento: 24/03/1998<br>
      • Cédula Profissional: n.º 69172P<br><br>

      <strong>Inscrição na Ordem dos Advogados:</strong><br>
      • Centro Regional do Porto<br>
      • Data de inscrição: 13 de outubro de 2023<br><br>

      <strong>Formação Académica:</strong><br>
      • Licenciatura em Direito (2017-2021), Faculdade de Direito da Universidade do Porto <br> <br>

      <strong>Serviços:</strong><br>
      • Assessoria jurídica<br>
      • Acompanhamento judicial transversal<br><br>

      <strong>Contactos:</strong><br>
      • Email: carina.babo@sscb.pt<br>
      • Telemóvel: +351 910 035 536`,

      saraExtraInfo: `<strong>Identificação:</strong><br>
      • Nome: Sara Santos Costa<br>
      • Data de nascimento: 17/12/1996<br>
      • Cédula Profissional: n.º 68928P<br><br>

      <strong>Inscrição na Ordem dos Advogados:</strong><br>
      • Centro Regional do Porto<br>
      • Data de inscrição: 26 de setembro de 2023<br><br>

      <strong>Formação Académica:</strong><br>
      • Licenciatura em Direito (2014-2018), Universidade Católica Portuguesa, Escola do Porto <br>
      • Mestrado em Direito (2018-2020), Universidade Católica Portuguesa, Escola do Porto <br> <br>

      <strong>Serviços:</strong><br>
      • Assessoria jurídica<br>
      • Acompanhamento judicial transversal<br><br>

      <strong>Contactos:</strong><br>
      • Email: sara.santos.costa@sscb.pt<br>
      • Telemóvel: +351 918 844 926`,
    }
  },
}
</script>

<style scoped>
.team-page {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  overflow-x: hidden;
}

/* Header da página */
.team-header {
  background: #ffffff;
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
  font-size: 6rem;
  font-weight: 100;
  color: #5c5545;
  line-height: 1.1;
  margin: 0 0 30px 0;
  font-family: 'Noto Serif Display', serif;
}

.page-subtitle {
  font-size: 1.8rem;
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

/* Conteúdo da equipa */
.team-content {
  background: #f1eee9;
}

/* Responsividade */
@media (max-width: 1024px) {
  .team-header {
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
    font-size: 5rem;
  }

  .page-subtitle {
    font-size: 1.4rem;
    max-width: 1100px;
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

  .container {
    padding: 0 20px;
  }

  .header-content {
    max-width: 100%;
  }

  .page-title {
    font-size: 4rem;
  }

  .page-subtitle {
    font-size: 1.2rem;
    max-width: 600px;
    padding: 0 20px;
  }

  .header-divider {
    width: 120px;
  }
}

@media (max-width: 480px) {
  .team-header {
    padding: 60px 0 30px 0;
  }

  .container {
    padding: 0 15px;
  }

  .page-title {
    font-size: 3rem;
  }

  .page-subtitle {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 25px;
  }

  .header-divider {
    width: 100px;
    height: 3px;
  }
}
</style>
