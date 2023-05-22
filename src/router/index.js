import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: "onedrive",
          name: "onedrive",
          component: () => import("@/views/pages/OneDrive.vue"),
        },
        {
          path: "file",
          name: "file",
          component: () => import("@/views/pages/File.vue"),
        },
        {
          path: "temp",
          name: "temp",
          component: () => import("@/views/pages/Temp.vue"),
        },
      ]
    },
  ]
})

export default router
