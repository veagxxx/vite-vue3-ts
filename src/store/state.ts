import { IState } from "../types";

export default<IState> {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  articleData: {}
}