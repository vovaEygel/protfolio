import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home/home.vue";
import contactMe from "../views/contactMe/contactMe.vue";
import projects from "../views/projects/projects.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/projects",
        name: "projects",
        component: projects
    },
    {
        path: "/contactMe",
        name: "contactMe",
        component: contactMe
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: function(to) {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes
})

export default router;