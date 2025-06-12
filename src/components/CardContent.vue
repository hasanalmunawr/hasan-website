<script setup>

defineProps({
  title: {
    type: String,
    default: "UnKnown"
  }
})

</script>

<template>
  <div class="group bg-neutral-800 shadow-lg rounded-2xl mt-6 transition-transform duration-800 ease-in-out hover:scale-101 hover:shadow-2xl cursor-pointer">
    <!-- Header -->
    <div class="flex items-center px-2 sm:px-4 py-1.5 sm:py-2 border-b border-inherit bg-opacity-50">
      <!-- Left Side: Small Window Buttons -->
      <div class="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
        <!-- Minimize -->
        <div title="Minimize"  class="w-3 h-3 rounded-full bg-gray-500 group-hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"></div>

        <!-- Restore -->
        <div title="Restore"  class="w-3 h-3 rounded-full bg-gray-500 group-hover:bg-green-400 transition-colors duration-300 cursor-pointer"></div>

        <!-- Close -->
        <div title="Close"   class="w-3 h-3 rounded-full bg-gray-500 group-hover:bg-red-500 transition-colors duration-300 cursor-pointer"></div>
      </div>

      <div class="flex-1 text-center">
        <h3 class="text-xs sm:text-sm font-medium truncate">{{ title }}</h3>
      </div>

      <!-- Right Side: Empty to Balance Flex -->
      <div class="w-12"></div>
    </div>
    <!-- Content -->
    <div class="text-sm text-gray-300 space-y-2">
      <slot />
    </div>
  </div>

</template>

<style scoped>

</style>