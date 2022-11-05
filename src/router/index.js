import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/pages/SignIn';
import SportsPage from '@/pages/SportsPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: SignIn },
  { path: '/sports', component: SportsPage }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
