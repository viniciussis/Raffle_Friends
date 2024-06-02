import ParticipantsList from '../../components/ParticipantsList'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import './Home.scss'

const Home = () => {
  return (
    <main className="home">
      <h1 className="home__title">Vamos começar!</h1>
      <Form />
      <ParticipantsList />
      <Footer />
    </main>
  )
}

export default Home
