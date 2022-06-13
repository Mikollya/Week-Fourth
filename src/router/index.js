import PageHome from '../views/PageHome';
import EventsList from '../views/EventsList';
import EventDetails from '../views/EventDetails';
import CreateCard from '../views/CreateCard';
import NotFound from '../views/NotFound';

import {
  createRouter,
  createWebHistory
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/events',
      name: 'eventsList',
      component: EventsList,
      children: [
        {
          path: ':id',
          name: 'eventDetails',
          component: EventDetails,
          props: true,
        },
        {
          path: '*/*',
          redirect: { name: 'eventsList' }
        },
      ],
    },

    {
      path: '/create',
      name: 'createEvent',
      component: CreateCard,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound
    },
  ]
});

export default router;
