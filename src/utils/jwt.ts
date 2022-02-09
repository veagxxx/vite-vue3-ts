import jwt from 'jsonwebtoken'
const secret: string = 'ZHYHSQ'
class JwtUtil<T> {
  data: T;
  constructor(data: T) {
    this.data = data
  }
  // 生成 token
  generateToken(): string {
    let token: string = ''
    let data = this.data;
    token = jwt.sign(
      { data }, 
      secret, 
      { 
        expiresIn: 60 * 60 * 24, 
      },
    )
    return token
  }
  // 校验 token
  verifyToken(): string | object {
    let token = this.data as unknown as string
    let res
    try {
      let result: string | jwt.JwtPayload = jwt.verify(token, secret) || {}
      console.log('result: ', result)
      res = result
    } catch (error) {
      res = 'err'
    }
    return res
  }
}

export default JwtUtil