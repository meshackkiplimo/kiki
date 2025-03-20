
<script setup lang="ts">
import { ref } from "vue";
import { useCar } from "../composables/useCar";
import { useRouter } from "vue-router";

// Import composable for API functions
const { createCar } = useCar();
const router = useRouter();
const image = ref<File | null>(null);

// Reactive state for the car form
const car = ref({
  brand: "",
  plate: "",
  model: "",
  color: "",
  milage: 0,
  year: 0,
  price: 0,
  fuel: '',
  capacity: 0,
  transmission: '',
  engine: '',
  description: '',
  image: null as File | null,
});

// handle image
const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    car.value.image = target.files[0];
  }
};

// Form submission handler
const handleSubmit = async () => {
  // Validation for required fields
  if (!car.value.brand || !car.value.plate || !car.value.model || 
      !car.value.color || !car.value.milage || !car.value.year || 
      !car.value.price || !car.value.fuel || !car.value.capacity || 
      !car.value.transmission || !car.value.engine || !car.value.description || 
      !car.value.image) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    // Create car via API
    const result = await createCar(car.value);
    alert("Car added successfully!");
    
    // Redirect to homepage (or any other page)
    await router.push("/");
  } catch (error: any) {
    console.error("Error adding car:", error);
    alert(error.message || "Failed to add car. Please try again.");
  }
};
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-semibold mb-6">Add a Car</h1>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Car Brand Input -->
      <div>
        <label for="brand" class="block text-sm font-medium text-gray-700">Car Brand:</label>
        <input 
          type="text" 
          v-model="car.brand" 
          id="brand" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Plate Number Input -->
      <div>
        <label for="plate" class="block text-sm font-medium text-gray-700">Plate Number:</label>
        <input 
          type="text" 
          v-model="car.plate" 
          id="plate" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Car Model Input -->
      <div>
        <label for="model" class="block text-sm font-medium text-gray-700">Car Model:</label>
        <input 
          type="text" 
          v-model="car.model" 
          id="model" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Color Input -->
      <div>
        <label for="color" class="block text-sm font-medium text-gray-700">Color:</label>
        <input 
          type="text" 
          v-model="car.color" 
          id="color" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Mileage Input -->
      <div>
        <label for="milage" class="block text-sm font-medium text-gray-700">Mileage:</label>
        <input 
          type="number" 
          v-model="car.milage" 
          id="milage" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Year Input -->
      <div>
        <label for="year" class="block text-sm font-medium text-gray-700">Year of Manufacture:</label>
        <input 
          type="number" 
          v-model="car.year" 
          id="year" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Price Input -->
      <div>
        <label for="price" class="block text-sm font-medium text-gray-700">Price:</label>
        <input 
          type="number" 
          v-model="car.price" 
          id="price" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Fuel Type Input -->
      <div>
        <label for="fuel" class="block text-sm font-medium text-gray-700">Fuel Type:</label>
        <input 
          type="text" 
          v-model="car.fuel" 
          id="fuel" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Capacity Input -->
      <div>
        <label for="capacity" class="block text-sm font-medium text-gray-700">Capacity:</label>
        <input 
          type="number" 
          v-model="car.capacity" 
          id="capacity" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Transmission Input -->
      <div>
        <label for="transmission" class="block text-sm font-medium text-gray-700">Transmission:</label>
        <input 
          type="text" 
          v-model="car.transmission" 
          id="transmission" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Engine Input -->
      <div>
        <label for="engine" class="block text-sm font-medium text-gray-700">Engine:</label>
        <input 
          type="text" 
          v-model="car.engine" 
          id="engine" 
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Description Input -->
      <div>
        <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
        <textarea 
          v-model="car.description" 
          id="description" 
          required 
          rows="3"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        ></textarea>
      </div>

      <!-- Image Upload -->
      <div>
        <label for="image" class="block text-sm font-medium text-gray-700">Image:</label>
        <input 
          type="file" 
          @change="handleImageUpload" 
          id="image" 
          accept="image/*"
          required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
        />
      </div>

      <!-- Submit Button -->
      <div class="mt-6">
        <button 
          type="submit" 
          class="w-full py-3 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
