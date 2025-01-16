<template>
    <div>
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center h-screen" style="background-image: url('/wildlife-bg.jpg');">
        <div class="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 class="text-4xl md:text-6xl font-bold">Hi, I'm Ronald Kikie Kendagor</h1>
          <p class="mt-4 text-lg md:text-2xl">
            Wildlife Biologist | Conservation Enthusiast | Researcher
          </p>
          <div class="mt-6">
            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Explore Portfolio
            </button>
            <button class="ml-4 bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Contact Me
            </button>
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section class="py-16 bg-gray-100 text-gray-800 px-6 md:px-20">
        <h2 class="text-3xl font-bold text-center">About Me</h2>
        <p class="mt-4 text-lg text-center max-w-3xl mx-auto">
          I’m a passionate wildlife biologist dedicated to understanding and preserving the delicate balance of nature.
          With years of field experience, I specialize in [specific areas, e.g., conservation, research, etc.].
        </p>
      </section>
  
      <!-- Projects Section -->
      <section class="py-16 bg-white px-6 md:px-20">
        <h2 class="text-3xl font-bold text-center">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/assets/img/image.jpg" alt="Project 1" class="rounded-md">
            <h3 class="text-xl font-semibold mt-4">Project Title</h3>
            <p class="mt-2 text-gray-600">Brief description of the project...</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/assets/img/wild1.jpg" alt="Project 2" class="rounded-md">
            <h3 class="text-xl font-semibold mt-4">Project Title</h3>
            <p class="mt-2 text-gray-600">Brief description of the project...</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="/assets/img/wild2.jpg" alt="Project 3" class="rounded-md">
            <h3 class="text-xl font-semibold mt-4">Project Title</h3>
            <p class="mt-2 text-gray-600">Brief description of the project...</p>
          </div>
        </div>
      </section>
  
      <!-- Gallery Section -->
      <section class="py-16 bg-gray-100 px-6 md:px-20">
        <h2 class="text-3xl font-bold text-center">Gallery</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <img src="/assets/img/wild3.jpg" alt="Wildlife 1" class="rounded-md">
          <img src="/assets//img/wild5.jpg" alt="Wildlife 2" class="rounded-md">
          <img src="/assets/img/wild5.jpg" alt="Wildlife 3" class="rounded-md">
          <img src="/assets/img/wild4.jpg" alt="Wildlife 4" class="rounded-md">
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="py-16 bg-white px-6 md:px-20">
        <h2 class="text-3xl font-bold text-center">Contact Me</h2>
        <form class="max-w-xl mx-auto mt-8">
          <input type="text" placeholder="Your Name" class="w-full mb-4 p-3 border rounded-lg">
          <input type="email" placeholder="Your Email" class="w-full mb-4 p-3 border rounded-lg">
          <textarea placeholder="Your Message" class="w-full mb-4 p-3 border rounded-lg"></textarea>
          <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md w-full">
            Send Message
          </button>
        </form>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 kikie kendagor. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  