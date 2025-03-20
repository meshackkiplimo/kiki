<script setup>
import { useAuth } from '../composables/useAuth';
import { useCart } from '../composables/useCart';
import Profile from './Profile.vue';
import { ref } from 'vue';

const cart = useCart();
const showCart = ref(false);

const toggleCart = () => {
  showCart.value = !showCart.value;
};

const removeFromCart = (itemId) => {
  cart.removeFromCart(itemId);
};
</script>

<template>
  <nav class="text-black shadow-md py-4">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center px-4">
      <div class="text-2xl font-bold">
        <a href="/" class="hover:text-gray-300">LOGO IMAGE</a>
      </div>
      <ul class="flex space-x-6">
        <li><a href="/" class="hover:text-gray-300">Home</a></li>
        <li><a href="/cars" class="hover:text-gray-300">Products</a></li>
        <li><a href="/contact" class="hover:text-gray-300">Contact</a></li>
      </ul>
      
      <div class="flex items-center space-x-4">
        <div class="relative">
          <button @click="toggleCart" class="p-2 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cart.cartCount" class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-2 py-1">{{ cart.cartCount }}</span>
          </button>

          <!-- Cart Dropdown -->
          <div v-if="showCart" class="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50">
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-4">Shopping Cart</h3>
              <div v-if="cart.cart.length === 0" class="text-gray-500 text-center py-4">
                Your cart is empty
              </div>
              <div v-else>
                <div v-for="item in cart.cart" :key="item.id" class="flex items-center gap-4 mb-4 pb-4 border-b">
                  <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-md">
                  <div class="flex-1">
                    <h4 class="font-medium">{{ item.name }}</h4>
                    <p class="text-gray-600">Price: ${{ item.price }}</p>
                    <p class="text-sm">Quantity: {{ item.quantity }}</p>
                  </div>
                  <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="mt-4 pt-4 border-t">
                  <div class="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${{ cart.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2) }}</span>
                  </div>
                  <button class="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  </nav>
</template>

<style scoped>
/* Add a fade-in animation for the cart dropdown */
.absolute {
  animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>