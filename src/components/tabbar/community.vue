<template>
  <div>
<<<<<<< HEAD
    <!-- 搜索框 -->
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search> -->
    <van-search placeholder="请输入搜索关键词" v-model="value" />

    <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
    
=======
    <h3>2</h3>
>>>>>>> ba4807b509bf625526334a91d326444bce9b6776
  </div>
</template>

<script>
<<<<<<< HEAD
import swiper from "../subcomponents/swiper.vue";

export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  },
  components: {
    swiper
  }
};
=======
>>>>>>> ba4807b509bf625526334a91d326444bce9b6776
</script>

<style lang="scss" scoped>

</style>
