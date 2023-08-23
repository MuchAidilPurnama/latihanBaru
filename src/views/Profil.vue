<template>
  <div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.w3schools.com/howto/img_avatar.png" alt="John Doe">
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ user.name }}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{{ user.phone }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{{ user.email }}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
<footer>
      <div class="bg-gray-100 pt-5">
   <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
     <div class="p-5">
       <h3 class="font-bold text-xl text-indigo-600">Aidil Jnselz</h3>
     </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
         <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a> 
      </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
         <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
         <a class="my-3 block" href="/#">Aidil, S ukamenak jl.pasawahan, ID <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>
      <div class="bg-gray-200">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Aidil Purnama —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@aidilprnma_</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
    </footer>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
      ...mapGetters('auth',['getUser']),
      user() {
        return this.getUser;
      },
  },
  methods: {
      ...mapActions('auth', ['getUserInfo']),
  },
 async mounted() {
  // Ftech user information
  const user = await this.getUserInfo();

  //if user information is retrieved, update the store
  if(user) {
    this.$store.commit("auth/SET_USER", user);
  }
 },
};

</script>
