import { IArticleResultData } from "@/api/ArticeService";
import { Commit } from "vuex";
import { IState } from "../types";
import { SETARTICLEDATA, SETTOKEN } from "./actionTypes";
interface IContext {
  commit: Commit;
  state: IState
}
export default {
  [SETTOKEN]({ commit, state }: IContext, value: string) {
    // 传到 mutation 中
    commit(SETTOKEN, value)
  },
  [SETARTICLEDATA]({ commit, state }: IContext, value: IArticleResultData) {
    commit(SETARTICLEDATA, value)
  }
}