
<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'John Doe',
  email: 'john@example.com',
  profilePic: 'https://via.placeholder.com/100',
  cars: [
    { id: 1, name: 'Toyota Corolla', price: '$15,000', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Honda Civic', price: '$18,000', image: 'https://via.placeholder.com/300' },
  ],
});

const editProfile = () => {
  alert('Edit profile functionality coming soon!');
};
</script>


<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div class="flex items-center space-x-4">
        <img :src="user.profilePic" alt="Profile Picture" class="w-20 h-20 rounded-full border-2 border-gray-300" />
        <div>
          <h2 class="text-xl font-semibold">{{ user.name }}</h2>
          <p class="text-gray-500">{{ user.email }}</p>
          <button @click="editProfile" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Edit Profile</button>
        </div>
      </div>
      
      <h3 class="mt-6 text-lg font-semibold">Listed Cars</h3>
      <div v-if="user.cars.length" class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="car in user.cars" :key="car.id" class="border p-4 rounded">
          <img :src="car.image" alt="Car Image" class="w-full h-40 object-cover rounded" />
          <h4 class="mt-2 font-semibold">{{ car.name }}</h4>
          <p class="text-gray-500">Price: {{ car.price }}</p>
        </div>
      </div>
      <p v-else class="mt-4 text-gray-500">No cars listed yet.</p>
    </div>
  </template>
  