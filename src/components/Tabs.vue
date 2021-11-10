<template>
      <div class="relative">
        <ul class="flex flex-row text-sm">
          <!-- @mouseenter="onTabMouseEnter" @mouseleave="onTabMouseLeave" -->
          <li  id="nav-tab-1" class="flex w-full" @click="onTabClick">
            <a class="w-full my-4 uppercase font-bold" href="#">
              bebidas
            </a>
          </li>
          <li  id="nav-tab-2" class="flex w-full" @click="onTabClick">
            <a class="w-full my-4 uppercase font-bold" href="#">
              comidas
            </a>
          </li>
          <li  id="nav-tab-3" class="flex w-full" @click="onTabClick">
            <a class="w-full my-4 uppercase font-bold" href="#">
              Repostería y Panadería
            </a>
          </li>
          <li  id="nav-tab-3" class="flex w-full" @click="onTabClick">
            <a class="w-full my-4 uppercase font-bold" href="#">
              Refrigerados
            </a>
          </li>

          <li class="flex mx-4">
              <span class="material-icons-outlined my-auto mx-auto">apps</span>
          </li>
        </ul>
        <div class="line mt-2" :style="{ left: `${lineStyles.left}px`, width: `${lineStyles.width}px` }"></div>
      </div>
</template>

<script>
export default {
  computed: {
    lineStyles() {
      return this.lineTemp == null ? this.line : this.lineTemp;
    },
  },
  mounted() {
    const tab = document.getElementById("nav-tab-1");
    if (tab) {
      let styles = {
        left: tab.offsetLeft,
        width: tab.clientWidth,
      };
      this.line = styles;
    }
  },
  data() {
    return {
      currentTab: 2,
      line: {
        left: 0,
        width: 0,
      },
      lineTemp: null,
    };
  },
  methods: {
    onTabClick(evt) {
      const tab = evt.target;
      let styles = {
        left: tab.offsetLeft,
        width: tab.clientWidth,
      };
      this.line = styles;
    },
    onTabMouseEnter(evt) {
      const tab = evt.target;
      let styles = {
        left: tab.offsetLeft,
        width: tab.clientWidth,
      };
      this.lineTemp = styles;
    },
    onTabMouseLeave() {
      this.lineTemp = null;
    },
  },
};
</script>

<style scoped>
/*h2, a {
   mix-blend-mode: difference;
}*/
.tab p {
    display: inline-block;
    margin-right: 30px;
    position: relative;
    margin-bottom: 0;
    /*font-size: 30px;*/
}
    
.tab p:last-child {
    margin-right: 0px;
}
    
.tab p:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 5px;
    background-color: #8C076E;
    -webkit-transition: .5s;
    transition: .5s
}
    
.tab p:hover:before {
    width: 100%
}
.line {
  position: absolute;
  bottom: 0;
  transition: left 0.5s ease-in-out, width 0.5s 0.1s;
  height: 2px;
  background-color: orange;
  left: 0;
  width: 69px;
  pointer-events: none;
}
</style>