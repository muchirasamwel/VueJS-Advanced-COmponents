import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue"
import About from "../views/About.vue"
import smbProfile from "../views/amSmb.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/about",
    name: "about",
    component:About,
    children: [
      {
        path: 'smb',
        component: smbProfile,
      }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
