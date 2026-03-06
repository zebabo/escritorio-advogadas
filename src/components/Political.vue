<template>
  <LegalPageLayout
    title="Política de Privacidade"
    subtitle="Proteção e tratamento dos seus dados pessoais."
  >
    <IntroText :texts="introTexts" />

    <LegalSection title="I. Identidade do responsável pelo tratamento">
      <p>
        Os seus dados pessoais serão tratados por Carina Babo e Sara Costa - Escritório de advogadas
        em prática individual, com sede na Rua Ramalho Ortigão, 57, Vila Nova de Gaia, Portugal,
        e-mail geral@escritorio-advogadas.pt, telefone +351 22 123 4567.
      </p>
      <p>
        O nosso escritório é responsável pelo tratamento dos dados pessoais na aceção do Regulamento
        Geral sobre a Proteção de Dados (Regulamento (UE) 2016/679).
      </p>
    </LegalSection>

    <LegalSection title="II. Que dados pessoais recolhemos e tratamos?">
      <p>
        O simples acesso e visualização do Website não implica a disponibilização de dados pessoais
        por parte dos utilizadores. Tais dados pessoais são apenas disponibilizados pelos
        utilizadores quando estes utilizam os formulários de contacto constantes deste Website.
      </p>
      <p>
        Quando nos contacta através da utilização dos formulários de contacto, podemos tratar as
        seguintes categorias de dados pessoais:
      </p>
      <ul>
        <li>
          <strong>Dados de identificação:</strong> nome, contactos telefónicos e e-mail, morada
        </li>
        <li>
          <strong>Dados relativos à consulta jurídica:</strong> descrição da situação, área de
          direito, documentos relacionados
        </li>
        <li>
          <strong>Dados da atividade profissional:</strong> informações relativas a processos e
          dossiers, informações relativas a diligências
        </li>
      </ul>
    </LegalSection>

    <LegalSection
      title="III. Para que finalidade e com que fundamento recolhemos e tratamos os seus dados pessoais?"
    >
      <p>
        O nosso escritório apenas recolherá e tratará os seus dados pessoais com os seguintes
        fundamentos e para as finalidades que se indicam:
      </p>
      <ul>
        <li>
          <strong>Prestação de serviços jurídicos:</strong> os dados pessoais serão tratados para
          prestação de consultoria e representação legal. O fundamento é o cumprimento de contrato
          ou diligências pré-contratuais.
        </li>
        <li>
          <strong>Resposta a pedidos de informação:</strong> os dados pessoais serão tratados, com
          fundamento no seu consentimento e num interesse legítimo, para gerir o contacto
          estabelecido e prestar os esclarecimentos solicitados.
        </li>
        <li>
          <strong>Cumprimento de obrigações legais:</strong> tratamento necessário para o
          cumprimento de obrigações legais da advocacia, incluindo arquivo de processos.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="IV. Quais são os seus direitos?">
      <p>Ao abrigo da legislação aplicável, poderá a qualquer momento:</p>
      <ul>
        <li>
          <strong>Solicitar o acesso à informação:</strong> obter confirmação e acesso aos seus
          dados pessoais em tratamento
        </li>
        <li><strong>Solicitar a retificação:</strong> corrigir dados inexatos ou incompletos</li>
        <li><strong>Solicitar a eliminação:</strong> apagar dados quando já não necessários</li>
        <li>
          <strong>Opor-se ao tratamento:</strong> em determinadas situações, requerer que cessemos o
          tratamento
        </li>
        <li>
          <strong>Solicitar a limitação:</strong> restringir o tratamento em situações específicas
        </li>
        <li>
          <strong>Retirar consentimento:</strong> quando o tratamento depender do seu consentimento
        </li>
        <li>
          <strong>Portabilidade:</strong> receber os seus dados num formato estruturado e de leitura
          automática
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="V. Durante quanto tempo conservamos os seus dados?">
      <p>
        Conservamos os seus dados pessoais durante o período estritamente necessário para os
        propósitos para os quais foram recolhidos. No contexto da advocacia, alguns dados podem ser
        conservados por períodos mais longos por imposição do Estatuto da Ordem dos Advogados e
        demais legislação aplicável.
      </p>
    </LegalSection>

    <LegalSection title="VI. A quem são transmitidos os seus dados?">
      <p>
        Não transmitimos os seus dados pessoais a terceiros, exceto quando necessário à prestação
        dos serviços contratados, ao cumprimento de obrigações legais ou deontológicas. A
        transmissão é sempre realizada de acordo com a legislação de proteção de dados.
      </p>
      <p>Podemos partilhar dados com:</p>
      <ul>
        <li>Fornecedores de serviços de TI e comunicações</li>
        <li>Tribunais e outras entidades judiciárias</li>
        <li>Autoridades públicas, quando legalmente obrigatório</li>
        <li>Peritos e consultores necessários aos processos</li>
      </ul>
    </LegalSection>

    <LegalSection title="VII. Segurança e confidencialidade">
      <p>
        Empregamos medidas de segurança apropriadas para proteger os seus dados pessoais e impedir o
        acesso a pessoas não autorizadas. Os nossos sistemas são sujeitos a análises periódicas de
        segurança.
      </p>
      <p>
        O sigilo profissional da advocacia garante proteção adicional às informações que nos
        confiar.
      </p>
    </LegalSection>

    <LegalSection title="VIII. Contactos e exercício de direitos">
      <p>
        Para exercer os seus direitos ou esclarecer dúvidas sobre o tratamento dos seus dados
        pessoais, contacte-nos:
      </p>
      <div class="contact-box">
        <p><strong>Email:</strong> geral@escritorio-advogadas.pt</p>
        <p><strong>Morada:</strong> Rua Ramalho Ortigão, 57, Vila Nova de Gaia, Portugal</p>
        <p><strong>Telefone:</strong> +351 22 123 4567</p>
      </div>
      <p>
        Se considerar que os seus dados não foram tratados em conformidade com a lei, pode
        apresentar reclamação à Comissão Nacional de Proteção de Dados.
      </p>
    </LegalSection>
  </LegalPageLayout>
</template>

<script>
import LegalPageLayout from '../components/shared/LegalPageLayout.vue'
import LegalSection from '../components/shared/LegalSection.vue'
import IntroText from '../components/shared/IntroText.vue'

export default {
  name: 'PrivacyPolicyView',
  components: { LegalPageLayout, LegalSection, IntroText },
  data() {
    return {
      introTexts: [
        'A presente política de privacidade regula o tratamento dos dados pessoais dos utilizadores recolhidos no âmbito do acesso e visualização do website do nosso escritório de advogadas, mantido por Carina Babo e Sara Costa - Escritório de advogadas em prática individual.',
        'A disponibilização dos seus dados pessoais através do Website implica o conhecimento e aceitação das condições constantes desta política de privacidade.',
      ],
    }
  },
}
</script>
