import connection from "../mysql";
import express, { Router } from 'express'
const http: Router = express.Router()
import { QUERYUSER, VERIFYUSER } from '../sql'
import { ILoginParams, IUserData } from "../../api/UserService";
import { MysqlError } from "mysql";
import JwtUtil from '../../utils/jwt'
// 登录
http.post('/login', (request, response): void => {
  const { email, password }: ILoginParams = request.body
  connection
  .query(VERIFYUSER, email, (err: MysqlError|null, result: IUserData[]) => {
    if (err) {
      response.json(err)
    }
    if (result.length > 0) {
      const user = result[0]
      if (password !== user.password) {
        response.json({
          code: 400,
          message: '邮箱或密码错误'
        })
      } else {
        const jwt = new JwtUtil<string>(user.id.toString())
        const token: string = jwt.generateToken()
        response.json({
          code: 200,
          message: '登录成功',
          token: token
        })
      }
    } else {
      response.json({
        code: 400,
        message: '用户不存在!'
      })
    }
  })
})
http.get('/users', (req, res): void => {
  connection
  .query(QUERYUSER, (error: any, data: IUserData[]): void => {
    res.json({
      code: 200,
      message: '请求成功',
      data: data
    })
  })
})

export default http;