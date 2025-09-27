import './Footer.css'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'


function Footer() {
  return (
    <main>
     
    <footer className="footer">
       <section id="contact">
    <h1>Contact</h1>
    <p>Reach us via Facebok,WhatsApp,instgram or talgram.</p>
  </section>
      <div className="social-icons">
        <a>
        <FaWhatsapp size={30} />
        </a>
        <a>
        <FaFacebookF size={30} />
        </a>
        <a>
        <FaInstagram size={30} />
        </a>
        <a>
        <FaTelegramPlane size={30} />
        </a>
      </div>
      <div className="container">
        <p>جميع الحقوق محفوظة ©️ 2025 | موقعنا</p>
      </div>
    </footer>
    </main>
  )
}


export default Footer