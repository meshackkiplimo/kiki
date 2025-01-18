// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
    const { isAuthenticated } = useAuth();
    
    if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login');
    }
    
    if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
      return navigateTo('/dashboard');
    }
  });