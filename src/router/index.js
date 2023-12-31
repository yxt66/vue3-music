import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SongList from '../views/SongList.vue'
import History from '../views/History.vue'
import Favourite from '../views/Favourite.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), 
  // #
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'Home',
      component: HomeView
    },
    {
      path: '/history',
      name:'History',
      component: History
    },
    {
      path: '/favourite',
      name:'Favourite',
      component: Favourite
    },
    {
      path: '/songlist',
      name:'SongList',
      component: SongList
    }
  ]
})

export default router
