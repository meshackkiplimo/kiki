
<script>

import { useAuth } from '../composables/useAuth';
import Profile from './Profile.vue';
  export default {

   
  };
  </script>


<template>
    <nav class=" text-black shadow-md py-4">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div class="text-2xl font-bold">
          <a href="/" class="hover:text-gray-300">LOGO IMAGE</a>
        </div>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-gray-300">Home</a></li>
          <li><a href="/cars" class="hover:text-gray-300">Products</a></li>
          <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
         
        </ul>
        
        <div>
            <button v-if="!useAuth().isAuthenticated.value" @click="$router.push('/login')" class="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">Get Started</button>
        </div>
        <div>
        <Profile
        v-if="useAuth().isAuthenticated.value"
        :user="useAuth().user.value"
        
        
        />
        
        </div>
      </div>
    </nav>
  </template>
  
  
  
  <style scoped>
  /* Optional scoped styles */
  </style>
  