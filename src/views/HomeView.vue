<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getAllData() {
      const res = await axios.get(`http://localhost:3000/challenges`);

      this.items = res.data;
    },
  },
};
</script>

<template>
  <button @click="getAllData">Get All</button>
  <li v-for="(item, index) in items">
    {{ index }} - {{ item.name }} - {{ item.description }} -  {{ item.created_at }}
  </li>
</template>
