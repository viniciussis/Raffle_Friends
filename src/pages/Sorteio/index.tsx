import { useState } from 'react'

import { useParticipants } from '../../hooks/useParticipants'
import { useResult } from '../../hooks/useResult'
import Card from '../../components/Card'
import './Sorteio.scss'

const Sorteio = () => {
  const participants = useParticipants()
  const [chosenParticipant, setChosenParticipant] = useState('')
  const [secretFriend, setSecretFriend] = useState('')
  const result = useResult()

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (result.has(chosenParticipant)) {
      setSecretFriend(result.get(chosenParticipant)!)
      setTimeout(() => {
        setSecretFriend('')
      }, 3000)
    }
  }
  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={raffle}>
          <select
            required
            name="chosenParticipant"
            id="chosenParticipant"
            placeholder="Selecione seu nome..."
            value={chosenParticipant}
            onChange={(event) => setChosenParticipant(event.target.value)}
          >
            <option>Selecione seu nome...</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          {secretFriend && (
            <p>
              O seu amigo secreto é:
              <em role="alert" className="sorteio__result">
                {' ' + secretFriend}
              </em>
              !
            </p>
          )}
          <button className="sorteio__button">Sortear</button>
        </form>
        <img src="/images/aviao.png" alt="um aviao de papel" />
      </section>
    </Card>
  )
}

export default Sorteio
