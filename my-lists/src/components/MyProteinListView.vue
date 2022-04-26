<template>
  <div>
    <h1 class="text-xl font-semibold">My Protein List</h1>
    <MyProteinTable></MyProteinTable>
    <router-link to="/"
      ><button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <ArrowCircleLeftIcon className="h-6 w-6" />Home
      </button></router-link
    >
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
