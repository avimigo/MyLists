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
        泡だらけ
        <StarIcon
          v-for="index in indexes"
          :key="index"
          class="h-8 inline"
          v-bind:class="
            (hoverBubble && index <= bubbleIndex) ||
            (clickedBubble && index <= bubble)
              ? 'text-yellow-400'
              : 'text-gray-400'
          "
          v-on:mouseover="mouseOverBubbleStar(index)"
          v-on:mouseleave="mouseLeaveBubbleStar()"
          v-on:click="clickBubbleStar(index)"
        />
        泡なし
      </div>
    </div>
    <div>
      <label>ダマ</label>
      <div>
        ダマだらけ
        <StarIcon
          v-for="index in indexes"
          :key="index"
          class="h-8 inline"
          v-bind:class="
            (hoverLump && index <= lumpIndex) || (clickedLump && index <= lump)
              ? 'text-yellow-400'
              : 'text-gray-400'
          "
          v-on:mouseover="mouseOverLumpStar(index)"
          v-on:mouseleave="mouseLeaveLumpStar()"
          v-on:click="clickLumpStar(index)"
        />
        ダマなし
      </div>
    </div>
    <div>
      <label>味</label>
      <div>
        Not for me
        <StarIcon
          v-for="index in indexes"
          :key="index"
          class="h-8 inline"
          v-bind:class="
            (hoverTaste && index <= tasteIndex) ||
            (clickedTaste && index <= taste)
              ? 'text-yellow-400'
              : 'text-gray-400'
          "
          v-on:mouseover="mouseOverTasteStar(index)"
          v-on:mouseleave="mouseLeaveTasteStar()"
          v-on:click="clickTasteStar(index)"
        />
        Just for me
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
          <td class="border-b px-4 py-2">
            <StarIcon
              v-for="index in indexes"
              :key="index"
              class="h-8 inline"
              v-bind:class="
                index <= protein.bubble ? 'text-yellow-400' : 'text-gray-400'
              "
            />
          </td>
          <td class="border-b px-4 py-2">
            <StarIcon
              v-for="index in indexes"
              :key="index"
              class="h-8 inline"
              v-bind:class="
                index <= protein.lump ? 'text-yellow-400' : 'text-gray-400'
              "
            />
          </td>
          <td class="border-b px-4 py-2">
            <StarIcon
              v-for="index in indexes"
              :key="index"
              class="h-8 inline"
              v-bind:class="
                index <= protein.taste ? 'text-yellow-400' : 'text-gray-400'
              "
            />
          </td>
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
  StarIcon,
} from "@heroicons/vue/solid";

export default {
  components: {
    PlusCircleIcon,
    PencilAltIcon,
    BackspaceIcon,
    StarIcon,
  },
  data() {
    return {
      open: false,
      flavor: "",
      hoverBubble: false,
      clickedBubble: false,
      bubbleIndex: 0,
      bubble: 0,
      hoverLump: false,
      clickedLump: false,
      lumpIndex: 0,
      lump: 0,
      hoverTaste: false,
      clickedTaste: false,
      tasteIndex: 0,
      taste: 0,
      tasteComment: "",
      total: 0,
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
      indexes: [1, 2, 3],
      proteins: [],
    };
  },
  methods: {
    mouseOverBubbleStar(index) {
      this.hoverBubble = true;
      this.bubbleIndex = index;
    },
    mouseLeaveBubbleStar() {
      this.hoverBubble = false;
    },
    clickBubbleStar(index) {
      this.clickedBubble = true;
      this.bubble = index;
    },
    mouseOverLumpStar(index) {
      this.hoverLump = true;
      this.lumpIndex = index;
    },
    mouseLeaveLumpStar() {
      this.hoverLump = false;
    },
    clickLumpStar(index) {
      this.clickedLump = true;
      this.lump = index;
    },
    mouseOverTasteStar(index) {
      this.hoverTaste = true;
      this.tasteIndex = index;
    },
    mouseLeaveTasteStar() {
      this.hoverTaste = false;
    },
    clickTasteStar(index) {
      this.clickedTaste = true;
      this.taste = index;
    },
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
