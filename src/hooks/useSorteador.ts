import { useSetRecoilState } from 'recoil'
import { useParticipants } from './useParticipants'
import resultState from '../states/atoms/resultState'
import realizarSorteio from '../helpers/realizarSorteio'

export const useSorteador = () => {
  const participants = useParticipants()
  const setResult = useSetRecoilState(resultState)

  return () => {
    const result = realizarSorteio(participants)
    setResult(result)
  }
}
