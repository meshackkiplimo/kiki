import { ref, computed } from 'vue';

interface Car {
  id: string;
  type: string;
  plate: string;
  model: string;
  seats: number;
  mileage: number;
  year: number;
  carType: string;
  // image: File | null;
}

interface CarCredentials {
  type: string;
  plate: string;
  model: string;
  seats: number;
  mileage: number;
  year: number;
  carType: string;
  // image: File | null;
}

export const useCar = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const cars = ref<Car[]>([]);
  const currentCar = ref<Car | null>(null);

  const fetchCars = async () => {
    try {
      const response = await fetch(`${baseURL}/api/cars/create`);
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

  const createCar = async (credentials: CarCredentials) => {
    try {
      const formData = new FormData();
      formData.append('type', credentials.type);
      formData.append('plate', credentials.plate);
      formData.append('model', credentials.model);
      formData.append('seats', credentials.seats.toString());
      formData.append('mileage', credentials.mileage.toString());
      formData.append('year', credentials.year.toString());
      formData.append('carType', credentials.carType);
      // if (credentials.image) {
      //   formData.append('image', credentials.image);
      // }

      const response = await fetch(`${baseURL}/cars/create`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create car');
      }

      cars.value.push(data.car); // Optionally add the new car to the list of cars
      return data;
    } catch (error) {
      console.error('Error creating car:', error);
      throw error;
    }
  };

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

  const updateCar = async (carId: string, credentials: CarCredentials) => {
    try {
      const formData = new FormData();
      formData.append('type', credentials.type);
      formData.append('plate', credentials.plate);
      formData.append('model', credentials.model);
      formData.append('seats', credentials.seats.toString());
      formData.append('mileage', credentials.mileage.toString());
      formData.append('year', credentials.year.toString());
      formData.append('carType', credentials.carType);
      // if (credentials.image) {
      //   formData.append('image', credentials.image);
      // }

      const response = await fetch(`${baseURL}/cars/${carId}/update`, {
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

  const deleteCar = async (carId: string) => {
    try {
      const response = await fetch(`${baseURL}/cars/${carId}/delete`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete car');
      }

      cars.value = cars.value.filter((car) => car.id !== carId); // Remove deleted car from list
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
