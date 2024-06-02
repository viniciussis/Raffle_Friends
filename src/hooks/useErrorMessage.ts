import { useRecoilValue } from 'recoil'

import { errorMessageState } from '../states/atoms/errorMessageState'

export const useErrorMessage = () => {
  const errorMessage = useRecoilValue(errorMessageState)
  return errorMessage
}
