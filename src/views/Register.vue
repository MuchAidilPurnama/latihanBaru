<template>
    <body class="max-h-screen">
     <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
       <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
         <div class="md:w-1/2 px-5">
           <h2 class="text-2xl font-bold text-[#002D74]">Register</h2>
           <p class="text-sm mt-4 text-[#002D74]">If you have an account, please Register</p>
           <form  @submit.prevent="performRegister">
            <div>
               <label class="block text-gray-700">Name</label>
               <input v-model="name" type="text" name="name" placeholder="Enter Fullname Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required>
             </div>

             <div>
               <label class="block text-gray-700">Email Address</label>
               <input v-model="email" type="text" name="name" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required>
             </div>

             <div>
               <label class="block text-gray-700">Phone</label>
               <input v-model="phone" type="number" name="name" placeholder="Enter Username Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required>
             </div>
     
             <div>
               <label class="block text-gray-700">Password</label>
               <input v-model="password" type="password" name="name"  placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                     focus:bg-white focus:outline-none" required>
             </div>

             <div class="mt-4">
               <label class="block text-gray-700">Confirm Password</label>
               <input v-model="confirm_password" type="password" name="name"  placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                     focus:bg-white focus:outline-none" required>
             </div>

             <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                   px-4 py-3 mt-6">Register</button>
           </form>
   
           <div class="text-sm flex justify-between items-center mt-3">
             <p>If you don't have an account...</p>
             <a href="/login" class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">LOGIN</a>
           </div>
         </div>
   
         <div class="w-4/6 md:block hidden ">
           <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" class="rounded-2xl" alt="page img">
         </div>
   
       </div>
     </section>
     </body>
   </template>
   
   <script>
   import { mapActions } from 'vuex';
   
   export default {
       auth() {
           return {
               name: '',
               email: '',
               phone: '',
               password: '',
               confirm_password:'',
           };
       },
       methods: {
           ...mapActions('auth', ['register']),
           async performRegister() {
               const credentials = {
              name : this.name,
                email: this.email,
                   phone: this.phone,
                   password: this.password,
                   confirm_password: this.confirm_password,
               };
               const success = await this.register(credentials);
               
               if(success) {
                   this.$router.push('/login');
               } else {
                   alert("Register Failed!")
               }
           },
       },
   };
   </script>
   
   <style>
   .logo {
       position: absolute;
       top: 30px;
       right: 30px;
       display: block;
       z-index: 100;
       transition: all 250ms linear;
   }
   
   .logo img {
       height: 30px;
       width: auto;
       display: block;
   }
   </style>