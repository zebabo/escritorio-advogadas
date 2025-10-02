<template>
  <footer id="contactos" class="footer">
    <div class="footer-container">
      <!-- Informações de Contacto -->
      <div class="footer-section">
        <h3>Contactos</h3>
        <div class="contact-info">
          <div class="contact-item">
            <img src="/images/icons/mail.png" alt="Email" class="icon-img" />
            <a href="mailto:geral@escritorio-advogadas.pt" class="contact-link">
              <span>geral@escritorio-advogadas.pt</span>
            </a>
          </div>
          <div class="contact-item">
            <img src="/images/icons/mobile.png" alt="Telemóvel" class="icon-img" />
            <span>+351 912 345 678</span>
          </div>
          <div class="contact-item">
            <img src="/images/icons/phone.png" alt="Telefone" class="icon-img" />
            <span>+351 22 123 4567</span>
          </div>
        </div>
      </div>

      <!-- Localização -->
      <div class="footer-section">
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
                <p>Vila Nova de Gaia</p>
                <p>Portugal</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Redes Sociais -->
      <div class="footer-section">
        <h3>Siga-nos</h3>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <img src="/images/icons/linkedin.png" alt="LinkedIn" class="social-icon-img" />
          </a>
          <a href="#" class="social-link" aria-label="Facebook">
            <img src="/images/icons/facebook.png" alt="Facebook" class="social-icon-img" />
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <img src="/images/icons/instagram.png" alt="Instagram" class="social-icon-img" />
          </a>
        </div>
      </div>
    </div>

    <!-- Linha de Separação -->
    <div class="footer-divider"></div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="copyright">
        <p>&copy; {{ currentYear }} Escritório de Advogadas. Todos os direitos reservados.</p>
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
.footer {
  background: #e4e2dd;
  color: white;
  padding: 60px 0 30px;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 25px;
  color: #ecf0f1;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 2px;
  background: #4a6741;
}

/* Contactos */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  filter: brightness(1.2);
}

.contact-item .icon-img {
  width: 20px;
  height: 20px;
  filter: brightness(0.8);
  transition: filter 0.3s ease;
}

.contact-item span {
  font-size: 1rem;
  color: #bdc3c7;
}

.contact-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #4a6741;
}

.contact-link span {
  font-size: 1rem;
  color: #bdc3c7;
  transition: color 0.3s ease;
}

.contact-link:hover span {
  color: #4a6741;
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

.location-item:hover .icon-img {
  filter: brightness(1.2);
}

.location-item .icon-img {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  filter: brightness(0.8);
  transition: filter 0.3s ease;
}

.location-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
  cursor: pointer;
}

.location-link:hover {
  color: #4a6741;
}

.location-link div p {
  margin: 2px 0;
  color: #bdc3c7;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.location-link:hover div p {
  color: #4a6741;
}

/* Redes Sociais */
.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: rgba(74, 103, 65, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.social-link:hover .social-icon-img {
  filter: brightness(1.2) scale(1.1);
}

.social-icon-img {
  width: 24px;
  height: 24px;
  filter: brightness(0.9);
  transition: all 0.3s ease;
}

/* Divisória */
.footer-divider {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 100%
  );
  margin: 40px auto 30px;
  max-width: 1200px;
}

/* Footer Bottom */
.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright p {
  font-size: 0.9rem;
  color: #95a5a6;
  margin: 0;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.legal-link {
  color: #95a5a6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #ecf0f1;
}

.separator {
  color: #7f8c8d;
  font-size: 0.8rem;
}

/* Responsivo */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-item,
  .location-item {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .legal-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 15px;
  }

  .footer-bottom {
    padding: 0 15px;
  }

  .social-link {
    width: 45px;
    height: 45px;
  }
}
</style>
