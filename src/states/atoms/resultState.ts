import { atom } from 'recoil'

const resultState = atom<Map<string, string>>({
  key: 'resultState',
  default: new Map(),
})

export default resultState
