import { useRecoilValue } from 'recoil'

import { participantsState } from '../states/atoms/participantState'

export const useParticipants = () => {
  const participants = useRecoilValue(participantsState)
  return participants
}
