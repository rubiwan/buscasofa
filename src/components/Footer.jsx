import React from 'react'
import '@styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <h2 className='specialTeam'>Miembros del equipo</h2>
        <li>
          <a href="https://github.com/eQuechen" target='_blank'>
            Emilio Brahim Quechen Romero
          </a>
        </li>
        <li>
          <a href="https://github.com/rubiwan" target='_blank'>
            Ana Isabel Díaz Roig
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
