<template>
  <div class="home h-screen flex flex-col bg-gray-200 dark:bg-gray-700">
    <div class="mt-4 md:mt-12 lg:mt-8 xl:mt-12 mx-auto w-full h-full flex flex-row">
      <div class="bg-transparent m-8 mr-4 w-2/5 h-full flex flex-col p-8 pb-0 pr-0">
        
        <div class="bg-gray-50 mb-4 flex flex-col w-full h-3/6 max-h-46 overflow-auto">
        <table class="text-left m-8" > 
          <tr class="text-xl uppercase">
            <th>cantidad</th>
            <th>producto</th>
            <th>tax</th>
            <th>total</th>
            <th></th>
          </tr>
          <tr v-for="x in items" :key="x.id" class="h-20 hover:bg-gray-100">
            <td> 
              <div class="flex justify-around">
                <span> 1</span>
                <span class="border-2 border-black rounded-full my-auto material-icons-outlined">add</span>
                <span class="border-2 border-black rounded-full   my-auto material-icons-outlined">remove</span>
              </div>
            </td>
            <td>{{x.Nombre}}</td>
            <td>3.5</td>
            <td>3.5</td>
            <td>
              <div class="flex justify-start">
                <span class="my-auto material-icons-outlined">delete</span>
              </div>
            </td>
          </tr>
          <!--tr class="h-20 hover:bg-gray-100">
            <td> 
              <div class="flex justify-around">
                <span>2</span>
                <span class="border-2 border-black rounded-full my-auto material-icons-outlined">add</span>
                <span class="border-2 border-black rounded-full   my-auto material-icons-outlined">remove</span>
              </div>
            </td>
            <td>Manzana Postobon</td>
            <td>3.5</td>
            <td>3.5</td>
            <td>
              <div class="flex justify-start">
                <span class="my-auto material-icons-outlined">delete</span>
              </div>
            </td>
          </tr-->
        </table>

        <div class="h-1 mx-16 bg-gray-300">
        </div>
        <div class="flex flex-row w-full mt-4 justify-end space-x-8 pr-16">
          <h1 class="text-3xl font-bold">TOTAL</h1>
          <h1 class="text-3xl text-yellow-400 font-bold">10.49</h1>
        </div>
      </div>

      <div class=" my-2 h-1/6 flex space-x-4">
        <div class="w-1/2 h-full bg-gray-50 flex flex-row">
          <span class="ml-8 material-icons-outlined my-auto">face</span>
          <h1 class="ml-2 my-auto text-xl font-bold uppercase">
              Descuento Empleados
          </h1>
        </div>
        <div class="w-1/2 h-full bg-gray-50 flex">
          <div class="w-1/2 h-full bg-gray-50 flex flex-row">
            <span class="ml-8 material-icons-outlined my-auto">assignment</span>
            <h1 class="ml-8 my-auto text-xl font-bold uppercase">
                Vista Cliente
            </h1>
          </div>
        </div>
      </div>
      
        <div class="bg-gray-50 mt-4 mb-8 h-1/6 flex flex-row">
          <span class="ml-16 material-icons-outlined my-auto">theaters</span>
          <h1 class="ml-16 my-auto text-xl font-bold uppercase">
              codigo promocional
          </h1>
        </div>
      </div>

      <div class="bg-transparent mt-8 ml-4 w-3/5 mr-20 h-full flex-col pt-8 pb-0 pl-0">

        <div class=" flex h-3/6">
          <div class="bg-gray-50 flex mb-6 h-full w-full"> 
            <div class="h-16 w-full">
              <Tabs/>
              <Items/>
            </div>
            </div>
        </div>

        <div class="bg-transparent h-3/6 w-full flex m-0 pt-4 pb-16">
          <div class="mt-2 flex flex-col w-3/4 space-y-6">
            <div class="flex w-full h-1/2 flex-row space-x-4">
              <div class="h-full w-1/3 bg-gray-50 flex">
                <img class="mx-auto object-contain px-2 xl:px-12" src="../assets/pngwing.com.png" alt="">
              </div>
              <div class="h-full w-1/3 bg-gray-50 flex">
                <img class="mx-auto object-contain px-2 xl:px-12" src="../assets/visa.png" alt="">
              </div>
              <div class="h-full w-1/3 bg-gray-50 flex">
                <img class="mx-auto object-contain px-2 xl:px-12" src="../assets/mastercard.png" alt="">
              </div>
            </div>
            <div class="flex w-full h-1/2 flex-row space-x-4">
              <div class="h-full w-1/3 bg-gray-50 flex">
                <img class="mx-auto object-contain px-2 xl:px-12" src="../assets/uber-eats.jpg" alt="">
              </div>
              <div class="h-full w-1/3 bg-gray-50 flex flex-col">
                <h1 class="mx-auto my-auto flex flex-col text-xl font-bold uppercase">
                  Debito
                  <span class="material-icons-outlined mx-auto">credit_card</span>
                </h1>
              </div>
              <div class="h-full w-1/3 bg-gray-50 flex">
                <span class="material-icons-outlined my-auto mx-auto">add</span>
              </div>
            </div>
          </div>
          <div class="mt-2 ml-4 flex flex-col w-1/4">
            <div class="w-full h-full bg-gray-500 flex">
              <h1 class="text-2xl text-yellow-400 my-auto mx-auto">PAGAR</h1>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tabs from "../components/Tabs.vue";
import Items from "../components/Items.vue";

export default defineComponent({
  name: "Home",
  components: {
    Tabs,
    Items,
  },
  data() {
    return {
      suma: 0,
      items: [ 
      { id:"1" ,Nombre:"Coca-Cola", Precio:"3.5", Url: require('@/assets/cocacola-lata.jpg') },
      { id:"3" ,Nombre:"Manzana Post.", Precio:"3.5", Url: require('@/assets/postobon-manzana-lata.jpg') },
      /*{ id:"5" ,Nombre:"Naranja Post.", Precio:"3.5", Url: require('@/assets/naranja-postobon.jpg') },*/
      ],
      checkbox1: true,
    };
  },
  methods: {},
  computed: {

    total(){
    }

  }
});
</script>
