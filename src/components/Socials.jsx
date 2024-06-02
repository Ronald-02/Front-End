import React from 'react'

// Import Icons
import { ImInstagram, ImGithub, ImLinkedin, ImWhatsapp, ImMail } from 'react-icons/im'

const Socials = () => {
  return (
    <div className='hidden lg:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href="https://www.github.com/ronald-02" rel='noopener'>
            <ImGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/ronald-da-silva-b70752248" rel='noopener'>
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ronaldsouzx" rel='noopener'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5521965144357&text=Olá,%20Ronald!%20Vim%20do%20seu%20portfólio,%20Quero%20Trabalhar%20Contigo!" rel='noopener'>
            <ImWhatsapp />
          </a>
        </li>
        <li>
          <a href="mailto:ronald.souza@aluno.cefet-rj.br" rel='noopener'>
            <ImMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
