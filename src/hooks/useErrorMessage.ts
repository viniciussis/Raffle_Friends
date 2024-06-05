import { useRecoilValue } from 'recoil'

import { errorMessageState } from '../states/atoms/errorMessageState'

export const useErrorMessage = () => {
  return useRecoilValue(errorMessageState)
}
