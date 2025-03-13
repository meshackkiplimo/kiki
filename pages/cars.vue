<script setup>
import { onMounted } from 'vue';
import { useCar } from '../composables/useCar';

const { cars, fetchCars } = useCar();

onMounted(() => {
  fetchCars();
});
</script>

<template>
  <div>
    <h1>Cars</h1>
    <div v-if="cars.length === 0">No cars available.</div>
    <div v-else class="cars-container">
      <div v-for="car in cars" :key="car.plate" class="car-card">
        <h2>{{ car.brand }} {{ car.model }}</h2>
        <p><strong>Plate:</strong> {{ car.plate }}</p>
        <p><strong>Color:</strong> {{ car.color }}</p>
        <p><strong>Milage:</strong> {{ car.milage }}</p>
        <p><strong>Fuel:</strong> {{ car.fuel }}</p>
        <p><strong>Year:</strong> {{ car.year }}</p>
        <p><strong>Capacity:</strong> {{ car.capacity }}</p>
        <p><strong>Price:</strong> {{ car.price }}</p>
        <p><strong>Engine:</strong> {{ car.engine }}</p>
        <p><strong>Transmission:</strong> {{ car.transmission }}</p>
        <p><strong>Description:</strong> {{ car.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cars-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.car-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>