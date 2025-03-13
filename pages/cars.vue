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
        <div class="car-image">
          <!-- Assuming car.imageUrl is the property in your database -->
          <img
            :src="car.imageUrl"
            :alt="`${car.brand} ${car.model}`"
            class="product-image"
            @error="handleImageError"
          />
        </div>
        <div class="car-details">
          <h2>{{ car.brand }} {{ car.model }}</h2>
          <p class="car-price"><strong>{{ car.price }}</strong></p>
          <div class="car-specs">
            <p><strong>Plate:</strong> {{ car.plate }}</p>
            <p><strong>Color:</strong> {{ car.color }}</p>
            <p><strong>Mileage:</strong> {{ car.milage }}</p>
            <p><strong>Fuel:</strong> {{ car.fuel }}</p>
            <p><strong>Year:</strong> {{ car.year }}</p>
            <p><strong>Capacity:</strong> {{ car.capacity }}</p>
            <p><strong>Engine:</strong> {{ car.engine }}</p>
            <p><strong>Transmission:</strong> {{ car.transmission }}</p>
          </div>
          <p class="car-description"><strong>Description:</strong> {{ car.description }}</p>
          <button class="purchase-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleImageError(e) {
      // If image fails to load, replace with a placeholder
      e.target.src = '/api/placeholder/300/200';
    }
  }
}
</script>

<style scoped>
.cars-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 20px 0;
}

.car-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.car-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f8f8f8;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.car-details {
  padding: 16px;
}

.car-details h2 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.4rem;
  color: #333;
}

.car-price {
  font-size: 1.2rem;
  color: #e53935;
  margin-bottom: 12px;
}

.car-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}

.car-specs p {
  margin: 0;
  font-size: 0.9rem;
}

.car-description {
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.purchase-btn {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.purchase-btn:hover {
  background-color: #388e3c;
}
</style>