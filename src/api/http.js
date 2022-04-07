import axios from "axios";
import qs from 'qs'
import { isPlainObject } from '@/assets/utils'
import { Notify } from "vant";
axios.defaults.timeout=60000
axios.defaults.transformRequest = data => {
    if (isPlainObject(data)) {
        return qs.stringify(data)
    }
    return data;
}
axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(response => {
    return response.data;
}, reason => {
    Notify({
        type: 'danger',
        message: '网络繁忙',
    });
    return Promise.reject(reason)
})
export default axios