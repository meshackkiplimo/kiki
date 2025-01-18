<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="flex flex-col min-h-screen flex-grow">
    <!-- Main Content -->
    <main class="flex-grow">
      <!-- Add your page content here -->
    </main>

    <!-- Footer -->
    <footer class="bg-blue-600 text-white py-2">
      <div class="max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <!-- Company Info Section -->
          <div>
            <h4 class="text-base font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="/about" class="hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" class="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/privacy" class="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms" class="hover:text-gray-300">Terms & Conditions</a></li>
            </ul>
          </div>

          <!-- Quick Links Section -->
          <div>
            <h4 class="text-base font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="/products" class="hover:text-gray-300">Shop</a></li>
              <li><a href="/cart" class="hover:text-gray-300">Cart</a></li>
              <li><a href="/faq" class="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>

          <!-- Social Media Section -->
          <div>
            <h4 class="text-base font-semibold mb-2">Follow Us</h4>
            <div class="flex space-x-2">
              <a href="https://facebook.com" target="_blank" class="text-xl hover:text-gray-300">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="text-xl hover:text-gray-300">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="text-xl hover:text-gray-300">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-xl hover:text-gray-300">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <!-- Contact Info Section -->
          <div>
            <h4 class="text-base font-semibold mb-2">Contact</h4>
            <p>1234 E-Commerce St</p>
            <p>City, Country</p>
            <p>Email: support@example.com</p>
          </div>
        </div>

        <!-- Copyright Section -->
        <div class="mt-4 text-center text-xs border-t border-gray-500 pt-2">
          <p>&copy; 2025 My E-Commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

footer ul li {
  margin-bottom: 4px;
}
</style>
