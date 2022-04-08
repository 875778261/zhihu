<template>
  <div>
    <home-head></home-head>
    <section>
      <van-divider content-position="left">02月10日</van-divider>
      <div class="content">
        <h1>Home</h1>
        <news-item></news-item>
        <news-item></news-item>
      </div>
    </section>
    <div class="lazy-more" ref="loadBox">
      <van-loading size="12px"></van-loading>
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
import HomeHead from "@/components/HomeHead.vue";
import api from "@/api"
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "Home",
  components: {
    NewsItem,
    HomeHead,
  },
};
</script>
<style scoped>
</style>