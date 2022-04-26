<template>
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
};
</script>
