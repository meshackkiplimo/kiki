<script>
  export default {
    // Navbar component logic if needed
  };
  </script>


<template>
    <nav class="bg-blue-600 text-white shadow-md py-4">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div class="text-2xl font-bold">
          <a href="/" class="hover:text-gray-300">Kokya Car</a>
        </div>
        <ul class="flex space-x-6">
          <li><a href="/" class="hover:text-gray-300">Home</a></li>
          <li><a href="/products" class="hover:text-gray-300">Products</a></li>
          <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
         
        </ul>
        <div>
            <button @click="$router.push('/login')" class="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">Get Started</button>
        </div>
      </div>
    </nav>
  </template>
  
  
  
  <style scoped>
  /* Optional scoped styles */
  </style>
  