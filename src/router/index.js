import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
// import TotalAccountManagement from '@/views/TotalAccountManagement.vue'
import SubAccountManagement from '@/views/SubAccountManagement.vue'
import createMovie from '@/views/createMovie.vue'
import Register from '@/views/register.vue'
import UploadMovieDetail from '@/views/uploadMovieDetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: createMovie,
      name: 'createMovie',
      hidden: true
    },
    // {
    //   path: '/TotalAccountManagement',
    //   component: TotalAccountManagement,
    //   name: 'TotalAccountManagement'
    // },
    {
      path: '/SubAccountManagement',
      component: SubAccountManagement,
      name: 'SubAccountManagement'
    },
    {
        path: '/createMovie',
        component: createMovie,
        name: 'createMovie'
    },
    {
        path: '/Register',
        component: Register,
        name: 'Register'
    },
    {
        path: '/UploadMovieDetail',
        component: UploadMovieDetail,
        name: 'UploadMovieDetail'
    }
  ]
})
