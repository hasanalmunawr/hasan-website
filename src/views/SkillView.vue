<script setup>

import MainLayout from "@/layouts/MainLayout.vue";
import ContainerContent from "@/components/ContainerContent.vue";
import CardContent from "@/components/CardContent.vue";
import SkillCard from "@/components/cards/SkillCard.vue";
import JavaIcon from '../assets/svg/java.svg'
import PhpIcon from '../assets/svg/new-php-logo.svg'
import JavaScriptIcon from '../assets/svg/javascript.svg'
import MysqlIcon from '../assets/svg/mysql.svg'

import SpringIcon from '../assets/svg/spring-3.svg'
import LaravelIcon from '../assets/svg/laravel-2.svg'
import VueIcon from '../assets/svg/Vue.js_Logo_2.svg'
import {ref} from "vue";

const visibleCard = ref({})
const showSectionCard = (name) => {
  visible.value[name] = true
}

const skills = [
  {
    title: 'Java',
    icon: JavaIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-orange-600 to-orange-800',
    intersectName: 'java'
  },
  {
    title: 'PHP',
    icon: PhpIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    intersectName: 'php'
  },
   {
    title: 'JavaScript',
    icon: JavaScriptIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    intersectName: 'javascript'
  },
   {
    title: 'SQL',
    icon: MysqlIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    intersectName: 'sql'
  },
 {
    title: 'Spring Boot',
    icon: SpringIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-green-400 to-green-600',
    intersectName: 'sql'
  },
 {
    title: 'Laravel',
    icon: LaravelIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-red-500 to-red-700',
    intersectName: 'sql'
  },
{
    title: 'Vue Js',
    icon: VueIcon,
    level: 5,
    bgClass: 'bg-gradient-to-br from-green-500 to-green-700',
    intersectName: 'sql'
  },

]

const visible = ref({
  title: false,
  description: false,
  title2: false,
  description2: false,
  cardTech1: false,
  cardTech2: false
})
const showSection = (name) => {
  visible.value[name] = true
}
</script>

<template>
  <MainLayout>
    <ContainerContent>
      <CardContent title="Technical Skill">
        <div class="p-2 sm:p-4">
          <div class="space-y-4">
            <h1 class="text-xl font-bold fade-in-up"
              v-intersect="{ name: 'title', callback: showSection }"
              :class="{ show: visible.title }"
              :style="{ transitionDelay: '0.2s' }">
              Technical Skills
            </h1>
            <p class=" fade-in-up"
                v-intersect="{ name: 'description', callback: showSection }"
                 :class="{ show: visible.description }"
                 :style="{ transitionDelay: '0.4s' }">
              As a Software Engineer specializing in backend development, . I've
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
                <h2 class="text-2xl font-semibold mb-1 fade-in-up"
                    v-intersect="{ name: 'title2', callback: showSection }"
                    :class="{ show: visible.title2 }"
                    :style="{ transitionDelay: '0.4s' }">
                  Technology Stack
                </h2>
                <p class="text-gray-600 dark:text-gray-400 fade-in-up"
                   v-intersect="{ name: 'description2', callback: showSection }"
                   :class="{ show: visible.description2 }"
                   :style="{ transitionDelay: '0.4s' }">
                  A comprehensive set of programming languages, frameworks, and tools utilized in software development.
                </p>
              </div>

            </div>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

              <SkillCard
                  v-for="(skill, i) in skills"
                  :key="i"
                  :title="skill.title"
                  :icon="skill.icon"
                  :level="skill.level"
                  :bgClass="skill.bgClass"
                  :intersectName="skill.intersectName"
                  :delay="`${0.3 + i * 0.2}s`"
                  :visible="visible"
                  :showSection="showSection"
              />

            </div>
          </div>
        </div>


      </CardContent>
    </ContainerContent>
  </MainLayout>
</template>

<style scoped>

</style>