import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className='header__logo' role='img' aria-label="Logo" />
      <img className='header__banner' src="./images/participante.png" alt="Participante" />
    </div>
  )
}

export default Header
