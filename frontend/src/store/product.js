import { selector, atom } from 'recoil'
import { getProducts as getProductsService } from '../services/product'
// atom 
export const authenAtom = atom({
  key: 'productstState',
  default: [],
})


// get products
export const getProducts = selector({
  key: 'getProducts',
  get: async ({ set }) => {
    let products = []
    try {
      const { data: { getProducts: result } } = await getProductsService()
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
