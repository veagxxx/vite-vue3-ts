import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IResponseData } from '../types/index'
import { Router, useRouter } from 'vue-router'
const router: Router = useRouter()
interface IAxiosConfig {
  baseUrl: string;
  timeout: number;
}
const config: IAxiosConfig = {
  baseUrl: 'http:localhost:8099/api',
  timeout: 3000000
}
class HttpRequest {
  private service: AxiosInstance;
  constructor(config: IAxiosConfig) {
    this.service = axios.create(config)
    this.interceptors(this.service)
  }
  private interceptors(instance: AxiosInstance, url?: string) {
    instance.interceptors.request.use((config: AxiosRequestConfig|any) => {
      if (localStorage.getItem('token')) {
        config.headers['token'] = localStorage.getItem('token')
      }
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use((res: AxiosResponse) => {
      if (res.status == 200) {
        return Promise.resolve(res)
      } else {
        return Promise.reject(res)
      }
    }, (error) => {
      if (error.response.status) {
        switch(error.response.status) {
          case 401: 
            window.$message.error('未登录，请登录!')
            router.replace({path: '/login'})
            break
          case 403:
            window.$message.error('权限不足或登录过期!')
            break
          case 404:
            window.$message.error('请求不存在!')
            break
          case 500:
            window.$message.error('服务异常!')
            break
          default:
            window.$message.error('未知错误，请重试!')
        }
      }
      return Promise.reject(error)
    })
  }
  get<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<IResponseData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<IResponseData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new HttpRequest(config)