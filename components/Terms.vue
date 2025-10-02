<template>
  <LegalPageLayout
    title="Termos de Utilização"
    subtitle="Condições de acesso e utilização do website"
  >
    <IntroText :texts="introTexts" />

    <LegalSection title="I. Objeto e âmbito">
      <p>
        O presente website tem por objetivo prestar informações sobre o escritório Carina Babo e
        Sara Costa - Escritório de advogadas em prática individual e os seus serviços jurídicos. As
        informações aqui disponibilizadas são meramente informativas e não constituem aconselhamento
        jurídico específico.
      </p>
      <p>
        Nenhuma informação contida neste website estabelece uma relação advogado-cliente entre o
        utilizador e o nosso escritório. Para tal, é necessário um contacto direto e a celebração de
        um contrato de prestação de serviços.
      </p>
    </LegalSection>

    <LegalSection title="II. Acesso ao website">
      <p>
        O acesso ao website é livre e gratuito. O escritório reserva-se o direito de, a qualquer
        momento e sem aviso prévio, suspender ou interromper o acesso ao website, parcial ou
        totalmente, por motivos técnicos, de manutenção ou outros que considere justificados.
      </p>
      <p>
        O utilizador compromete-se a utilizar o website de forma lícita e em conformidade com os
        presentes Termos de Utilização, não devendo praticar atos que prejudiquem o funcionamento do
        website ou os direitos de terceiros.
      </p>
    </LegalSection>

    <LegalSection title="III. Propriedade intelectual">
      <p>
        Todos os conteúdos deste website, incluindo textos, imagens, fotografias, logótipos, marcas,
        gráficos, vídeos, códigos de programação e outros elementos, estão protegidos por direitos
        de propriedade intelectual e são propriedade do escritório ou de terceiros que autorizaram a
        sua utilização.
      </p>
      <p>
        É expressamente proibida a reprodução, distribuição, comunicação pública, transformação ou
        qualquer outra forma de exploração dos conteúdos do website sem autorização prévia e
        expressa do escritório.
      </p>
    </LegalSection>

    <LegalSection title="IV. Utilização de formulários e contactos">
      <p>
        Os formulários de contacto disponíveis no website destinam-se exclusivamente ao
        estabelecimento de contacto com o escritório para pedidos de informação ou marcação de
        consultas.
      </p>
      <p>
        O utilizador compromete-se a fornecer informações verdadeiras e atualizadas e a não utilizar
        os formulários para fins ilícitos ou que possam prejudicar o escritório ou terceiros.
      </p>
    </LegalSection>

    <LegalSection title="V. Limitação de responsabilidade">
      <p>
        O escritório não garante a disponibilidade contínua e ininterrupta do website, nem a
        ausência de vírus ou outros elementos nocivos. O website é disponibilizado "tal como está",
        sem garantias de qualquer natureza.
      </p>
      <p>O escritório não se responsabiliza por:</p>
      <ul>
        <li>Interrupções no funcionamento do website por motivos técnicos</li>
        <li>Danos resultantes do acesso ou utilização do website</li>
        <li>Erros ou imprecisões nos conteúdos disponibilizados</li>
        <li>Atos de terceiros que afetem o funcionamento do website</li>
        <li>Vírus ou outros elementos nocivos que possam afetar o equipamento do utilizador</li>
      </ul>
    </LegalSection>

    <LegalSection title="VI. Links para websites de terceiros">
      <p>
        Este website pode conter links para websites de terceiros. Estes links são fornecidos apenas
        para conveniência do utilizador e não implicam aprovação ou responsabilidade do escritório
        pelo conteúdo desses websites.
      </p>
      <p>
        O escritório não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de
        websites de terceiros. Recomendamos que consulte os termos e políticas desses websites antes
        de os utilizar.
      </p>
    </LegalSection>

    <LegalSection title="VII. Proteção de dados pessoais">
      <p>
        O tratamento de dados pessoais recolhidos através deste website é regido pela nossa Política
        de Privacidade, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e
        demais legislação aplicável.
      </p>
      <p>
        Para mais informações sobre como tratamos os seus dados pessoais, consulte a nossa
        <a href="#politica-privacidade">Política de Privacidade</a>.
      </p>
    </LegalSection>

    <LegalSection title="VIII. Alterações aos Termos de Utilização">
      <p>
        O escritório reserva-se o direito de alterar os presentes Termos de Utilização a qualquer
        momento, sem aviso prévio. As alterações entram em vigor no momento da sua publicação no
        website.
      </p>
      <p>
        A continuação da utilização do website após a publicação de alterações constitui aceitação
        dos novos termos.
      </p>
    </LegalSection>

    <LegalSection title="IX. Lei aplicável e foro competente">
      <p>
        Os presentes Termos de Utilização regem-se pela lei portuguesa. Para a resolução de qualquer
        litígio emergente da utilização deste website será competente o foro da comarca do Porto,
        com expressa renúncia a qualquer outro.
      </p>
    </LegalSection>

    <LegalSection title="X. Contactos">
      <p>
        Para questões relacionadas com estes Termos de Utilização ou com a utilização do website,
        pode contactar-nos através de:
      </p>
      <div class="contact-box">
        <p><strong>Email:</strong> geral@escritorio-advogadas.pt</p>
        <p><strong>Morada:</strong> Rua Ramalho Ortigão, 57, Vila Nova de Gaia, Portugal</p>
        <p><strong>Telefone:</strong> +351 22 123 4567</p>
      </div>
    </LegalSection>
  </LegalPageLayout>
</template>

<script>
import LegalPageLayout from '../components/shared/LegalPageLayout.vue'
import LegalSection from '../components/shared/LegalSection.vue'
import IntroText from '../components/shared/IntroText.vue'

export default {
  name: 'TermsView',
  components: { LegalPageLayout, LegalSection, IntroText },
  data() {
    return {
      introTexts: [
        'Os presentes Termos de Utilização regulam o acesso e utilização do website do escritório Carina Babo e Sara Costa - Escritório de advogadas em prática individual.',
        'A utilização deste website implica a aceitação integral destes Termos de Utilização. Caso não concorde com algum dos termos, deve abster-se de utilizar este website.',
      ],
    }
  },
}
</script>
