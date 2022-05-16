import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Register from '@/views/Register.vue';
const routes = [
  {
    //   для простоты и удобства использования проекта используем все ссылки
    //   с помощью поля name и НИКОГДА с помощью path
    // name c маленькой буквы потому что это проще использовать в шаблонах

    path: '/',
    name: 'home', //это алиас для раута
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
