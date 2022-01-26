<template>
<navbar class="mb-4 sm:mb-6 md:mb-8">
  <h1 class="font-bold text-2xl"><router-link to="/">vandercat</router-link></h1>
  <span>
    <ul class="flex items-center gap-4">
      <!--
      <li>
        <ThemeSwitcher/>
      </li>
      -->
      <li v-for="item in navitems" :key="'Nav'+item.name"> 
        <router-link active-class="dark:!text-purple-500 !text-white" :to="item.link" class="dark:hover:text-purple-300 hover:text-purple-300 dark:text-white text-purple-500 transition-colors ease-out"> {{item.name}} </router-link>
      </li>
    </ul>
  </span>
</navbar>
<router-view/>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import navbar from "./components/navbar.vue"
import ThemeSwitcher from "./components/darkmodeswitcher.vue"
const navitems = ref([
  {
    name: "home",
    link: "/"
  },
  {
    name: "about",
    link: "/about"
  },
])
</script>
