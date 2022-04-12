<script>
import client from "../api-client";
export default {
  data() {
    return {
      name: "",
      description: "",
      properties: {},
      type: "number",
      typeForm: "number",
      options: ["number", "time"],
    };
  },
  methods: {
    async submitChallengeForm() {
      client.addChallenge(
        this.name,
        this.description,
        this.type,
        this.properties
      );
      this.$router.push("/");
    },

    async selectType(value) {
      this.typeForm = value;
    },
  },
};
</script>

<template>
  <div>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        aria-describedby="nameHelp"
        placeholder="Enter name"
        v-model="name"
      />
      <small id="nameHelp" class="form-text text-muted"
        >Enter the name of the challenge.</small
      >
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <input
        type="text"
        class="form-control"
        id="description"
        aria-describedby="descriptionHelp"
        placeholder="Enter description"
        v-model="description"
      />
      <small id="descriptionHelp" class="form-text text-muted"
        >Enter the description of the challenge.</small
      >
    </div>
    <div>
      <vue-select
        :options="options"
        v-model="type"
        :value="type"
        label="type"
        @option:selected="selectType"
      />
    </div>
    <div v-if="typeForm === 'number'">
      <label for="amount">Amount to achieve</label>
      <input
        type="text"
        class="form-control"
        id="amount"
        aria-describedby="amountHelp"
        placeholder="Enter amount"
        v-model="properties.amount"
      />
      <small id="amountHelp" class="form-text text-muted"
        >Enter the amount of repetitions.</small
      >
    </div>
    <div v-if="typeForm === 'time'">
      <label for="time">Time to achieve</label>
      <input
        type="text"
        class="form-control"
        id="time"
        aria-describedby="timeHelp"
        placeholder="Enter time"
        v-model="properties.time"
      />
      <small id="timeHelp" class="form-text text-muted"
        >Enter the time required to get for the channenge.</small
      >
    </div>
    <button class="btn btn-primary" @click="submitChallengeForm">Create</button>
  </div>
</template>
