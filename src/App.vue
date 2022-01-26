<template>
<navbar>
  <h1 class="font-bold text-2xl"><router-link to="/">vandercat</router-link></h1>
  <span>
    <ul class="flex items-center gap-4">
      <!--
      <li>
        <ThemeSwitcher/>
      </li>
      -->
      <li v-for="item in navitems" :key="'Nav'+item.name"> 
        <router-link active-class="text-purple-300" :to="item.link" class="hover:text-purple-500 transition-colors ease-out"> {{item.name}} </router-link>
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
