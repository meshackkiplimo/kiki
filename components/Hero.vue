<script>
export default {};
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-center px-6">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Text Section -->
      <div class="space-y-6">
        <h1 class="text-5xl font-extrabold text-orange-500 leading-tight">
          Welcome to Kokya Cars
        </h1>
        <p class="text-xl text-gray-700">
          Discover the best cars at unbeatable prices. Luxury, affordability, and quality all in one place.
        </p>
        <button class="bg-orange-500 hover:bg-orange-400 text-white py-3 px-8 rounded-lg text-lg transition ease-in-out duration-300 shadow-md">
          Shop Now
        </button>
      </div>

      <!-- Image Section -->
      <div class="flex justify-center items-center">
        <div class="w-full max-w-lg rounded-full overflow-hidden border-8 border-orange-500 shadow-lg">
          <img
            src="../assets/img/car.jpg"
            alt="Car"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional scoped styles */
</style>
