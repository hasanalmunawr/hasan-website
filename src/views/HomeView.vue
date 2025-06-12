<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import {ref, onMounted, nextTick} from 'vue'
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";


const dataCards = ref([
  {
    route: "/about",
    title: "About Me",
    description: "Learn more about my background As Software Engineer, professional experience, and career journey.",
  },
  {
    route: "/projects",
    title: "Projects",
    description: "Discover my portfolio of backend systems, blockchain experiments, and distributed applications.",
  },
  {
    route: "/skill",
    title: "Skills",
    description: "Proficient in Java, Spring Boot, Node.js, Docker, and building scalable APIs and secure architectures.",
  },
  {
    route: "/contact",
    title: "Contact",
    description: "Get in touch via LinkedIn, GitHub, or email to collaborate or discuss potential opportunities.",
  },

])


</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Welcome">
          <div class="p-2 sm:p-4">
            <div class="py-8 px-4 md:px-8">
              <div class="text-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold mb-4" style="opacity: 1;">Hasan Almunawar</h1>
                <p class="text-lg max-w-2xl mx-auto" style="opacity: 1;">I'm a passionate Software Engineer specializing
                  in backend development dedicated to delivering value through
                  technology.</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10" style="opacity: 1;">

                <Card v-for="data in dataCards" :key="data.route"
                      :route="data.route" :title="data.title"
                      :description="data.description"
                />

              </div>
              <div class="mt-12 text-center" style="opacity: 1;"><p class="text-sm">Use the tab file at the top of the
                screen to navigate, or click on the file.</p></div>
            </div>
          </div>
      </CardContent>
    </ContainerContent>
  </MainLayout>
</template>

<style scoped>

</style>