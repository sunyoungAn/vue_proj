import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import AdminProductListView from '../views/AdminProductListView.vue'
import AdminMemberListView from '../views/AdminMemberListView.vue'
import AdminProductRegisterView from '../views/AdminProductRegisterView.vue'
import AdminMemberEditView from '../views/AdminMemberEditView.vue'
import AdminInquiryListView from '../views/AdminInquiryListView.vue'
import AdminInquiryReplyView from '../views/AdminInquiryReplyView.vue'
import AdminNoticeListView from '../views/AdminNoticeListView.vue'
import AdminReviewListView from '../views/AdminReviewListView.vue'
import AdminSellingListView from '../views/AdminSellingListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/admin/prdouct/list',
    name: 'adminprdouctlist',
    component: AdminProductListView
  },
  {
    path: '/admin/member/list',
    name: 'adminmemberlist',
    component: AdminMemberListView
  },
  {
    path: '/admin/prdouct/register',
    name: 'adminprdouctregister',
    component: AdminProductRegisterView
  },
  {
    path: '/admin/member/edit',
    name: 'adminmemberedit',
    component: AdminMemberEditView
  },
  {
    path: '/admin/inquiry/list',
    name: 'admininquirylist',
    component: AdminInquiryListView
  },
  {
    path: '/admin/inquiry/reply',
    name: 'admininquiryreply',
    component: AdminInquiryReplyView
  },
  {
    path: '/admin/notice/list',
    name: 'adminnoticelist',
    component: AdminNoticeListView
  },
  {
    path: '/admin/review/list',
    name: 'adminreviewlist',
    component: AdminReviewListView
  },
  {
    path: '/admin/selling/list',
    name: 'adminsellinglist',
    component: AdminSellingListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () { // TODO 페이지 이동시 바로 위에 와있게끔 할 것
    return { 
      top:0
     }
  }
})

export default router
