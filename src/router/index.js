import Vue from 'vue'
import Router from 'vue-router'
import Hello from "../components/Hello";
import Detail from "../components/Detail";
import Egg from "../components/Egg";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/egg',
      name: 'Egg',
      component: Egg
    }
  ]
})
