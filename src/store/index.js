import { createStore, createLogger, storeKey } from "vuex";
const env = process.env.NODE_ENV;
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: env !== "production" ? [createLogger()] : []
});
export default store;