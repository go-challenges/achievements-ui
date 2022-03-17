<script>
import client from '../api-client';

export default {
  data() {
    return {
      name: '',
      description: '',
    };
  },
  methods: {

    async submitChallengeForm() {
      client.addChallenge(this.name, this.description);
      this.$router.push('/')
    },
  }
};
</script>

<template>
  <div>
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
