<template>
  <div id="app" class="overflow-hidden bg-transparent dark:bg-gray-900 transition-all duration-500 ease-in-out ">
    <Nav/>
    <router-view class=""></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from "vuex";
import Nav from "./components/Nav.vue";


export default defineComponent({
  data (){
    return {
    }
  },
  methods: {
    ...mapActions(['initTheme']),
  },
  components: {
    Nav,
  },
  beforeMount() {
    this.initTheme();
  },
  watch: {
  },
})
</script>


<style>
#app {
  font-family: Avenir, Segoe UI, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
