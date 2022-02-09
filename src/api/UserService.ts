import http from '../http/axios'
import { IResponseData } from '../types/index';
export interface IUserData {
  id: number;
  username: string;
  password: string;
  email: string;
  phone_no: string;
}
export interface ILoginParams {
  email: string;
  password: string;
}
// 获取用户信息
const getUserList = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    http.get<IUserData[]>('/api/users')
    .then((result: IResponseData<IUserData[]>) => {
      resolve(result.data)
    })
    .catch((err: Error) => {
      reject(err)
    });
  })
}
// 登录验证
const loginVerify = (
  params: ILoginParams = {
    email: '',
    password: ''
  }
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    http
    .post<any>('/api/login', params)
    .then((res: IResponseData<[]>) => {
      resolve(res.data)
    })
    .catch((err: Error) => {
      reject(err)
    })
  })
}

export default {
  getUserList,
  loginVerify,
}