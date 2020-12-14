import { atom } from 'recoil'

// atom 
export const authenAtom = atom({
  key: 'authenState',
  default: {
    accessToek: '',
    tokenType: '',
    expiresIn: '',
    refreshToken: ''
  },
})


