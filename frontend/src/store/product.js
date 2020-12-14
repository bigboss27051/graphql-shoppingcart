import { selector, atom } from 'recoil'
import { getProducts } from '../services/product'
// atom 
export const authenAtom = atom({
  key: 'productstState',
  default: [],
})


// get products
export const products = selector({
  key: 'getProducts',
  get: async ({ set }) => {
    let products = []
    try {
      const { data: { getProducts: result } } = await getProducts()
      if (result.length > 0) {
        products = [...result]
        set('productstState', products)
      }
    } catch (e) {
      console.log(e.message)
    }
    return products
  },
})
