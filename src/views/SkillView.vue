<script setup>

import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";

import JavaIcon from '../assets/svg/java.svg'
import PhpIcon from '../assets/svg/new-php-logo.svg'
import JavaScriptIcon from '../assets/svg/javascript.svg'
import MysqlIcon from '../assets/svg/mysql.svg'

import SpringIcon from '../assets/svg/spring-3.svg'
import LaravelIcon from '../assets/svg/laravel-2.svg'
import VueIcon from '../assets/svg/Vue.js_Logo_2.svg'
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Technical Skill">
        <div class="p-2 sm:p-4">
          <div class="space-y-4">
            <h1 class="text-xl font-bold">Technical Skills</h1>
            <p>As a Software Engineer specializing in backend development, blockchain, and mathematical problems, I've
              developed expertise across multiple programming languages and frameworks. My technical foundation is built
              on solving complex programming challenges and implementing robust software solutions.
            </p>
          </div>
        </div>
        <div class="p-2 sm:p-4">
          <div class="space-y-6">
            <!-- Header -->
            <div class="flex justify-between items-center mb-6">
              <div>
                <h2 class="text-2xl font-semibold mb-1">Technology Stack</h2>
                <p class="text-gray-600 dark:text-gray-400">
                  A comprehensive set of programming languages, frameworks, and tools utilized in software development.
                </p>
              </div>

            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

              <!-- Java -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-orange-600 to-orange-800 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img :src="JavaIcon" alt="Java" class="object-contain" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">Java</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- PHP -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-indigo-500 to-purple-600 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img :src="PhpIcon" alt="PHP" class="object-contain" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">PHP</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- JavaScript / TypeScript -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-yellow-500 to-amber-600 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img :src="JavaScriptIcon" alt="JavaScript/TypeScript" class="object-contain" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">JavaScript</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- SQL -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-cyan-500 to-cyan-700 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img alt="SQL" :src="MysqlIcon" class="object-contain" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">SQL</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- Spring Boot -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-green-400 to-green-600 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img alt="spring" :src="SpringIcon" class="object-contain" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">Spring Boot</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- Laravel -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-red-400 to-red-600 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img alt="spring" :src="LaravelIcon" class="object-contain shadow" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">Laravel</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
              </div>

              <!-- Vue JS -->
              <div class="relative overflow-hidden p-4 rounded-2xl shadow-md bg-gradient-to-br from-green-500 to-green-700 transition-all duration-300 ease-out">
                <div class="relative z-10">
                  <div class="flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-white/20 backdrop-blur">
                    <img alt="spring" :src="VueIcon" class="object-contain shadow" width="32" height="32" />
                  </div>
                  <h3 class="text-lg font-medium text-white mb-1">Vue Js</h3>
                  <div class="flex space-x-1 mt-2">
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                    <div class="h-1.5 w-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div class="absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl bg-white/10"></div>
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