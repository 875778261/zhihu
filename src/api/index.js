import axios from "./http";

//获取今日信息
const queryNewsLatest = () => {
    return axios.get('/api/news_latest')
}
//获取往日信息
const queryNewsBefore = () => {
    return axios.get('/api/news_before', {
        params: {
            time
        }
    })
}
export default {
    queryNewsBefore,
    queryNewsLatest
}