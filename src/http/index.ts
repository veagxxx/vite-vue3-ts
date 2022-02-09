import express from 'express'
import bodyParser from 'body-parser'
import userApi from './controller/user'
import articleApi from './controller/article'
const app: express.Application = express()

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(bodyParser.json({ limit: '20mb' }));

// 跨域设置
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

app.use('/api', userApi, articleApi)

app.listen(8099, () => {
  console.log('server running...')
})
export default app