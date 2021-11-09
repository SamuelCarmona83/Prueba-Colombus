<template>
    <!--button 
     @click="toggleTheme1"
     class="dark:text-red-400 text-cyan-200">
      Theme Toggle
    </button-->
    <div class="flex md:mx-16">
        <span v-if="temita == 'light'" class="material-icons-outlined text-gray-900 dark:text-green-400 " @click="toggleTheme1">
            dark_mode
        </span>
        <span v-else class="material-icons-outlined text-gray-900 dark:text-green-400 " @click="toggleTheme1">
            light_mode
        </span>
    </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex"
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ThemeToggler',
    data(){
        return{
            dark: true,
        }
    },
    methods: {
        ...mapActions(['toggleTheme']),    
        toggleTheme1() {
        this.toggleTheme()
        },
    },
    computed: {
        ...mapGetters({ theme: "getTheme" }),

        temita (): string {
            return this.theme
        },
    }
})
</script>
