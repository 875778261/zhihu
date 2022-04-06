import { createApp } from "vue";
import App from "./App.vue";
/*导入vant */
import Vant,{Lazyload} from 'vant'
import 'amfe-flexible'
import '@/assets/reset.min.css'
import 'vant/lib/index.css'
/**处理最大宽度 */
//import {handleMaxWidth} from '@/assets/utils/';
handleMaxWidth();
import router from "./router";
import store from "./store";

const app = createApp(App)
app.use(Vant)
app.use(Lazyload,{
    LazyComponent:true
})
app.mount("#app");
