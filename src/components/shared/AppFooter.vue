<template>
  <footer id="contactos" class="footer">
    <div class="footer-container">
      <div class="footer-section contact-section">
        <h3>Contactos</h3>
        <div class="contact-info">
          <div class="contact-item">
            <img src="/images/icons/mail.png" alt="Email" class="icon-img" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=carina.babo@sscb.pt"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link"
            >
              <span>carina.babo@sscb.pt</span>
            </a>
          </div>

          <div class="contact-item">
            <img src="/images/icons/mobile.png" alt="Telemóvel" class="icon-img" />
            <span>+351 910 035 536</span>
          </div>

          <div class="contact-item">
            <img src="/images/icons/mail.png" alt="Email" class="icon-img" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sara.santos.costa@sscb.pt"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-link"
            >
              <span>sara.santos.costa@sscb.pt</span>
            </a>
          </div>

          <div class="contact-item">
            <img src="/images/icons/mobile.png" alt="Telefone" class="icon-img" />
            <span>+351 918 844 926</span>
          </div>
        </div>
      </div>

      <div class="footer-section location-section">
        <h3>Localização</h3>
        <div class="location-info">
          <div class="location-item">
            <a
              href="https://maps.google.com/?q=Rua+Ramalho+Ortigão,+57,+Vila+Nova+De+Gaia,+Portugal"
              target="_blank"
              rel="noopener noreferrer"
              class="location-link"
            >
              <div>
                <p>Rua Ramalho Ortigão, 57</p>
                <p>Vila Nova de Gaia,</p>
                <p>4400-265</p>
                <p>Portugal</p>
                <p></p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-section social-section">
        <h3>Siga-nos</h3>
        <div class="social-links">
          <a href="https://www.facebook.com/SSCB.Advogadas" target="_blank" class="social-link" aria-label="Facebook">
            <img src="/images/icons/facebook.png" alt="Facebook" class="social-icon-img" />
          </a>
          <a href="https://www.instagram.com/sscb_advogadas/" target="_blank" class="social-link" aria-label="Instagram">
            <img src="/images/icons/instagram.png" alt="Instagram" class="social-icon-img" />
          </a>
        </div>
        <img src="/images/simbolo.svg" alt="Logo Escritório" class="simbol simbol-desktop" />
      </div>

      <div class="footer-section logo-section">
        <img src="/images/simbolo.svg" alt="Logo Escritório" class="simbol simbol-mobile" />
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <div class="copyright">
        <p>© {{ currentYear }} Escritório de Advogadas. Todos os direitos reservados.</p>
      </div>
      <div class="legal-links">
        <a href="/political" class="legal-link">Política de Privacidade</a>
        <span class="separator">|</span>
        <a href="/terms" class="legal-link">Termos de Serviço</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
/* Estilos globais do Footer */
.footer {
  background: #5c5545;
  color: #f1eee9;
  padding: 60px 0 30px;
  margin-top: auto;
  border-top: 2px solid #8b7355;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  /* Margens laterais (padding) aumentadas e centralizadas para Desktop */
  padding: 0 50px;
  display: grid;
  /* Desktop: 3 colunas padrão */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  justify-content: center;
  justify-items: center; /* Alinha os itens ao centro no grid de 3 colunas (Desktop) */
}

/* Estilos para o Logotipo */
.simbol {
  width: 120px;
  height: auto;
  margin-top: 50px;
}

/* Visibilidade do Logotipo - Desktop (> 1024px) */
.logo-section {
  display: none;
}

.simbol-desktop {
  display: block;
}

.simbol-mobile {
  display: none;
}

/* Estilos das Secções */
.footer-section h3 {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 25px;
  color: #f1eee9;
  position: relative;
  font-family: 'Noto Serif Display', serif;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #8b7355;
}

/* Centralização do título na secção Social (Desktop) */
.footer-section.social-section {
  text-align: center;
  align-items: center;
}
.footer-section.social-section h3::after {
  left: 25%;
  transform: translateX(-50%);
}

/* Contactos */
.contact-info {
  display: flex;
  flex-direction: column;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item:hover .icon-img {
  filter: brightness(1.3);
}

.contact-item .icon-img {
  width: 20px;
  height: 20px;
  filter: brightness(0.9) invert(1);
  transition: filter 0.3s ease;
}

.contact-item span {
  font-size: 1rem;
  color: #d4cfc4;
  font-family: 'Object Sans', sans-serif;
}

.contact-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #f1eee9;
}

.contact-link span {
  font-size: 1rem;
  color: #d4cfc4;
  transition: color 0.3s ease;
  font-family: 'Object Sans', sans-serif;
}

.contact-link:hover span {
  color: #f1eee9;
}

/* Localização */
.location-info {
  display: flex;
  flex-direction: column;
}

.location-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  transition: transform 0.3s ease;
}

.location-item:hover {
  transform: translateX(5px);
}

.location-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
  cursor: pointer;
}

.location-link:hover {
  color: #f1eee9;
}

.location-link div p {
  margin: 2px 0;
  color: #d4cfc4;
  font-size: 1rem;
  transition: color 0.3s ease;
  font-family: 'Object Sans', sans-serif;
}

.location-link:hover div p {
  color: #f1eee9;
}

/* Redes Sociais */
.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center; /* Manter centrado em desktop */
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #4a473a;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #8b7355;
}

