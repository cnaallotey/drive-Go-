import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router';
import home from "./Views/Home.vue";
import blogs from "./Views/Blogs.vue";
import blog from "./Views/Blog.vue";
import 'tw-elements';
//import './axios/axios.js'


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                 path:'/' , name:'Home' ,component:home
                 },
            {
                path:'/blogs', name:'Blogs' , component:blogs
            },
            {
                path:'/blog/:id', name:'Blog', component:blog
            },
            {
                path:"/:pathMatch(.*)", name:"404", component:home
            },
        ]

    }
)

createApp(App).use(router).mount('#app')
