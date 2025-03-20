import { ref, computed } from 'vue';

interface Car {
  brand: string;
  plate: string;
  model: string;
  color: string;
  milage: number;
  fuel: string;
  year: number;
  capacity: number;
  price: number;
  engine: string;
  transmission: string;
  description: string;
  image: File | null;
}

interface CarCredentials {
  brand: string;
  plate: string;
  model: string;
  color: string;
  milage: number;
  fuel: string;
  year: number;
  capacity: number;
  price: number;
  engine: string;
  transmission: string;
  description: string;
  image: File | null;
}

export const useCar = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const cars = ref<Car[]>([]);
  const currentCar = ref<Car | null>(null);

  // Fetch all cars
  const fetchCars = async () => {
    try {
      const response = await fetch(`${baseURL}/cars`);
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
      const formData = new FormData();
      
      // Add all car data to FormData
      Object.keys(credentials).forEach((key) => {
        if (key === 'image' && credentials.image instanceof File) {
          formData.append('image', credentials.image);
        } else {
          formData.append(key, String(credentials[key as keyof CarCredentials]));
        }
      });

      const response = await fetch(`${baseURL}/cars/create`, {
        method: 'POST',
        body: formData, // Send as FormData instead of JSON
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create car');
      }

      cars.value.push(data.car);
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
      const formData = new FormData();
      
      // Add all car data to FormData
      Object.keys(credentials).forEach((key) => {
        if (key === 'image' && credentials.image instanceof File) {
          formData.append('image', credentials.image);
        } else {
          formData.append(key, String(credentials[key as keyof CarCredentials]));
        }
      });

      const response = await fetch(`${baseURL}/cars/${carId}`, {
        method: 'PUT',
        body: formData,
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
      const response = await fetch(`${baseURL}/cars/${carId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete car');
      }

      cars.value = cars.value.filter((car) => car.plate !== carId);
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


