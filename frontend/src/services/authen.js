import httpClient from '../plugins/axios'

export const refreshAccessToken = async (useranme, refreshToken) => {
  const result = await httpClient.post('/graphql', {
    query: `mutation refresh($username: String!, $refreshToken: String!) {
      refresh(username: $username, refreshToken: $refreshToken){
        tokenType
        accessToken
        refreshToken
        expiresIn
      }
    }`,
    variables: {
      useranme,
      refreshToken
    }
  })
  return result
}


export const login = async (useranme, password) => {
  const result = await httpClient.post('/graphql', {
    query: `mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password){
        _id
        username
        fullname
        createdAt
        updatedAt
        token {
          tokenType
          accessToken
          refreshToken
          expiresIn
        }
      }
    }`,
    variables: {
      useranme,
      password
    }
  })
  return result
}

export const register = async (useranme, password, fullname) => {
  const result = await httpClient.post('/graphql', {
    query: `mutation register($username: String!, $password: String!, $fullname String!) {
      register(username: $username, password: $password){
        _id
        username
        fullname
        createdAt
        updatedAt
        token {
          tokenType
          accessToken
          refreshToken
          expiresIn
        }
      }
    }`,
    variables: {
      useranme,
      password,
      fullname
    }
  })
  return result
}