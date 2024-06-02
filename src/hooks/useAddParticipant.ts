import { useRecoilState, useSetRecoilState } from 'recoil'

import { participantsState } from '../states/atoms/participantState'
import { errorMessageState } from '../states/atoms/errorMessageState'

export const useAddParticipant = () => {
  const [participants, setParticipants] = useRecoilState(participantsState)
  const setErrorMessage = useSetRecoilState(errorMessageState)
  return (newParticipant: string) => {
    if (participants.includes(newParticipant)) {
      setErrorMessage('Esse participante já existe!')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
      return
    }
    return setParticipants((oldParticipantes) => [
      ...oldParticipantes,
      newParticipant,
    ])
  }
}
