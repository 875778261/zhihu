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
    component: () => import('@/views/Detail.vue')
}, {
    path: '/person',
    name: 'person',
    meta: {},
    component: () => import('@/views/Person.vue')
}, {
    path: '/Login',
    name: 'login',
    meta: {},
    component: () => import('@/views/Login.vue')
}, {
    path: '/store',
    name: 'store',
    meta: {},
    component: () => import('@/views/Store.vue')
}, {
    path: '/update',
    name: 'update',
    meta: {},
    component: () => import('@/views/Update.vue')
}];
export default routes;