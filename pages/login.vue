<script setup>
import { ref } from 'vue';
import { useRouter } from '#app';
import { useAuth } from '../composables/useAuth';

const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false); 
const router = useRouter();

const { login } = useAuth();

const handleLogin = async () => {
  loading.value = true;
  try {
    await login({ email: email.value, password: password.value });
    error.value = '';
    router.push('/'); 
  } catch (err) {
    error.value = err.message || 'Login failed. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white shadow-lg rounded-md">
      <h2 class="text-2xl font-semibold text-center mb-4">Log In</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
        <button
          :disabled="loading"
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none disabled:bg-gray-400"
        >
          {{ loading ? 'Logging in...' : 'Log In' }}
        </button>
      </form>
      <p class="mt-4 text-center text-sm">
        Don't have an account?
        <nuxt-link to="/signup" class="text-blue-500 hover:underline">Sign up</nuxt-link>
      </p>
    </div>
  </div>
</template>
