<template>
  <div class="news-item">
    <router-link to="/detail/xxx">
      <div class="img-box">
        <img src="" />
      </div>
      <h4 class="title">斑马条纹到底干嘛用的</h4>
      <p class="desc">作者 / 苏程钰</p>
    </router-link>
  </div>
</template>

<script>

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "NewsItem",
};
</script>
<style lang="less" scoped>

</style>
