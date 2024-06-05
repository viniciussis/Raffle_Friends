import { useParticipants } from '../../hooks/useParticipants'

const ParticipantsList = () => {
  const participants: string[] = useParticipants()
  return (
    <ul
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
    >
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  )
}

export default ParticipantsList
