<template>
    <br>
    <div style='background-color:rgba(0, 0, 0, 0)'>
<div class="container max-w-7xl mx-auto px-4" style="cursor: auto;">

  <div class="flex flex-wrap " >
    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" v-for="brand in getBrand.data">
      <div class="px-6">
        <img alt="John Doe" :src="brand.logo" class="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined">
        <div class="pt-6 text-center">
      <h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">{{ brand.name }}</h1>
          <p class="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">{{ brand.slug }}</p>
          <div class="flex items-center justify-center">
          </div>
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
  ...mapGetters('brand', ['getBrand']),
},
methods: {
  ...mapActions('brand', ['fetchBrand']),

},
created() {
  this.fetchBrand();
},
}
</script>