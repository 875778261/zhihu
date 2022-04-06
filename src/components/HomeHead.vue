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
      <router-link to="/person">
        <img src="../assets/images/timg.jpg" alt="" class="logo" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "HomeHead",
};
</script>
<style scoped></style>
