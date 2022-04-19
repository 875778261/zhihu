<template>
  <div class="news-item">
    <router-link :to="`/detail/${data.id}`"
      >
      <div class="img-box">
        <img
          v-if="data.images && data.images.length > 0"
          :src="data.images[0]"
        />
        <img src="" alt="">
      </div>
      <h4 class="title">{{ data.title }}home2斑马条纹到底干嘛用的</h4>
      <!--  -->
      <p class="desc"> {{ data.hint }} 作者 / 苏程钰</p>
      
    </router-link>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "NewsItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
 /*  mounted() {
    console.log(data);
  }, */
  /* setup(){
    console.log(data);
  } */
};
</script>
<style lang="less" scoped>
</style>
