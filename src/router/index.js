import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "../store";
import Product from "../views/Product.vue";
import Carousel from "../views/Carousel.vue";
import Menyatu from "../components/Menyatu.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/carousel",
        name: "Carousel",
        component: Carousel,
    },
    {
        path: "/menyatu",
        name: "Menyatu",
        component: Menyatu,
        meta: { requiresLogin: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if(to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;