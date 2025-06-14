<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import IconArisamandiri from '../assets/images/PT Arisamandiri Pratama.png'
import {ref} from "vue";

const visible = ref({
  header: false,
  description: false,
  experience: false,
})
const showSection = (name) => {
  visible.value[name] = true
}

</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Professional Experience">
        <div class="p-2 sm:p-4 max-w-4xl">
          <div class="p-6">
            <div class="space-y-4 fade-in-up"
                 v-intersect="{ name: 'header', callback: showSection }"
                 :class="{ show: visible.header }"
                 :style="{ transitionDelay: '0.2s' }">
              <h1 class="text-xl font-bold">Professional Experience</h1>
              <p class="fade-in-up"
                 v-intersect="{ name: 'description', callback: showSection }"
                 :class="{ show: visible.description }"
                 :style="{ transitionDelay: '0.4s' }">
                My career journey as a Software Engineer has been shaped by a strong foundation in web development and backend systems, where I have consistently contributed to building scalable, efficient, and user-focused digital solutions across various projects and industries.
              </p>
            </div>
            <div class="p-2 sm:p-4">
            <div class="space-y-6">
              <div class="card rounded-lg p-6 transition-all duration-300 shadow-md" style="opacity: 1; transform: none;">

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 card rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="PT Arisamandiri Pratama"
                         loading="lazy" width="48"
                         height="48" decoding="async"
                         data-nimg="1"
                         class="w-full h-full object-cover fade-in-up"
                         :src="IconArisamandiri"
                         style="color: transparent;"
                         v-intersect="{ name: 'description', callback: showSection }"
                         :class="{ show: visible.description }"
                         :style="{ transitionDelay: '0.4s' }"
                    >
                  </div>
                  <div class="flex-1 space-y-3 fade-in-up"
                       v-intersect="{ name: 'experience', callback: showSection }"
                       :class="{ show: visible.experience }"
                       :style="{ transitionDelay: '0.8s' }">
                    <div><h3 class="text-lg font-semibold">Junior Software Engineer</h3>
                      <p class="text-sm">PT Arisamandiri Pratama • September 2024 - Present</p></div>
                    <div class="space-y-2">
                      <p class="text-sm">Developed an internal e-learning platform to support corporate training processes, including enrollment, tracking, and reporting features.
                        Contributed to Human Resource Information System (HRIS) modules involving attendance, payroll, and employee management.
                        Built and maintained an after-sales service management system to streamline service tracking, customer interaction, and feedback handling.
                        Engineered a web-based MikroTik device management tool to simplify network configuration and real-time monitoring.
                        All systems were developed using Laravel, jQuery, and Vue.js to ensure responsive interfaces and scalable backend architecture.
                      </p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span class="card px-2 py-1 text-xs rounded-full">PHP</span>
                      <span class="card px-2 py-1 text-xs rounded-full">Laravel</span>
                      <span class="card px-2 py-1 text-xs rounded-full">Jquery</span>
                      <span class="card px-2 py-1 text-xs rounded-full">Vue Js</span>
                    </div>
                  </div>
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