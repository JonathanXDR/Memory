import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView/HomeView.vue';
import ScoreboardView from '../views/ScoreboardView/ScoreboardView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/scoreboard',
    name: 'ScoreboardView',
    component: ScoreboardView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
