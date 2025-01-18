<script setup>
  import { ref } from 'vue';
  import { useAuth } from '~/composables/useAuth';
  const { signup } = useAuth();
  const router = useRouter();

  const name = ref('');
  const email = ref('');
  const password = ref('');
  const error = ref('');

  const handleSignUp = async () => {
    try {
      await signup({
        name: name.value,
        email: email.value,
        password: password.value,
      });
      router.push('/login');
    } catch (err) {
      error.value = err.message || 'Registration failed';
    }
  };
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md p-6 bg-white shadow-lg rounded-md">
      <h2 class="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
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
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Sign Up
        </button>
      </form>
      <p class="mt-4 text-center text-sm">
        Already have an account?
        <nuxt-link to="/login" class="text-blue-500 hover:underline">Log in</nuxt-link>
      </p>
    </div>
  </div>
</template>
