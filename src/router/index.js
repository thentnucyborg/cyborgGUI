import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Map",
    name: "Map",
    // route level code-splitting
    // this generates a separate chunk (Map.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Map" */ "../views/Map.vue")
  },
  {
    path: "/ManualControl",
    name: "ManualControl",
    // route level code-splitting
    // this generates a separate chunk (ManualControl.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "ManualControl" */ "../views/ManualControl.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
