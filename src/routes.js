import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from "./components/pages/coaches/CoachesList.vue";
import CoachRegistration from "./components/pages/coaches/CoachRegistration.vue";
import CoachDetail from "./components/pages/coaches/CoachDetails.vue";
import RequestsReceived from "./components/pages/requests/RequestsReceived.vue";
import ContactCoach from "./components/pages/requests/ContactCoach.vue";
import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  linkExactActiveClass:'active',
    history: createWebHistory(),
    routes: [
         { path: '/', redirect:'/coaches', component: null },
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
              { path: 'contact', component: ContactCoach } 
            ]
          },
        { path: '/register', component: CoachRegistration }, 
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;


