import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ideas',
      component: () => import('./views/Ideas.vue'),
    },
    {
      path: '/articles',
      name: 'Articles',
      component: () => import('./views/Articles.vue'),
    },
    
   

      
      // beforeEnter(to, from, next) {
      //   store.commit('ideas/notification', {show: false, text: ''})
      //   next();
      // }
    
  ],
});
