import { ref, computed } from 'vue';


interface User {
  id: string;
  email: string;
  name: string;
}

 interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export const useAuth = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  

  const token = useCookie('auth_token');
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => {
    !!token.value
    return  window && !!window.localStorage.getItem('authToken');

  });


 
  const signup = async (credentials: RegisterCredentials) => {
    try {
      const response = await fetch(`${baseURL}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Automatically login after registration
      await login({
        email: credentials.email,
        password: credentials.password,
      });

      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await fetch(`${baseURL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),

      });


      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('authToken', data.token);
      }
      
     
      token.value = data.token;
      user.value = data.user;

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    token.value = null;
    user.value = null;
    navigateTo('/');
  };
  // Check auth status on app load
  const checkAuth = async () => {
    if (token.value) {
      try {
        const response = await fetch(`${baseURL}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token.value}`,
          },
        });

        if (!response.ok) {
          throw new Error('Invalid token');
        }

        const data = await response.json();
        user.value = data.user;
      } catch (error) {
        token.value = null;
        user.value = null;
      }
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    signup,
    logout,
    checkAuth,
  };
};

