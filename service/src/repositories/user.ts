import IUser from '../interfaces/user'
import User from '../models/user'

export const createUser = async (
  _username: string,
  _password: string,
  _fullname: string
): Promise<IUser> => {
  const userModel = new User({ _username, _password, _fullname })
  const result = await userModel.save()
  return {
    _id: result._id,
    username: result.get('username'),
    fullname: result.get('fullname'),
    password: '',
    createAt: result.get('createAt'),
    updateAt: result.get('updateAt'),
  }
}