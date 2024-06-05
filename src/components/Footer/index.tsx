import { useNavigate } from 'react-router-dom'

import { useParticipants } from '../../hooks/useParticipants'
import './Footer.scss'
import { useSorteador } from '../../hooks/useSorteador'

const Footer = () => {
  const participants = useParticipants()
  const navigate = useNavigate()
  const sortear = useSorteador()
  
  function start() {
    sortear()
    navigate('/sorteio')
  }
  
  return (
    <section className="footer">
      <button
        disabled={participants.length < 3 ? true : false}
        className="footer__button"
        onClick={start}
      >
        Iniciar Brincadeira!
      </button>
      <img src="/images/sacolas.png" alt="sacolas" />
    </section>
  )
}

export default Footer
