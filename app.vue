<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar /> <!-- Your global navbar -->
    <NuxtPage />   <!-- This will render the page content (including Hero) -->
  </div>
</template>

<script>

import Navbar from '~/components/Navbar.vue'; // Import your Navbar component

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
