import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/pages/SignIn';
import SportsPage from '@/pages/SportsPage';
import SingleSportPage from '@/pages/SingleSportPage';
import SignedIn from '@/pages/SignedIn';

import store from '@/store';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: SignIn, name: 'SignIn' },
  {
    path: '/sports',
    component: SignedIn,
    children: [
      { path: '/', component: SportsPage, name: 'SportsPage' },
      { path: ':slug', component: SingleSportPage }
    ]
  }
];

const router = new VueRouter({
  mode: 'history', // to open dist locally, switch mode to 'hash' first
  routes
});

// redirect to SignIn page if not authenticated and vice versa
router.beforeEach((to, from, next) => {
  const isAuth = store.getters['auth/getIsAuth'];
  if (isAuth && to.path === '/') {
    next({ name: 'SportsPage' });
  } else if (!isAuth && to.path !== '/') {
    next({ name: 'SignIn' });
  }

  next();
});

export default router;
