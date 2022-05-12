<template>
  <div class="mb-4">
    <div>
      <label>フレーバー</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="flavor"
        />
      </div>
    </div>
    <div>
      <label>泡</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="bubble"
        />
      </div>
    </div>
    <div>
      <label>ダマ</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="lump"
        />
      </div>
    </div>
    <div>
      <label>味</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="taste"
        />
      </div>
    </div>
    <div>
      <label>味コメント</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="tasteComment"
        />
      </div>
    </div>
    <div>
      <label>合計</label>
      <div>
        <input
          type="text"
          class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="total"
        />
      </div>
    </div>
  </div>
  <div class="mb-4">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="addProtein()"
    >
      <PlusCircleIcon class="h-6 w-6 mr-1 inline" />Add
    </button>
  </div>
  <div class="flex justify-center mb-4">
    <table class="w-full text-left">
      <thead>
        <tr class="bg-gray-100">
          <th
            class="border-b-4 px-4 py-2"
            v-for="title in titles"
            :key="title.logical"
          >
            {{ title.physical }}
          </th>
          <th class="border-b-4 px-4 py-2"></th>
          <th class="border-b-4 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="protein in proteins" :key="protein.id">
          <td class="border-b px-4 py-2">{{ protein.flavor }}</td>
          <td class="border-b px-4 py-2">{{ protein.bubble }}</td>
          <td class="border-b px-4 py-2">{{ protein.lump }}</td>
          <td class="border-b px-4 py-2">{{ protein.taste }}</td>
          <td class="border-b px-4 py-2">{{ protein.tasteComment }}</td>
          <td class="border-b px-4 py-2">{{ protein.total }}</td>
          <td class="border-b px-4 py-2">
            <PencilAltIcon class="h-6 w-6 inline" />
          </td>
          <td class="border-b px-4 py-2">
            <button @click="removeProtein(protein)">
              <BackspaceIcon class="h-6 w-6 inline" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  PlusCircleIcon,
  PencilAltIcon,
  BackspaceIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
    PlusCircleIcon,
    PencilAltIcon,
    BackspaceIcon,
  },
  data() {
    return {
      open: false,
      flavor: "",
      bubble: "",
      lump: "",
      taste: "",
      tasteComment: "",
      total: "",
      titles: [
        {
          logical: "flavor",
          physical: "フレーバー",
        },
        {
          logical: "bubble",
          physical: "泡",
        },
        {
          logical: "lump",
          physical: "ダマ",
        },
        {
          logical: "taste",
          physical: "味",
        },
        {
          logical: "tasteComment",
          physical: "味コメント",
        },
        {
          logical: "total",
          physical: "合計",
        },
      ],
      proteins: [],
    };
  },
  methods: {
    addProtein() {
      this.proteins.push({
        flavor: this.flavor,
        bubble: this.bubble,
        lump: this.lump,
        taste: this.taste,
        tasteComment: this.tasteComment,
        total: this.total,
      });
      localStorage.setItem("proteins", JSON.stringify(this.proteins));
    },
    removeProtein(protein) {
      this.proteins.splice(this.proteins.indexOf(protein), 1);
    },
  },
  mounted() {
    this.proteins = JSON.parse(localStorage.getItem("proteins")) || [];
  },
  watch: {
    proteins: {
      handler: function () {
        localStorage.setItem("proteins", JSON.stringify(this.proteins));
      },
      deep: true,
    },
  },
};
</script>
<style scoped></style>
