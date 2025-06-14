<script setup>
defineProps({
  experience: Object,
  index: Number,
  visible: Boolean,
  onIntersect: Function,
})
</script>

<template>
  <div class="flex items-start space-x-4 fade-in-up"
       v-intersect="() => onIntersect(index)"
       :class="{ show: visible }"
       :style="{ transitionDelay: `${0.3 + index * 0.2}s` }">
    <div class="w-12 h-12 card rounded-lg overflow-hidden flex-shrink-0">
      <img :src="experience.image"
           alt="company logo"
           class="w-full h-full object-cover"/>
    </div>
    <div class="flex-1 space-y-3">
      <div>
        <h3 class="text-lg font-semibold">{{ experience.title }}</h3>
        <p class="text-sm">{{ experience.company }} • {{ experience.period }}</p>
      </div>
      <div class="space-y-2">
        <p class="text-sm" v-for="(desc, i) in experience.descriptions" :key="i">{{ desc }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="(skill, i) in experience.skills" :key="i"
              class="card px-2 py-1 text-xs rounded-full">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease-out;
}
.fade-in-up.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
