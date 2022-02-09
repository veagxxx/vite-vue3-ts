import connection from "../mysql";
import express, { Router } from 'express'
const http: Router = express.Router()
import { articleSql } from '../sql'
import { MysqlError } from "mysql";
import { IArticleData } from "@/api/ArticeService";
import moment from 'moment'
import JwtUtil from "../../utils/jwt";
// 获取文章列表
http.get('/articles', (request, response) => {
  const token: string | string[] | undefined = request.headers.token
  const jwt = new JwtUtil<string>(token as string)
  const resToken: string | object = jwt.verifyToken()
  if (!token && resToken !== 'err') {
    response.json({
      code: 403,
      message: '无token验证'
    })
  } else {
    connection
    .query(articleSql.ARTICLELIST, (error: MysqlError, result: IArticleData[]) => {
      if (error) {
        response.json(error)
      } 
      let data: any = []
      let temp: any = []
      if (result.length > 0) {
        for (let index = 0; index < result.length; index++) {
          const currentData: IArticleData = result[index];
          // 没有当前文章
          if (temp.indexOf(currentData.articleId) == -1) {
            data.push({
              articleId: currentData.articleId,
              author: currentData.authorId == currentData.userId ? currentData.username : '',
              articleContent: currentData.articleContent,
              articleTitle: currentData.articleTitle, 
              code: currentData.code,
              email: currentData.email,
              phoneNo: currentData.phoneNo,
              publishTime: moment(currentData.publishTime).format('YYYY-MM-DD HH:mm'),
              thumbs: [{
                thumbId: currentData.thumbId,
                thumbUser: currentData.thumbUserId == currentData.userId ? currentData.username : ''
              }],
              comments: [{
                commentContent: currentData.commentContent,
                commentId: currentData.commentId,
                commentUser: currentData.commentId == currentData.userId ? currentData.username : ''
              }]
            })
            temp.push(currentData.articleId)
          } else {
            for (let dIndex = 0; dIndex < data.length; dIndex++) {
              const dataItem = data[dIndex];
              // 判断是否同一篇文章
              if (dataItem.articleId === currentData.articleId) {
                // 不是同一个评论才添加
                !dataItem.comments.find((item: any) => item.commentId == currentData.commentId) && 
                dataItem.comments.push({
                  commentContent: currentData.commentContent,
                  commentId: currentData.commentId,
                })
                // 不是同一个点赞才添加
                !dataItem.thumbs.find((item: any) => item.thumbId == currentData.thumbId) &&
                dataItem.thumbs.push({
                  thumbId: currentData.thumbId,
                  thumbUser: currentData.thumbUserId == currentData.userId ? currentData.username : ''
                })
              }
            }
          }
        } 
        response.json({
          code: 200,
          message: '请求成功',
          data: data
        })
      } else {
        response.json({
          code: 400,
          message: '查询接口失败',
        })
      }
    })
  }
})

export default http