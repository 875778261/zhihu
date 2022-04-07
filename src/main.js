import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/*导入vant */
import Vant,{Lazyload} from 'vant'
import 'amfe-flexible'
import '@/assets/reset.min.css'
import 'vant/lib/index.css'
/**处理最大宽度 */
import {handleMaxWidth} from '@/assets/utils/';
handleMaxWidth();
import store from "./store";

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(Lazyload,{
    LazyComponent:true
})
app.mount("#app");
