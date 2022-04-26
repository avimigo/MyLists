<template>
  <div class="mb-4">
    <input
      type="text"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="title"
      placeholder="Title"
    />
  </div>
  <div class="flex items-center justify-between mb-4">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      v-on:click="greet"
    >
      Add
    </button>
  </div>
  <table>
    <thead>
      <tr class="bg-gray-100">
        <th class="border">Title</th>
        <th class="border">Author</th>
        <th class="border">Views</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in data" :key="record.id">
        <td class="border">{{ record.title }}</td>
        <td class="border">{{ record.author }}</td>
        <td class="border">{{ record.views }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "a",
          author: "b",
          views: "c",
        },
        {
          id: 2,
          title: "d",
          author: "e",
          views: "f",
        },
      ],
    };
  },
  methods: {
    greet() {
      alert("Hello!");
    },
  },
};
</script>
