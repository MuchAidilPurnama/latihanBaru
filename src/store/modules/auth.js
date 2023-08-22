import axios from "axios";

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem("token") || "",
        loginError: null,    
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
   
    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/login",
                    credentials
                );
                const token = response.data.access_token;

                //save token
                localStorage.setItem("token", token);

                commit("SET_TOKEN", token);
                commit("SET_LOGIN_ERROR", null);
                console.log("Token saved:", token);

                return true;
            } catch (error) {
                const errorMessage = error.response.data.message || "Login failed";
                commit("SET_LOGIN_ERROR", errorMessage);
                console.error(error);
                return false;
            }
        },
        //register
        async register({ commit }, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
                    credentials
                );
                const token = response.data.access_token;

                //save token
                localStorage.setItem("token", token);

                commit("SET_TOKEN", token);
                console.log("Token saved:", token);

                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },

        logout({ commit }) {
            // Remove token from localStorage
            const token = localStorage.getItem("token");
            localStorage.removeItem("token")
            commit("SET_TOKEN", "");
            // Log token removed
            console.log("Token removed:", token);
            window.location.href = "/login";
          },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_LOGIN_ERROR(state, error) {
            state.loginError = error;
        }
    },
};
 
export default auth;