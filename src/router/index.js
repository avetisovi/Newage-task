import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/pages/SignIn';
import SportsPage from '@/pages/SportsPage';
import SingleSportPage from '@/pages/SingleSportPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: SignIn },
  { path: '/sports', component: SportsPage },
  { path: '/sports/:slug', component: SingleSportPage }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
