<template>
    <div
         class="absolute inline-flex items-center justify-center mr-4 w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
          {{ getCart.length }}
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
   name: 'Cart',
   data() {
       return {
           total: 0
       }
   },
   computed: {
       ...mapGetters("cart", ["getCart"])
   }
}
</script>