<script setup lang="ts">
import { ref } from 'vue'
import { useCar } from '../composables/useCar'
import { useRouter } from 'vue-router'

const { createCar } = useCar()
const router = useRouter()

const car = ref({
  type: "",
  plate: "",
  model: "",
  seats: 0,
  mileage: 0,
  year: 0,
  carType: "",
  // image: null,
})

// const handleFileUpload = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   if (target.files) {
//     car.value.image = target.files[0]
//   }
// }

const handleSubmit = async () => {
  // Validation for required fields
  if (!car.value.type || !car.value.plate || !car.value.model || 
      !car.value.seats || !car.value.mileage || !car.value.year || !car.value.carType) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    await createCar(car.value)
    alert("Car added successfully!")
    // Optionally redirect to another page
    await router.push("/")
  } catch (error) {
    console.error("Error adding car:", error)
    alert("Failed to add car. Please try again.")
  }
}
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-semibold mb-6">Add a Car</h1>
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="type" class="block text-sm font-medium text-gray-700">Car Type:</label>
        <input type="text" v-model="car.type" id="type" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>
      
      <div>
        <label for="plate" class="block text-sm font-medium text-gray-700">Plate Number:</label>
        <input type="text" v-model="car.plate" id="plate" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>

      <div>
        <label for="model" class="block text-sm font-medium text-gray-700">Model:</label>
        <input type="text" v-model="car.model" id="model" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>

      <div>
        <label for="seats" class="block text-sm font-medium text-gray-700">Seats:</label>
        <input type="number" v-model="car.seats" id="seats" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>

      <div>
        <label for="mileage" class="block text-sm font-medium text-gray-700">Mileage:</label>
        <input type="number" v-model="car.mileage" id="mileage" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>

      <div>
        <label for="year" class="block text-sm font-medium text-gray-700">Year of Manufacture:</label>
        <input type="number" v-model="car.year" id="year" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div>

      <div>
        <label for="carType" class="block text-sm font-medium text-gray-700">Car Type:</label>
        <select v-model="car.carType" id="carType" required 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
          <option value="">Select Car Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Convertible">Convertible</option>
        </select>
      </div>

      <!-- <div>
        <label for="image" class="block text-sm font-medium text-gray-700">Upload Car Image:</label>
        <input type="file" @change="handleFileUpload" id="image" 
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
      </div> -->

      <div class="mt-6">
        <button type="submit" 
          class="w-full py-3 px-4 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
