<template>
    <div class="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Muli', sans-serif;">
  <div class="container ml-auto mr-auto flex flex-wrap items-start">
    <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        Best Shoes
      </h1>
    </div>
    <div v-for="product in getProduct" :key="product.id" class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2" >
      <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure class="mb-2">
          <img src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/f/if3401_2_footwear_photography_side20lateral20view_grey.jpg" alt="" class="h-64 ml-auto mr-auto" />
        </figure>
        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              {{ product.name }}
            </h5>
            <span class="text-xs text-gray-400 leading-none">{{ product.slug }}</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              {{ product.base_price }}
            </div>
            <router-link :to="{name: 'SingleProduct', params: {id: product.id}}" class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
computed: {
  ...mapGetters('product', ['getProduct']),
},
methods: {
  ...mapActions('product', ['fetchProduct']),

},
created() {
  this.fetchProduct();
},
}
</script>