.social-link:hover {
  background: #8b7355;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.social-link:hover .social-icon-img {
  filter: brightness(1.2) scale(1.1);
}

.social-icon-img {
  width: 24px;
  height: 24px;
  filter: brightness(0.9) invert(1);
  transition: all 0.3s ease;
}

/* Divisória */
.footer-divider {
  height: 2px;
  background: #8b7355;
  margin: 40px auto 30px;
  max-width: 1200px;
}

/* Footer Bottom */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  /* Margens laterais (padding) aumentadas e centralizadas para Desktop */
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright p {
  font-size: 0.9rem;
  color: #a39d8f;
  margin: 0;
  font-family: 'Object Sans', sans-serif;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.legal-link {
  color: #a39d8f;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  font-family: 'Object Sans', sans-serif;
}

.legal-link:hover {
  color: #f1eee9;
}

.separator {
  color: #8b7355;
  font-size: 0.8rem;
}


/* --- Responsivo Tablet e Mobile (max-width: 1035px) --- */
@media (max-width: 1035px) {
  .footer {
    padding: 45px 0 25px;
  }

  .footer-container {
    /* Padding lateral para Tablet/Desktop Pequeno */
    padding: 0 40px;
    /* Layout 2x2, mantido até o fim */
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 30px;

    /* ALTERADO: Centraliza a posição de todo o bloco 2x2 */
    justify-items: center;
    text-align: left;
  }

  .footer-section.social-section {
  text-align: center;
  align-items: center;
  margin-left: -100px;
}


.footer-section.social-section h3::after {
  left: 32%;
  transform: translateX(-50%);
}
  /* Secções da Primeira Coluna (Contactos e Siga-nos) */
  .contact-section,
  .social-section {
    /* Define a secção para alinhar o seu conteúdo à esquerda */
    text-align: left;
  }

  /* CRUCIAL: Alinha o Título e a Linha (H3) de Contactos e Siga-nos à esquerda */
  .contact-section h3::after,
  .social-section h3::after {
    left: 0;
    transform: none;
  }

  /* CRUCIAL: Alinha os ícones de redes sociais à esquerda */
  .social-links {
    justify-content: flex-start;
  }

  /* Secções da Segunda Coluna (Localização e Logotipo) */
  .location-section,
  .logo-section {
    /* Faz com que os blocos da segunda coluna se centrem na sua célula */
    justify-self: center;
  }


  .footer-bottom {
    padding: 0 40px;
  }

  .footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .simbol-desktop {
    display: none;
  }
  .simbol-mobile {
    display: block;
    margin-top: 0;
    width: 120px;
  }
  .footer-divider {
    margin: 30px auto 25px;
  }
  .contact-item span,
  .contact-link span,
  .location-link div p {
    font-size: 0.9rem;
  }
  .copyright p,
  .legal-link {
    font-size: 0.85rem;
  }

  /* Reordenamento 2x2: */
  .contact-section { order: 1; }
  .location-section { order: 2; }
  .social-section { order: 3; }
  .logo-section {
    display: flex;
    order: 4;
    justify-content: center; /* Manter centrado na sua célula para melhor visual */
  }
}

/* --- Responsivo Mobile (max-width: 768px) --- */
@media (max-width: 768px) {
  /* Mantém as regras de alinhamento e centralização do 1024px */
  .footer {
    padding: 35px 0 20px;
  }

  .footer-container {
    padding: 0 30px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .footer-bottom {
    padding: 0 30px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .footer-section h3 {
    font-size: 1.1rem;
    margin-bottom: 18px;
  }

  .contact-item span,
  .contact-link span,
  .location-link div p {
    font-size: 0.8rem;
  }

  .contact-item,
  .location-item {
    padding: 8px 0;
  }

  .contact-item .icon-img {
    width: 18px;
    height: 18px;
  }

  .footer-section.social-section h3::after {
  left: 38%;
  transform: translateX(-50%);
}

  .social-link {
    width: 40px;
    height: 40px;
  }

  .social-icon-img {
    width: 20px;
    height: 20px;
  }

  .simbol-mobile {
    width: 100px;
  }

  .footer-divider {
    margin: 25px auto 20px;
  }

  .copyright p,
  .legal-link {
    font-size: 0.8rem;
  }

  .legal-links {
    justify-content: center;
  }
}

/* --- Responsivo Mobile Pequeno (max-width: 480px) --- */
@media (max-width: 480px) {
  /* Mantém as regras de alinhamento e centralização do 1024px */
  .footer {
    padding: 30px 0 18px;
  }

  .footer-container {
    padding: 0 30px;
    gap: 15px;
    margin-bottom: 15px;
  }

  .footer-bottom {
    padding: 0 20px;
  }

  .footer-section h3 {
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .footer-section.social-section h3::after {
  left: 40%;
  transform: translateX(-50%);
}

  .contact-item,
  .location-item {
    padding: 6px 0;
  }

  .contact-item span,
  .contact-link span,
  .location-link div p {
    font-size: 0.7rem;
  }

  .contact-item .icon-img {
    width: 16px;
    height: 16px;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-icon-img {
    width: 16px;
    height: 16px;
  }

  .simbol-mobile {
    width: 80px;
  }

  .copyright p,
  .legal-link {
    font-size: 0.75rem;
  }

  .footer-divider {
    margin: 20px auto 18px;
  }
}
</style>
