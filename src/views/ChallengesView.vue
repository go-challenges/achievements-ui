<script>
import axios from "axios";
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
      const res = await axios.get(`${this.baseUrl}/challenges`);

      this.items = res.data;
    },
    async submitChallengeForm() {
      return this.addChallenge(this.name, this.description);
    },
    async addChallenge(name, description) {
      const res = await axios.post(`${this.baseUrl}/challenges`, {name: name, description: description});

      if(res.status == 422) {
        console.log(res);
      } else {
        return getAllData();
      }
    }
  },
  created () {
    this.baseUrl = 'http://localhost:3000';
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
    </div>

    <div class="form-group">
      <label for="name">name</label>
      <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" v-model="name">
      <small id="nameHelp" class="form-text text-muted">Enter the name of the challenge.</small>
    </div>
    <div class="form-group">
      <label for="description">description</label>
      <input type="text" class="form-control" id="description" aria-describedby="descriptionHelp" placeholder="Enter description" v-model="description">
      <small id="descriptionHelp" class="form-text text-muted">Enter the description of the challenge.</small>
    </div>
    <button class="btn btn-primary" @click="submitChallengeForm">Create</button>
  </div>
</template>
