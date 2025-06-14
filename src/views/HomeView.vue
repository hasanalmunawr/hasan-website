<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Card from "@/components/Card.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import { ref } from 'vue'

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
  }
])

const visible = ref({
  header: false,
  cards: false,
  footer: false
})

const showSection = (name) => {
  visible.value[name] = true
}
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Welcome">
        <div class="p-2 sm:p-4 max-w-4xl">
          <div class="py-8 px-4 md:px-8">
            <div
                class="text-center mb-8 fade-in-up"
                v-intersect="{ name: 'header', callback: showSection }"
                :class="{ show: visible.header }"
                :style="{ transitionDelay: '0.2s' }"
            >
              <h1 class="text-4xl md:text-5xl font-bold mb-4">Hasan Almunawar</h1>
              <p class="text-lg max-w-2xl mx-auto">
                I'm a passionate Software Engineer specializing in backend development...
              </p>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 fade-in-up"
                v-intersect="{ name: 'cards', callback: showSection }"
                :class="{ show: visible.cards }"
                :style="{ transitionDelay: '0.6s' }"
            >
              <Card
                  v-for="data in dataCards"
                  :key="data.route"
                  :route="data.route"
                  :title="data.title"
                  :description="data.description"
              />
            </div>

            <div
                class="mt-12 text-center fade-in-up"
                v-intersect="{ name: 'footer', callback: showSection }"
                :class="{ show: visible.footer }"
                :style="{ transitionDelay: '1s' }"
            >
              <p class="text-sm">
                Use the tab file at the top of the screen to navigate, or click on the file.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </ContainerContent>
  </MainLayout>
</template>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.fade-in-up.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
