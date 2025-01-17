<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar /> 
    <NuxtPage /> 
    <!-- footer  -->
    <Footer/>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar.vue'; // Import your Navbar component
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Navbar, // Register the Navbar component
  },
};
</script>

<style scoped>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
