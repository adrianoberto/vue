import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
      path: "/",
      alias: "/assets",
      name: "assets",
      component: () => import("./components/Assets")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;