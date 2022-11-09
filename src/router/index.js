import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/pages/SignIn';
import SportsPage from '@/pages/SportsPage';
import SingleSportPage from '@/pages/SingleSportPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: SignIn },
  { path: '/sports', component: SportsPage }, // TODO: just a question, why did not you use SingleSportPage under /sports as a child route?
  { path: '/sports/:slug', component: SingleSportPage } // FIXME: you do not have a middleware for authenticated routes.
];

const router = new VueRouter({
  mode: 'hash', // FIXME: why hash?
  base: process.env.BASE_URL, // FIXME: I do not see the .env.example file where BASE_URL will be located
  routes
});

export default router;
