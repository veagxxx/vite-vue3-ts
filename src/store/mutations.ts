import { IArticleResultData } from "@/api/ArticeService";
import { IState } from "../types";
import { SETARTICLEDATA, SETTOKEN } from "./actionTypes";

export default {
  [SETTOKEN](state: IState, value: string) {
    state.token = value
    localStorage.setItem('token', value)
  },
  [SETARTICLEDATA](state: IState, value: IArticleResultData) {
    state.articleData = value
  }
}