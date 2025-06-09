<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import { ref, onMounted, nextTick } from 'vue'
import ContainerContent from "@/components/ContainerContent.vue";



const dataCards = ref([
  {
    title: "About Me",
    description: "I'm a passionate Software Engineer specializing in backend development, distributed systems, and blockchain.\n" +
        "I’m dedicated to delivering value through technology.",
  },
  {
    title: "Projects",
    description: "Discover my portfolio of backend systems, blockchain experiments, and distributed applications.",
  },
  {
    title: "Skills",
    description: "Proficient in Java, Spring Boot, Node.js, Docker, and building scalable APIs and secure architectures.",
  },
  {
    title: "Contact",
    description: "Get in touch via LinkedIn, GitHub, or email to collaborate or discuss potential opportunities.",
  },

])


</script>

<template>
  <MainLayout>
    <ContainerContent>

        <h1 class="text-2xl text-center font-bold text-[#a9b7c6] mb-4">Welcome</h1>
        <hr class="mb-6 border-gray-600">
        <h2 class="text-4xl text-center font-semibold text-[#d4d4d4] mb-4">Hasan Almunawar</h2>
        <p class="text-[#bbbbbb] text-center text-lg px-20">
          I'm a passionate Software Engineer specializing in backend development, distributed systems, and blockchain.
          I’m dedicated to delivering value through technology.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <Card v-for="data in dataCards" :key="data.title" :title="data.title" :description="data.description" />
        </div>
    </ContainerContent>
  </MainLayout>
</template>

<style scoped>

</style>