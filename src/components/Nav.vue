<template>
      <nav class="fixed flex h-20 w-full font-bold overflow-hidden bg-green-700 dark:bg-gray-800 transition-all duration-50 ease-in-out">
      <div class="text-white flex w-full flex-row-reverse justify-evenly md:space-x-16  md:justify-start my-auto">
        <ThemeToggler/>
        <!--router-link class="hover:text-green-500 dark:hover:text-opacity-75" to="/about">About</router-link-->
        <!--router-link class="hover:text-green-500 dark:hover:text-opacity-75" to="/Products">Products</router-link-->
        <!--router-link class="flex dark:hover:text-opacity-50" to="/">
          Home
        </router-link-->

        <div class="flex">
          <span class="material-icons-outlined my-auto">more_vert</span>
        </div>
        <div class="flex">
          <div class="flex flex-col text-right">
            <h1 class="uppercase mx-4">Ana MAría</h1>
            <h1 class="uppercase mx-4 font-thin">POS</h1>
          </div>
          <img class="w-12 h-12 border-2 rounded-full object-cover" src="@/assets/perfil.png" alt="">
        </div>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from "vuex";
import ThemeToggler from "../components/ThemeToggler.vue";


export default defineComponent({
  data (){
    return {
    }
  },
  methods: {
    ...mapActions(['initTheme']),
  },
  components: {
    ThemeToggler,
  },
  beforeMount() {
    this.initTheme();
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
})
</script>

<style>
/*
#nav {
  padding: 30px;
}
*/

nav div a.router-link-exact-active {
  color: #ddec54;
}
</style>