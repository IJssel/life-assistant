<template>
  <div class="content">
    <!-- 开头header -->
    <van-nav-bar class="nav-bar" border="false" @click-left="onClickLeft" @click-right="onClickRight">
      <van-row slot="left" class="nav-text"><span>生活</span></van-row>
      <van-icon name="search" slot="right" class="nav-iocn"/>
    </van-nav-bar>

    <!-- grid宫格 -->
    <div class="mui-body">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media">
          <router-link to="/home/goodslist">
              <img src="../../images/icon1.png" alt="">
              <div class="mui-media-body">附近</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><router-link to="/home">
              <img src="../../images/icon2.png" alt="">
              <div class="mui-media-body">打车</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><router-link to="/home">
              <img src="../../images/icon3.png" alt="">
              <div class="mui-media-body">电影票</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon4.png" alt="">
              <div class="mui-media-body">苏宁易购</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon5.png" alt="">
              <div class="mui-media-body">汽车票</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon6.png" alt="">
              <div class="mui-media-body">菜谱</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon7.png" alt="">
              <div class="mui-media-body">缴费</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon8.png" alt="">
              <div class="mui-media-body">共享单车</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon9.png" alt="">
              <div class="mui-media-body">蛋糕</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-2.4 mui-col-sm-3"><a href="#">
              <img src="../../images/icon10.png" alt="">
              <div class="mui-media-body">全部</div></a></li>
      </ul> 
    </div>

       <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

    <!-- 通知 -->
    <van-notice-bar class="van-notice" >
      <span>头条助手：</span>
      <span>note10凝时拍摄怎么玩</span>
    </van-notice-bar>

    <!-- 商品首页 -->
    <van-grid :border="false" :column-num="4" class="shop-header">
      <van-grid-item v-for="value in 4" :key="value" square class="van-item" to="/home">
        <span>三星生活</span>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/>
        <van-tag type="danger" round>积分兑换</van-tag>
      </van-grid-item>
    </van-grid>

    <van-grid :border="false" :column-num="2" class="shop-center">
      <van-grid-item v-for="value in 4" :key="value" square class="shop-center-item" center="false" to="/home">
        <van-row>
          <van-col span="16" class="center-left">
          <h6>星品之家</h6>
          <span>星粉专享购物中心</span>
          </van-col>
          <van-col span="8" class="center-right">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/></van-col>
        </van-row>
      </van-grid-item>
    </van-grid>

    <!-- 助手专享红包专区 -->
    <van-grid :border="false" :column-num="4" class="shop-assistant">
      <van-col span="24" class="assistant-top">
        <span>助手专享红包区</span>
        <div class="assistant-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="assistant-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 4" :key="value" square class="van-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

    <!-- 图片 -->
    <div class="col-img">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="img-image"/>
    </div>

    <!-- 星品之家专区 -->
    <van-grid :border="false" :column-num="3" class="shop-home">
      <van-col span="24" class="home-top">
        <span>星品之家Galaxy S10专属</span>
        <div class="home-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="home-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 6" :key="value" square class="home-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="home-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

    <!-- 同城服务 -->
    <van-grid :border="false" :column-num="4" class="shop-assistant">
      <van-col span="24" class="assistant-top">
        <span>同城服务</span>
        <div class="assistant-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="assistant-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 4" :key="value" square class="van-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

    <!-- 图片 -->
    <div class="col-img">
      <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="img-image"/>
    </div>

    <!-- 官方正品 -->
    <van-grid :border="false" :column-num="3" class="shop-home">
      <van-col span="24" class="home-top">
        <span>官方正品</span>
        <div class="home-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="home-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 6" :key="value" square class="home-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="home-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

    <!-- 便利好生活 -->
    <van-grid :border="false" :column-num="4" class="shop-assistant">
      <van-col span="24" class="assistant-top">
        <span>便利好生活</span>
        <div class="assistant-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="assistant-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 4" :key="value" square class="van-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

    <!-- 大额券 -->
    <van-grid :border="false" :column-num="2" class="shop-center">
      <van-grid-item v-for="value in 2" :key="value" square class="shop-center-item" center="false" to="/home">
        <van-row>
          <van-col span="16" class="center-left">
          <h6>星品之家</h6>
          <span>星粉专享购物中心</span>
          </van-col>
          <van-col span="8" class="center-right">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/></van-col>
        </van-row>
      </van-grid-item>
    </van-grid>

    <!-- 热映电影 -->
    <van-grid :border="false" :column-num="4" class="shop-assistant">
      <van-col span="24" class="assistant-top">
        <span>便利好生活</span>
        <div class="assistant-left">
          <span>更多好物</span>
          <van-tag type="danger" round class="assistant-round">></van-tag>
        </div>
      </van-col>
      <van-grid-item v-for="value in 4" :key="value" square class="van-item" to="/home">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" class="van-image"/>
        <h6>三星生活</h6>
        <span>xingfen</span>
      </van-grid-item>
    </van-grid>

  </div>
</template>

<script>
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
</script>

<style lang="less" scoped>
@import '../css/home.less';
</style>
