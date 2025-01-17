<template>
    <footer class="bg-blue-600 text-white py-8">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li><a href="/about" class="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" class="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/privacy" class="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms" class="hover:text-gray-300">Terms & Conditions</a></li>
            </ul>
          </div>
  
          <!-- Quick Links Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="/products" class="hover:text-gray-300">Shop</a></li>
              <li><a href="/cart" class="hover:text-gray-300">Cart</a></li>
              <li><a href="/faq" class="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>
  
          <!-- Social Media Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="https://facebook.com" target="_blank" class="text-2xl hover:text-gray-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="text-2xl hover:text-gray-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="text-2xl hover:text-gray-300">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-2xl hover:text-gray-300">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
  
          <!-- Contact Info Section -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <p class="text-sm">1234 E-Commerce St, City, Country</p>
            <p class="text-sm">Email: support@example.com</p>
            <p class="text-sm">Phone: +1 (234) 567-890</p>
          </div>
        </div>
  
        <!-- Copyright Section -->
        <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 My E-Commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  // You can add any functionality here if needed
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  /* Add any optional scoped styles for footer */
  </style>
  