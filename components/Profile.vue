<script>
import { ref, computed } from "vue";
import { useAuth } from "../composables/useAuth";

export default {
  setup() {
    const { isAuthenticated, user, logout } = useAuth(); 

    const showDropdown = ref(false);

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    return {
      isAuthenticated,
      user,
      logout,
      showDropdown,
      toggleDropdown,
    };
  },
};
</script>

<template>
  <header class=" text-black p-4 flex justify-between items-center">
   

    <!-- Dynamic Button/Profile -->
    <div>
      <!-- Show Login Button if Not Authenticated -->
      <button
        v-if="!isAuthenticated"
        class="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
        @click="$router.push('/login')"
      >
        Login
      </button>

      <!-- Show Profile if Authenticated -->
      <div v-else class="relative">
        <div
          class="flex items-center cursor-pointer"
          @click="toggleDropdown"
        >
         <button>Profile</button>
          <span>{{ user?.name }}</span>
        </div>

        <!-- Dropdown Menu -->
        <div
          v-if="showDropdown"
          class="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
        >
          <ul>
            <li
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="$router.push('/profile')"
            >
              View Profile
            </li>
            <li
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              @click="logout"
            >
              Logout
            </li>
            <li>
              <div>
        <button @click="$router.push('/create')"  class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-green-800">Create</button>
        </div>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
