<script setup>

defineProps({
  route: String,
  title: String,
  description: String,
})
</script>

<template>
<!--  <div class="border-neutral-900 p-6 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">-->
<!--    <h3 class="text-xl font-semibold text-gray-100 mb-2">{{ title }}</h3>-->
<!--    <p class="text-[#a9b7c6]">-->
<!--      {{ description }}-->
<!--    </p>-->
<!--  </div>-->

  <RouterLink class="block" :to="route">
    <div
        class="card p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <h3
          class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>