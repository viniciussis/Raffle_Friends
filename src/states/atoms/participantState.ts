import { atom } from 'recoil'

export const participantsState = atom<string[]>({
  key: 'participantsState',
  default: [],
})
