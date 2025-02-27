import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import tuizhuxinxi from '@/views/modules/tuizhuxinxi/list'
    import hugonggongzi from '@/views/modules/hugonggongzi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import binglidangan from '@/views/modules/binglidangan/list'
    import jiankangshuju from '@/views/modules/jiankangshuju/list'
    import yanglaoyuan from '@/views/modules/yanglaoyuan/list'
    import yaopinxinxi from '@/views/modules/yaopinxinxi/list'
    import ruzhuyuyue from '@/views/modules/ruzhuyuyue/list'
    import waichushenqing from '@/views/modules/waichushenqing/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import hugong from '@/views/modules/hugong/list'
    import discussyanglaoyuan from '@/views/modules/discussyanglaoyuan/list'
    import config from '@/views/modules/config/list'
    import discussjiankangkepu from '@/views/modules/discussjiankangkepu/list'
    import jiankangkepu from '@/views/modules/jiankangkepu/list'
    import qinshifenpei from '@/views/modules/qinshifenpei/list'
    import laifangdengji from '@/views/modules/laifangdengji/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/tuizhuxinxi',
        name: '退住信息',
        component: tuizhuxinxi
      }
      ,{
	path: '/hugonggongzi',
        name: '护工工资',
        component: hugonggongzi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/binglidangan',
        name: '病历档案',
        component: binglidangan
      }
      ,{
	path: '/jiankangshuju',
        name: '健康数据',
        component: jiankangshuju
      }
      ,{
	path: '/yanglaoyuan',
        name: '养老院',
        component: yanglaoyuan
      }
      ,{
	path: '/yaopinxinxi',
        name: '药品信息',
        component: yaopinxinxi
      }
      ,{
	path: '/ruzhuyuyue',
        name: '入住预约',
        component: ruzhuyuyue
      }
      ,{
	path: '/waichushenqing',
        name: '外出申请',
        component: waichushenqing
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/hugong',
        name: '护工',
        component: hugong
      }
      ,{
	path: '/discussyanglaoyuan',
        name: '养老院评论',
        component: discussyanglaoyuan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussjiankangkepu',
        name: '健康科普评论',
        component: discussjiankangkepu
      }
      ,{
	path: '/jiankangkepu',
        name: '健康科普',
        component: jiankangkepu
      }
      ,{
	path: '/qinshifenpei',
        name: '寝室分配',
        component: qinshifenpei
      }
      ,{
	path: '/laifangdengji',
        name: '来访登记',
        component: laifangdengji
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
