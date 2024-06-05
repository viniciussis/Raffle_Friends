import { useRecoilValue } from 'recoil'

import { participantsState } from '../states/atoms/participantState'

export const useParticipants = () => {
  return useRecoilValue(participantsState)
}
