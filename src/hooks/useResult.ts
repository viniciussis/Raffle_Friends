import { useRecoilValue } from 'recoil'
import resultState from '../states/atoms/resultState'

export const useResult = () => {
  return useRecoilValue(resultState)
}
