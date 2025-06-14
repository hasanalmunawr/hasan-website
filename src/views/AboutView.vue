<script setup>

import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="About Me">
        <div class="p-2 sm:p-4">
          <div>
            <h2 class="text-xl font-semibold mb-6">About Me</h2>
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-1/3">
                <div class="card rounded-lg overflow-hidden w-full aspect-square mb-4 relative">
                  <img alt="Hasan Almunawar" loading="lazy" decoding="async" data-nimg="fill"
                       class="object-cover" sizes="100vw"
                       src="https://picsum.photos/280/280"
                       style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                </div>
                <div class="space-y-2">
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
              <div class="md:w-2/3"><h3 class="text-xl font-medium mb-4">My Journey</h3>
                <p class="mb-4">I'm a passionate Software Engineer with expertise in backend development,
                  blockchain, and mathematics, dedicated to delivering value through technology. Currently
                  pursuing my Bachelor of Engineering in Informatics at Bandung Institute of Technology.
                </p>
                <p class="mb-6">My research focuses on optimizing blockchain's Avalanche consensus protocol
                  using algorithms. I specialize in software engineering, with experience across multiple
                  programming languages and frameworks.
                </p>
                <!--                          <h3 class="text-xl font-medium mb-4">Professional Experience</h3>-->
                <!--                          <div class="space-y-4 mb-6">-->
                <!--                            <div class="border-l-4 border-blue-500 pl-4"><h4 class="font-medium">Software Developer (Full Time)</h4>-->
                <!--                              <p class="text-sm mb-1">PT Arisamandiri Pratama | September 2024 - Present</p>-->
                <!--                              <p>-->
                <!--                                Contributed to various internal systems by building scalable backend solutions with Laravel &amp; enhancing frontend-->
                <!--                                interfaces with Vue Js.-->
                <!--                                Collaborated closely with cross-functional teams to deliver timely product updates and bug fixes.-->
                <!--                              </p>-->
                <!--                            </div>-->
                <!--                          </div>-->
                <h3 class="text-xl font-medium mb-4">Education</h3>
                <div class="space-y-3">
                  <div class="border-l-4 border-blue-500 pl-4"><h4 class="font-medium">Bachelor of Information
                    System</h4>
                    <p> Muhammadiyah Sarolangun Institute of Technology and Business</p>
                    <p class="text-sm">September 2022 - July 2026 (Expectation)</p>
                    <p class="text-sm mt-1">Relevant Coursework: Algorithm design, Operating system,
                      Distributed system, and mathematical problems.</p></div>
                  <div class="border-l-4 border-blue-500 pl-4"><h4 class="font-medium">Thesis</h4>
                    <p class="text-sm">Research multinode blockchain's Avalanche consensus protocol using
                      dynamic graph algorithm</p></div>
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