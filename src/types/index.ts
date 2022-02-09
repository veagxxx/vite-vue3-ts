import { IArticleResultData } from "@/api/ArticeService";

// 统一响应类型接口
export interface IResponseData<T> {
  code: number;
  data?: T;
  message?: string;
  token?: string;
}
// MySQL 参数接口
export interface IMySqlConfig {
  host: string;
  database: string;
  user: string;
  password: string;
}
// Vuex 接口
export interface IState {
  token: string;
  articleData: IArticleResultData
}
