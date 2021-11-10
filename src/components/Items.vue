<template>
  <div class="flex flex-col">
    <div class="bg-white">
      <div
        class="
          max-w-2xl
          mx-auto
          py-8
          md:py-2
          px-2
          sm:py-24
          sm:px-6
          lg:max-w-7xl
          lg:px-8
        "
      >
        <div
          class="
            max-h-42
            md:max-h-64
            xl:max-h-72
            overflow-auto
            grid grid-cols-1
            gap-y-2
            sm:grid-cols-2
            gap-x-6
            lg:grid-cols-3
            xl:grid-cols-4
            xl:gap-x-8
          "
        >
          <a href="#" class="group flex flex-col" v-for="item in items" :key="item.id">
            <div
              class="
                w-full
                aspect-w-1 aspect-h-1
                bg-gray-200
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <img
                :src="item.Url"
                class="
                  w-full
                  h-full
                  object-center object-cover
                  group-hover:opacity-75
                "
                alt=""
              />
            </div>
            <h3 class="mt-4 uppercase mr-auto text-md font-bold text-gray-700">
              {{ item.Nombre }}
            </h3>
            <p class="mt-1 mr-auto text-sm text-gray-900">
              ${{ item.Precio }} CAD
            </p>
          </a>

          <!-- More products... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [ 
      { id:"1" ,Nombre:"Coca-Cola", Precio:"3.5", Url: require('@/assets/cocacola-lata.jpg') },
      { id:"2" ,Nombre:"Coca-Cola Zero", Precio:"3.5", Url: require('@/assets/cocacola-zero.jpg') }, 
      { id:"3" ,Nombre:"Manzana Post.", Precio:"3.5", Url: require('@/assets/postobon-manzana-lata.jpg') },
      { id:"4" ,Nombre:"Agua Natural", Precio:"3.5", Url: require('@/assets/agua-500ml.jpg') },
      { id:"5" ,Nombre:"Naranja Post.", Precio:"3.5", Url: require('@/assets/naranja-postobon.jpg') },
      { id:"6" ,Nombre:"tropical 2L", Precio:"3.5", Url: require('@/assets/tropical-ecuador-botella.jpg') },
      { id:"7" ,Nombre:"Piña Postobon", Precio:"3.5", Url: require('@/assets/postobon-pina.jpg') },
      ],
      
    };
  },
  beforeMount() {
    /*this.recuperar();*/
  },
  created() {},
  methods: {
    /*recuperar: function () {
      
    },*/
  },
};
</script>

<style scoped>
</style>