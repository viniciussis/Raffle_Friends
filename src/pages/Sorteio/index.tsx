import Card from '../../components/Card'
import './Sorteio.scss'

const Sorteio = () => {
  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form>
          <select name="" id="">
            <option>Selecione seu nome...</option>
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="sorteio__button">Sortear</button>
        </form>
        <p className="sorteio__result">O seu amigo secreto é {}!</p>
        <footer className="sorteio__footer">
          <img src="/images/aviao.png" alt="um aviao de papel" />
        </footer>
      </section>
    </Card>
  )
}

export default Sorteio
