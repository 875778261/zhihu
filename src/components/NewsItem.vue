<template>
<header class="header-box">

    <div class="text">
        <div class="time">
            <span>10</span>
            <span>四月</span>
        </div>
        <h2 class="title">知乎日报</h2>
    </div>
    <div class="picture">
        <router-link to='/person'>
<img src="../assets/images/timg.jpg" alt="" class="logo">
        </router-link>
    </div>
</header>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

 //api文档自动生成模板
 /**
    * @api {get} /user/:id Request User information
    * @apiName GetUser
    * @apiGroup User
    *
    * @apiParam {Number} id Users unique ID.
    *
    * @apiSuccess {String} firstname Firstname of the User.
    * @apiSuccess {String} lastname  Lastname of the User.
    */
    
export default {
  //import引入的组件需要注入到对象中才能使用
name: '',
components: {},
props: {},
data() {
//这里存放数据
return {

};
},
//计算属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

</style>