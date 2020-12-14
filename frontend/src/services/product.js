import httpClient from '../plugins/axios'

export const getProducts = async () => {
  const result = await httpClient.post('/graphql', {
    query: `query getProducts() {
      getProducts(){
        _id
        name
        detail
        imageUrl
        price
        quantity
        createdAt
        updatedAt
      }
    }`
  })
  return result
}