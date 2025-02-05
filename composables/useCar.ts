import { ref, computed } from 'vue';

interface Car {
  type: string;
  plate: string;
  model: string;
  color: string;
  milage: number;
}

interface CarCredentials {
  type: string;
  plate: string;
  model: string;
  color: string;
  milage: number;
}

export const useCar = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const cars = ref<Car[]>([]);
  const currentCar = ref<Car | null>(null);

  // Fetch all cars
  const fetchCars = async () => {
    try {
      const response = await fetch(`${baseURL}/cars`); // ✅ Fix: Correct endpoint
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch cars');
      }

      cars.value = data.cars;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  };

  // Create a new car
  const createCar = async (credentials: CarCredentials) => {
    try {
      const response = await fetch(`${baseURL}/cars/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create car');
      }

      cars.value.push(data.car); // ✅ Fix: Add to list only if successful
      return data;
    } catch (error) {
      console.error('Error creating car:', error);
      throw error;
    }
  };

  // Get a car by ID
  const getCarById = async (carId: string) => {
    try {
      const response = await fetch(`${baseURL}/cars/${carId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch car details');
      }

      currentCar.value = data.car;
    } catch (error) {
      console.error('Error fetching car details:', error);
      throw error;
    }
  };

  // Update a car
  const updateCar = async (carId: string, credentials: CarCredentials) => {
    try {
      const response = await fetch(`${baseURL}/cars/${carId}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, // ✅ Fix: Correct content type
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update car');
      }

      return data;
    } catch (error) {
      console.error('Error updating car:', error);
      throw error;
    }
  };

  // Delete a car
  const deleteCar = async (carId: string) => {
    try {
      const response = await fetch(`${baseURL}/cars/${carId}/delete`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete car');
      }

      cars.value = cars.value.filter((car) => car.plate !== carId); // ✅ Fix: Use correct identifier
      return data;
    } catch (error) {
      console.error('Error deleting car:', error);
      throw error;
    }
  };

  return {
    cars,
    currentCar,
    fetchCars,
    createCar,
    getCarById,
    updateCar,
    deleteCar,
  };
};
