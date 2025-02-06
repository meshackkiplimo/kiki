<script lang="ts" setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref(null);
const errorMessage = ref(null);

const submitForm = async () => {
  // Form submission logic here
}
</script>

<template>
  <div class="contact-page min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4">
    <div class="mx-auto max-w-5xl">
      <div class="contact-container overflow-hidden rounded-2xl bg-white shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Form Section -->
          <div class="p-8 md:p-12">
            <h2 class="mb-8 text-3xl font-bold text-gray-800">Get in Touch</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="mb-2 block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              
              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              
              <div>
                <label for="message" class="mb-2 block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm transition duration-150 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full rounded-lg bg-orange-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-150 ease-in-out hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
              
              <div v-if="successMessage" class="mt-4 rounded-lg bg-green-50 p-4 text-green-700">
                {{ successMessage }}
              </div>
              
              <div v-if="errorMessage" class="mt-4 rounded-lg bg-red-50 p-4 text-red-700">
                {{ errorMessage }}
              </div>
            </form>
          </div>
          
          <!-- Image Section -->
          <div class="relative hidden md:block">
            <img
              src="/assets/img/car.jpg"
              alt="Contact Image"
              class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  background-image: radial-gradient(circle at 1px 1px, rgb(229 231 235) 1px, transparent 0);
  background-size: 40px 40px;
}
</style>