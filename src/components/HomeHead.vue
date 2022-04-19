<template>
  <header class="header-box">
    <div class="text">
      <div class="time">
        <span>{{ time.month }}</span>
        <span>{{ time.day }}日</span>
      </div>
      <h2 class="title">知乎日报</h2>
    </div>
    <div class="pic">
      <router-link to="/person">
        <img src="../assets/images/timg.jpg" alt="" class="logo" />
      </router-link>
    </div>
  </header>
</template>

<script>
import { computed } from "vue";
import { formatTime } from "@/assets/utils.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "HomeHead",
  props: {
    today: {
      typeof: String,
      required: true,
    },
  },
  setup(props) {
    /* 创建计算属性｢ComputedRefImpl对象｣time：获取需要的月和日,time中的value */
    let time = computed(() => {
      let today = props.today;
      console.log(formatTime(today, "{1}-{2}"));
      let [month, day] = formatTime(today, "{1}-{2}").split("-");
      let arr = [
        "",
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];
      return {
        month: arr[+month],
        day,
      };
    });
    console.log(time);
    //通过ref获取time
    return { time };
  },
};
</script>
<style scoped>
.header-box {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text{
  margin-left:20px;
}
.pic {
  margin-right: 20px;
}
.logo {
  height: 50px;
  border-radius: 50%;
}
</style>
