<template>
  <div class="articles-page">
    <!-- Header da página -->
    <section class="articles-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Artigos Jurídicos</h1>
          <p class="page-subtitle">Conhecimento e insights das nossas especialistas em direito</p>
          <div class="header-divider"></div>
        </div>
      </div>
    </section>

    <!-- Carousel de artigos -->
    <section class="articles-content">
      <ArticlesCarousel :articles="articles" />
    </section>

    <AppFooter />
  </div>
</template>

<script>
import ArticlesCarousel from '../components/ArticlesCarousel.vue'
import Footer from '../components/shared/AppFooter.vue'

export default {
  name: 'ArticlesView',
  components: {
    ArticlesCarousel,
    AppFooter: Footer,
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Direitos e Deveres no Divórcio: Guia Essencial',
          excerpt:
            'O processo de divórcio envolve várias questões legais complexas. Desde a divisão de bens até à regulação do poder paternal, é fundamental conhecer os seus direitos e obrigações. Este artigo aborda os aspetos mais importantes do processo de divórcio em Portugal, fornecendo orientações práticas para quem enfrenta esta situação.',
          author: 'Carina Babo',
          authorImage: '/images/carina.png',
          date: '2024-11-15',
          category: 'Direito de Família',
          tags: ['Divórcio', 'Direito de Família', 'Poder Paternal'],
          readTime: 8,
        },
        {
          id: 2,
          title: 'Contratos de Trabalho: Direitos dos Trabalhadores em 2024',
          excerpt:
            'As relações laborais estão em constante evolução. Com as alterações legislativas recentes, é crucial que trabalhadores e empregadores conheçam os seus direitos e deveres. Analisamos as principais mudanças no Código do Trabalho e o seu impacto nas relações laborais, incluindo questões como teletrabalho, férias e rescisão de contratos.',
          author: 'Sara Costa',
          authorImage: '/images/sara.png',
          date: '2024-11-08',
          category: 'Direito do Trabalho',
          tags: ['Contratos', 'Direito Laboral', 'Legislação'],
          readTime: 6,
        },
        {
          id: 3,
          title: 'Acidentes de Viação: Como Proceder e Reclamar Indemnizações',
          excerpt:
            'Sofreu um acidente de viação? Saber como proceder nos primeiros momentos é fundamental para proteger os seus direitos. Este guia prático explica todos os passos a seguir após um acidente, desde o preenchimento da declaração amigável até ao processo de reclamação de indemnizações junto das seguradoras.',
          author: 'Carina Babo',
          authorImage: '/images/carina.png',
          date: '2024-10-28',
          category: 'Direito Civil',
          tags: ['Acidentes', 'Seguros', 'Indemnizações'],
          readTime: 10,
        },
        {
          id: 4,
          title: 'Crimes Informáticos: Proteção Legal no Mundo Digital',
          excerpt:
            'A era digital trouxe novos desafios jurídicos. Desde o cyberbullying até à violação de dados pessoais, os crimes informáticos estão em crescimento. Explicamos como a lei portuguesa protege os cidadãos no espaço digital e que medidas pode tomar se for vítima de um crime informático.',
          author: 'Sara Costa',
          authorImage: '/images/sara.png',
          date: '2024-10-20',
          category: 'Direito Penal',
          tags: ['Crimes Informáticos', 'Proteção de Dados', 'Cybersegurança'],
          readTime: 7,
        },
        {
          id: 5,
          title: 'Testamentos e Heranças: Planeamento Sucessório',
          excerpt:
            'O planeamento sucessório é uma questão delicada mas essencial. Como garantir que os seus bens são distribuídos conforme a sua vontade? Abordamos os diferentes tipos de testamento, a legítima, as doações em vida e outras estratégias para um planeamento sucessório eficaz, sempre respeitando a lei portuguesa.',
          author: 'Carina Babo',
          authorImage: '/images/carina.png',
          date: '2024-10-12',
          category: 'Direito de Família',
          tags: ['Testamentos', 'Heranças', 'Sucessões'],
          readTime: 9,
        },
        {
          id: 6,
          title: 'Direito do Consumidor: Como Defender os Seus Direitos',
          excerpt:
            'Comprou um produto defeituoso? Teve problemas com um serviço contratado? O direito do consumidor protege-o em várias situações. Conheça os seus direitos enquanto consumidor, desde o direito de livre resolução até à garantia de bens de consumo, e saiba como reclamar eficazmente.',
          author: 'Sara Costa',
          authorImage: '/images/sara.png',
          date: '2024-10-05',
          category: 'Direito do Consumidor',
          tags: ['Consumidor', 'Garantias', 'Reclamações'],
          readTime: 5,
        },
      ],
    }
  },
}
</script>

<style scoped>
.articles-page {
  width: 100%;
  min-height: 100vh;
  background: #f1eee9;
  overflow-x: hidden;
}

/* Header da página */
.articles-header {
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

/* Conteúdo dos artigos */
.articles-content {
  background: #f1eee9;
}

/* Responsividade */
@media (max-width: 1024px) {
  .articles-header {
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
  .articles-header {
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
  .articles-header {
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
