import { createStore, Store } from 'vuex';
import { IState } from '../types';
import actions from './actions';
import mutations from './mutations';
import state from './state';

const store: Store<IState> = createStore({
  state,
  actions,
  mutations
})

export default store;