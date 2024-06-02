import { useNavigate } from 'react-router-dom'

import { useParticipants } from '../../hooks/useParticipants'
import './Footer.scss'

const Footer = () => {
  const participants = useParticipants()
  const navigate = useNavigate()
  return (
    <section className="Footer">
      <button
        disabled={participants.length < 3 ? true : false}
        className="Footer__button"
        onClick={() => navigate('/sorteio')}
      >
        Iniciar Brincadeira!
      </button>
      <img src="/public/images/sacolas.png" alt="sacolas" />
    </section>
  )
}

export default Footer
