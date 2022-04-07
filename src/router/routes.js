import Home from '@/views/Home.vue'


const routes = [{
    path: '/',
    name: 'home',
    meta: {},
    component: Home
}, {
    path: '/detail',
    name: 'detail',
    meta: {},
    component: () => import(/* webpackChunkName:"detail" */'@/views/Detail.vue')
}, {
    path: '/person',
    name: 'person',
    meta: {},
    component: () => import(/* webpackChunkName:"person" */'@/views/Person.vue')
}, {
    path: '/Login',
    name: 'login',
    meta: {},
    component: () => import(/* webpackChunkName:"person" */'@/views/Login.vue')
}, {
    path: '/store',
    name: 'store',
    meta: {},
    component: () => import(/* webpackChunkName:"person" */'@/views/Store.vue')
}, {
    path: '/update',
    name: 'update',
    meta: {},
    component: () => import(/* webpackChunkName:"person" */'@/views/Update.vue')
},{
    path:'/:pathMatch(.*)*',
    redirect:'/'
}];
export default routes;