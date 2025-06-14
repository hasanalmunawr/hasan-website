<script setup>

import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import aboutMeJson from '../data/aboutMe.json'
import {ref} from "vue";

const visible = ref({
  hero: false,
  hero1: false,
  about1: false,
  about2: false,
  education: false,
  thesis: false
})
const showSection = (name) => {
  visible.value[name] = true
}

const aboutMe = ref(aboutMeJson)
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="About Me">
        <div class="p-2 sm:p-4 max-w-4xl">
          <div>
            <h2 class="text-xl font-semibold mb-6">About Me</h2>
            <div class="flex flex-col md:flex-row gap-8">

              <div class="md:w-1/3 fade-in-up"
                   v-intersect="{ name: 'hero', callback: showSection }"
                   :class="{ show: visible.hero }"
                   :style="{ transitionDelay: '0.2s' }">
                <div class="card rounded-lg overflow-hidden w-full aspect-square mb-4 relative">
                  <img alt="Hasan Almunawar" loading="lazy" decoding="async" data-nimg="fill"
                       class="object-cover" sizes="100vw"
                       src="https://picsum.photos/280/280"
                       style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                </div>
                <div class="space-y-2 fade-in-up"
                     v-intersect="{ name: 'hero1', callback: showSection }"
                     :class="{ show: visible.hero1 }"
                     :style="{ transitionDelay: '0.4s' }">
                  <!-- Location Card -->
                  <div class="card p-2 rounded-lg shadow flex items-center gap-3">
                    <MapMarkerIcon class="text-gray-300" width="24" height="24"/>
                    <div>
                      <p class="text-gray-300">Semarang, Central Java, Indonesia</p>
                    </div>
                  </div>

                  <!-- Email Card -->
                  <div class="card p-2 rounded-lg shadow flex items-center gap-3">
                    <EmailIcon class="text-gray-300" width="24" height="24"/>
                    <div>
                      <p class="text-gray-300">hasanalmunawar9@gmail.com</p>
                    </div>
                  </div>

                </div>
              </div>

              <div class="md:w-2/3">
                <div class="fade-in-up"
                    v-intersect="{ name: 'about', callback: showSection }"
                    :class="{ show: visible.about }"
                    :style="{ transitionDelay: '0.6s' }">
                  <h3 class="text-xl font-medium mb-4">{{ aboutMe.title }}</h3>
                  <p class="mb-4">
                    {{ aboutMe.description }}
                  </p>

                </div>
                <div class="fade-in-up"
                     v-intersect="{ name: 'about2', callback: showSection }"
                     :class="{ show: visible.about2 }"
                     :style="{ transitionDelay: '0.8s' }">
                <p class="mb-6">
                  {{ aboutMe.thesis }}
                </p>
                </div>
                <div
                    class="fade-in-up"
                    v-intersect="{ name: 'education', callback: showSection }"
                    :class="{ show: visible.education }"
                    :style="{ transitionDelay: '1s' }">
                  <h3 class="text-xl font-medium mb-4">Education</h3>
                  <div class="space-y-3">
                    <div class="border-l-4 border-blue-500 pl-4"><h4 class="font-medium">Bachelor of Information
                      System</h4>
                      <p> Muhammadiyah Sarolangun Institute of Technology and Business</p>
                      <p class="text-sm">September 2022 - July 2026 (Expectation)</p>
                      <p class="text-sm mt-1">Relevant Coursework: Algorithm design, Operating system,
                        Distributed system, and mathematical problems.</p></div>
                    <div class="border-l-4 border-blue-500 pl-4 fade-in-up"
                         v-intersect="{ name: 'thesis', callback: showSection }"
                         :class="{ show: visible.thesis }"
                         :style="{ transitionDelay: '1.2s' }">
                      <h4 class="font-medium">Thesis</h4>
                      <p class="text-sm">Research multinode blockchain's Avalanche consensus protocol using
                        dynamic graph algorithm</p></div>
                  </div>
                </div>
              </div>
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