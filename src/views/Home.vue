<template>
  <div class="home h-screen flex flex-col">
    <div class="mt-20 mx-auto w-full h-full flex flex-row">
      <div class="bg-transparent m-8 mr-4 w-2/5 h-full flex flex-col p-8 pb-0 pr-0">
        
        <div class="bg-gray-100 mb-4 flex flex-col w-full h-3/6">
        <table class="text-left m-8" > 
          <tr class="text-xl uppercase">
            <th>cantidad</th>
            <th>producto</th>
            <th>tax</th>
            <th>total</th>
            <th></th>
          </tr>
          <tr class="h-20">
            <td> 
              <div class="flex justify-around">
                <span> 1</span>
                <span class="border-2 border-black rounded-full my-auto material-icons-outlined">add</span>
                <span class="border-2 border-black rounded-full   my-auto material-icons-outlined">remove</span>
              </div>
            </td>
            <td>Coca-cola</td>
            <td>3.5</td>
            <td>3.5</td>
            <td>
              <div class="flex justify-start">
                <span class="my-auto material-icons-outlined">delete</span>
              </div>
            </td>
          </tr>
          <tr>
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
          </tr>
        </table>

        <div class="h-1 mx-16 bg-gray-300">
        </div>
        <div class="flex flex-row w-full mt-8 justify-end space-x-8 pr-16">
          <h1 class="text-3xl font-bold">TOTAL</h1>
          <h1 class="text-3xl text-yellow-400 font-bold">10.49</h1>
        </div>
      </div>

      <div class=" my-2 h-1/6 flex space-x-4">
        <div class="w-1/2 h-full bg-gray-200"> </div>
        <div class="w-1/2 h-full bg-gray-200"> </div>
      </div>
      
      <div class="bg-gray-200 mt-4 mb-8 h-1/6">

      </div>
      </div>
      <div class="bg-transparent mt-8 ml-4 w-3/5 mr-20 h-full flex-col p-8 pl-0">

        <div class=" flex h-3/6 mb-2 pb-4">
          <div class="bg-gray-200  mb-6 h-full w-full"> arriba</div>
        </div>

        <div class="bg-green-900 h-3/6 w-full flex">
          <!--div class="bg-gray-300 flex flex-col w-3/4 ">
          </div>
          <div class="bg-gray-900 flex flex-col w-1/4">
          </div-->
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      checkbox1: true,
    };
  },
  methods: {},
});
</script>
