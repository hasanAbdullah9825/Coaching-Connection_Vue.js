import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import CoachDetail from "./pages/coaches/CoachDetails.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import NotFound from "./pages/NotFound.vue";

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


