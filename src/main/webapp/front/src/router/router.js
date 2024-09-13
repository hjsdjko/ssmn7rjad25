import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import hugongList from '../pages/hugong/list'
import hugongDetail from '../pages/hugong/detail'
import hugongAdd from '../pages/hugong/add'
import jiankangkepuList from '../pages/jiankangkepu/list'
import jiankangkepuDetail from '../pages/jiankangkepu/detail'
import jiankangkepuAdd from '../pages/jiankangkepu/add'
import jiankangshujuList from '../pages/jiankangshuju/list'
import jiankangshujuDetail from '../pages/jiankangshuju/detail'
import jiankangshujuAdd from '../pages/jiankangshuju/add'
import yanglaoyuanList from '../pages/yanglaoyuan/list'
import yanglaoyuanDetail from '../pages/yanglaoyuan/detail'
import yanglaoyuanAdd from '../pages/yanglaoyuan/add'
import ruzhuyuyueList from '../pages/ruzhuyuyue/list'
import ruzhuyuyueDetail from '../pages/ruzhuyuyue/detail'
import ruzhuyuyueAdd from '../pages/ruzhuyuyue/add'
import qinshifenpeiList from '../pages/qinshifenpei/list'
import qinshifenpeiDetail from '../pages/qinshifenpei/detail'
import qinshifenpeiAdd from '../pages/qinshifenpei/add'
import tuizhuxinxiList from '../pages/tuizhuxinxi/list'
import tuizhuxinxiDetail from '../pages/tuizhuxinxi/detail'
import tuizhuxinxiAdd from '../pages/tuizhuxinxi/add'
import binglidanganList from '../pages/binglidangan/list'
import binglidanganDetail from '../pages/binglidangan/detail'
import binglidanganAdd from '../pages/binglidangan/add'
import waichushenqingList from '../pages/waichushenqing/list'
import waichushenqingDetail from '../pages/waichushenqing/detail'
import waichushenqingAdd from '../pages/waichushenqing/add'
import laifangdengjiList from '../pages/laifangdengji/list'
import laifangdengjiDetail from '../pages/laifangdengji/detail'
import laifangdengjiAdd from '../pages/laifangdengji/add'
import hugonggongziList from '../pages/hugonggongzi/list'
import hugonggongziDetail from '../pages/hugonggongzi/detail'
import hugonggongziAdd from '../pages/hugonggongzi/add'
import yaopinxinxiList from '../pages/yaopinxinxi/list'
import yaopinxinxiDetail from '../pages/yaopinxinxi/detail'
import yaopinxinxiAdd from '../pages/yaopinxinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussjiankangkepuList from '../pages/discussjiankangkepu/list'
import discussjiankangkepuDetail from '../pages/discussjiankangkepu/detail'
import discussjiankangkepuAdd from '../pages/discussjiankangkepu/add'
import discussyanglaoyuanList from '../pages/discussyanglaoyuan/list'
import discussyanglaoyuanDetail from '../pages/discussyanglaoyuan/detail'
import discussyanglaoyuanAdd from '../pages/discussyanglaoyuan/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'hugong',
					component: hugongList
				},
				{
					path: 'hugongDetail',
					component: hugongDetail
				},
				{
					path: 'hugongAdd',
					component: hugongAdd
				},
				{
					path: 'jiankangkepu',
					component: jiankangkepuList
				},
				{
					path: 'jiankangkepuDetail',
					component: jiankangkepuDetail
				},
				{
					path: 'jiankangkepuAdd',
					component: jiankangkepuAdd
				},
				{
					path: 'jiankangshuju',
					component: jiankangshujuList
				},
				{
					path: 'jiankangshujuDetail',
					component: jiankangshujuDetail
				},
				{
					path: 'jiankangshujuAdd',
					component: jiankangshujuAdd
				},
				{
					path: 'yanglaoyuan',
					component: yanglaoyuanList
				},
				{
					path: 'yanglaoyuanDetail',
					component: yanglaoyuanDetail
				},
				{
					path: 'yanglaoyuanAdd',
					component: yanglaoyuanAdd
				},
				{
					path: 'ruzhuyuyue',
					component: ruzhuyuyueList
				},
				{
					path: 'ruzhuyuyueDetail',
					component: ruzhuyuyueDetail
				},
				{
					path: 'ruzhuyuyueAdd',
					component: ruzhuyuyueAdd
				},
				{
					path: 'qinshifenpei',
					component: qinshifenpeiList
				},
				{
					path: 'qinshifenpeiDetail',
					component: qinshifenpeiDetail
				},
				{
					path: 'qinshifenpeiAdd',
					component: qinshifenpeiAdd
				},
				{
					path: 'tuizhuxinxi',
					component: tuizhuxinxiList
				},
				{
					path: 'tuizhuxinxiDetail',
					component: tuizhuxinxiDetail
				},
				{
					path: 'tuizhuxinxiAdd',
					component: tuizhuxinxiAdd
				},
				{
					path: 'binglidangan',
					component: binglidanganList
				},
				{
					path: 'binglidanganDetail',
					component: binglidanganDetail
				},
				{
					path: 'binglidanganAdd',
					component: binglidanganAdd
				},
				{
					path: 'waichushenqing',
					component: waichushenqingList
				},
				{
					path: 'waichushenqingDetail',
					component: waichushenqingDetail
				},
				{
					path: 'waichushenqingAdd',
					component: waichushenqingAdd
				},
				{
					path: 'laifangdengji',
					component: laifangdengjiList
				},
				{
					path: 'laifangdengjiDetail',
					component: laifangdengjiDetail
				},
				{
					path: 'laifangdengjiAdd',
					component: laifangdengjiAdd
				},
				{
					path: 'hugonggongzi',
					component: hugonggongziList
				},
				{
					path: 'hugonggongziDetail',
					component: hugonggongziDetail
				},
				{
					path: 'hugonggongziAdd',
					component: hugonggongziAdd
				},
				{
					path: 'yaopinxinxi',
					component: yaopinxinxiList
				},
				{
					path: 'yaopinxinxiDetail',
					component: yaopinxinxiDetail
				},
				{
					path: 'yaopinxinxiAdd',
					component: yaopinxinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussjiankangkepu',
					component: discussjiankangkepuList
				},
				{
					path: 'discussjiankangkepuDetail',
					component: discussjiankangkepuDetail
				},
				{
					path: 'discussjiankangkepuAdd',
					component: discussjiankangkepuAdd
				},
				{
					path: 'discussyanglaoyuan',
					component: discussyanglaoyuanList
				},
				{
					path: 'discussyanglaoyuanDetail',
					component: discussyanglaoyuanDetail
				},
				{
					path: 'discussyanglaoyuanAdd',
					component: discussyanglaoyuanAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
