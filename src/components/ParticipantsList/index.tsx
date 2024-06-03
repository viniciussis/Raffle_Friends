import { useParticipants } from '../../hooks/useParticipants'

const ParticipantsList = () => {
  const participants = useParticipants()
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  )
}

export default ParticipantsList
