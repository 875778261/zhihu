<template>
  <div class="home">
    <home-head class="home-head" :today="today"></home-head>
    <!-- 轮播图 -->
    <section class="banner-box">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        lazy-render
        v-if="banner.length > 0"
      >
        <van-swipe-item v-for="item in banner" :key="item.id">
          <router-link :to="`/detail/${item.id}`">
            <img :src="item.image" class="pic" />
            <div class="desc">
              <h3 class="title">
                轮播图 title
                {{ item.title }}
              </h3>
              <p class="author">
                轮播图author
                {{ item.hint }}
              </p>
            </div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </section>
    <!-- 新闻列表 -->
    <van-skeleton title :row="5" v-if="list.length === 0"></van-skeleton>
    <template v-else>
      <section class="news-box" v-for="(item, index) in list" :key="item.date">
        <van-divider content-position="left" v-if="index !== 0">
          02月10日{{ formatTime(item.date, "{1}月{2}日") }}
        </van-divider>
        <div class="content">
          <h1>新闻列表</h1>
          <news-item
            v-for="newsItem in item.stories"
            :key="newsItem.id"
            :data="newsItem"
          >
          </news-item>
        </div>
      </section>
    </template>

    <!-- 加载更多 -->
    <div class="lazy-more" ref="loadBox">
      <van-loading size="12px">精彩数据准备中</van-loading>
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/NewsItem.vue";
import HomeHead from "@/components/HomeHead.vue";
import api from "@/api";
import { onBeforeMount, reactive, toRefs } from "vue";
import { formatTime } from "@/assets/utils.js";
export default {
  name: "Home",
  components: {
    NewsItem,
    HomeHead,
  },
  //创建响应式状态
  setup() {
    let state = reactive({
      today: formatTime(true, "{0}{1}{2}"),
      banner: [
        {
          image: "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
          id: "111",
          title: "banner aaa",
          hint: "banner aaa",
        },
      ], //获取的轮播图资源
      list: [
        { date: "20220409" },
        {
          stories: [
            {
              id: "111",
              title: "stories title aaa",
              hint: " stories hint aaa",
              images: "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
            },
          ],
        },
      ],
      /* 
        {date:'20220409',
        stories:[{...},...]
        }
        */
    });
    console.log(state);
    console.log(toRefs(state));
    //在第一次组件渲染之前：从服务器获取需要的数据
    onBeforeMount(async () => {
      let { date, stories, top_stories } = await api.queryNewsLastest();
      state.today = date;
      state.banner = top_stories;
      state.list.push({
        date,
        stories,
        top_stories,
      });
    });
    return {
      ...toRefs(state), //返回内容进行视图渲染
      formatTime, //把方法返回出去才能在模板中使用
      state,
    };
  },
  mounted() {
    console.log(this);
  },
};
</script>
<style scoped>
/* .home {
  display: flex;
  flex-direction: column;
} */
/* 
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
 */
</style>