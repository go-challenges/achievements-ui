<script>
import client from '../api-client'
export default {
  data() {
    return {
      name: '',
      description: '',
      items: [],
    };
  },
  methods: {
    async getAllData() {
      this.items = await client.getAllData();

    },
    async deleteChallenge(index) {
      await client.deleteChallenge(index);

      await this.getAllData();
    }
  },
  beforeMount(){
    this.getAllData()
 },
};
</script>

<template>
  <div class="d-flex flex-column">
    <div class="list-group-item" v-for="(item, index) in items" v-bind:key="{index}">
      <p class="h3">{{ item.name }}</p>
      <div>{{ item.description }}</div>
      <button @click="deleteChallenge(item.id)"> delete </button>
    </div>
  </div>
</template>
