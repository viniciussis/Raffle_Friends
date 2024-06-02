import { useParticipants } from '../../hooks/useParticipants'
import './ParticipantsList.scss'

const ParticipantsList = () => {
  const participants = useParticipants()
  return (
    <ul className="participantsList">
      {participants.map((participant) => (
        <li className="participantsList__itens" key={participant}>
          {participant}
        </li>
      ))}
    </ul>
  )
}

export default ParticipantsList
