import ParticipantsList from '../../components/ParticipantsList'
import Footer from '../../components/Footer'
import Form from '../../components/Form'
import Card from '../../components/Card'

const Home = () => {
  return (
    <Card>
      <main>
        <h1
          style={{
            color: 'orange',
            marginBottom: '2rem',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          Vamos começar!
        </h1>
        <Form />
        <ParticipantsList />
        <Footer />
      </main>
    </Card>
  )
}

export default Home
