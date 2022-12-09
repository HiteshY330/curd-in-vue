import { createRouter, createWebHistory } from 'vue-router';
import InputForm from '../components/InputForm.vue';
import ShowDetails from '../components/ShowDetails.vue'; 
import EditUser from '../components/EditUser.vue';

const routes = [
  {
    path: '/',
    name: 'InputForm',
    component: InputForm
  },
  {
    path: '/user',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/edit',
    name: 'EditUser',
    component: EditUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
