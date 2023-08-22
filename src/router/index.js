import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import store from "../store";
import Product from "../views/Product.vue";
import Carousel from "../views/Carousel.vue";
import Menyatu from "../components/Menyatu.vue";
import Cart from "../views/Cart.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Checkout from "../views/Checkout.vue";
import Contact from "../views/Contact.vue";
import Brand from "../views/Brand.vue";
import Category from "../views/Category.vue";

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
        meta: { requiresGuest: true },
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
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresLogin: true },
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: { requiresLogin: true },
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/all-brand",
        name: "Brand",
        component: Brand,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
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