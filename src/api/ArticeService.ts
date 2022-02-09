import http from '../http/axios'
import { IResponseData } from '../types/index';
export interface IArticleData {
  articleId: number;
  articleTitle: string;
  articleContent?: string;
  code?: string;
  publishTime?: string;
  author?: string;
  commentId?: number;
  commentContent?: string;
  thumbId?: number;
  userId?: number;
  username?: string;
  email?: string;
  phoneNo?: string;
  thumbUserId?: number;
  authorId: number;
  commentUserId?: number;
}
interface IThumb {
  thumbId: number;
  thumbUser: string;
}
interface IComment {
  commentId: number;
  commentContent: string;
  commentUser: string;
}
export interface IArticleResultData {
  articleId: number;
  articleTitle: string;
  articleContent?: string;
  code?: string;
  publishTime?: string;
  author?: string;
  thumbs: IThumb[];
  comments: IComment[]
}
// 获取文章列表
const queryArticleList = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    http
    .get<IArticleResultData[]>('/api/articles')
    .then((res: IResponseData<IArticleResultData[]>) => {
      resolve(res.data)
    })
    .catch((error: Error) => {
      reject(error)
    })
  })
}

export default {
  queryArticleList
}