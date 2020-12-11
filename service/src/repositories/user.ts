import User from '../models/user'

export const createUser = async (
  _username: string,
  _password: string,
  _fullname: string
): Promise<any> => {
  const userModel = new User({
    username: _username,
    password: _password,
    fullname: _fullname,
  })
  const result = await userModel.save()
  return {
    _id: result._id,
    username: result.get('username'),
    fullname: result.get('fullname'),
    createdAt: result.get('createdAt'),
    updatedAt: result.get('updatedAt'),
  }
}
