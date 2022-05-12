<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">My Protein List</h1>
    <MyProteinTable></MyProteinTable>
    <div>
      <router-link to="/"
        ><button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <ArrowCircleLeftIcon class="h-6 w-6 mr-1 inline" />Home
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
import MyProteinTable from "@/components/MyProteinTable.vue";
import { ArrowCircleLeftIcon } from "@heroicons/vue/solid";

export default {
  name: "MyProtein",
  components: {
    MyProteinTable,
    ArrowCircleLeftIcon,
  },
};
</script>
