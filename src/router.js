import VueRouter from 'vue-router'

// 导入对应的路由组件
import home from './components/tabbar/home.vue'
import community from './components/tabbar/community.vue'
import news from './components/tabbar/news.vue'
import shopcar from './components/tabbar/shopcar.vue'
import me from './components/tabbar/me.vue'

import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
// import GoodsDesc from './components/goods/GoodsDesc.vue'
// import GoodsComment from './components/goods/GoodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/community', component: community },
    { path: '/news', component: news },
    { path: '/shopcar', component: shopcar },
    { path: '/me', component: me },

    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    // { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    // { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
})

// 把路由对象暴露出去
export default router