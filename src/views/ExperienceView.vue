<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import IconArisamandiri from '../assets/images/PT Arisamandiri Pratama.png'
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Professional Experience">
        <div class="p-2 sm:p-4">
          <div class="p-6">
            <div class="space-y-4">
              <h1 class="text-xl font-bold">Professional Experience</h1>
              <p>
                My career journey as a Software Engineer has been shaped by a strong foundation in web development and backend systems, where I have consistently contributed to building scalable, efficient, and user-focused digital solutions across various projects and industries.
              </p>
            </div>
            <div class="p-2 sm:p-4">
            <div class="space-y-6">
              <div class="card rounded-lg p-6 transition-all duration-300 shadow-md"
                   style="opacity: 1; transform: none;">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 card rounded-lg overflow-hidden flex-shrink-0">
                    <img alt="PT Arisamandiri Pratama"
                         loading="lazy" width="48"
                         height="48" decoding="async"
                         data-nimg="1"
                         class="w-full h-full object-cover"
                         :src="IconArisamandiri"
                         style="color: transparent;"
                    >
                  </div>
                  <div class="flex-1 space-y-3">
                    <div><h3 class="text-lg font-semibold">Junior Software Engineer</h3>
                      <p class="text-sm">PT Arisamandiri Pratama • September 2024 - Present</p></div>
                    <div class="space-y-2">
                      <p class="text-sm">Application for multiple companies against tenant storage using JDI and React
                        with TypeScript</p>
                      <p class="text-sm">Developed and applied standardized secure client-configuration microservice
                        building blocks</p>
                      <p class="text-sm">Authored comprehensive software documentation, including detailed design,
                        coding logic, unit test results, system design services, grid solutions, etc.</p>
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

</style>