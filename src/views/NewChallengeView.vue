<script>
import client from "../api-client";
export default {
  data() {
    return {
      name: "",
      description: "",
      properties: {
        measure: "days",
        amount: 0,
        duration: "month",
      },
      type: "number",
      typeForm: "number",
      options: ["number", "time"],
      measurements: ["days", "hours", "reps"],
      durations: ["day", "week", "month", "year"],
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
      <label for="name">{{ $t("challenge.form.name") }}</label>
      <input
        type="text"
        class="form-control"
        id="name"
        aria-describedby="nameHelp"
        placeholder="Enter name"
        v-model="name"
      />
      <small id="nameHelp" class="form-text text-muted"
        >{{ $t("challenge.form.name_help") }}</small
      >
    </div>
    <div class="form-group">
      <label for="description">{{ $t("challenge.form.description") }}</label>
      <input
        type="text"
        class="form-control"
        id="description"
        aria-describedby="descriptionHelp"
        placeholder="Enter description"
        v-model="description"
      />
      <small id="descriptionHelp" class="form-text text-muted"
        >{{ $t("challenge.form.description_label") }}</small
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
      <label for="amount">{{ $t("challenge.form.amount") }}</label>
      <input
        type="text"
        class="form-control"
        id="amount"
        aria-describedby="amountHelp"
        placeholder="Enter amount"
        v-model="properties.amount"
      />
      <small id="amountHelp" class="form-text text-muted"
        >{{ $t("challenge.form.amount_label") }}</small
      >
      <vue-select
        :options="measurements"
        v-model="properties.measure"
        :value="properties.measure"
        label="measure"
      />
      <small id="durationHelp" class="form-text text-muted"
        >{{ $t("challenge.form.duration_label") }}</small
      >
      <vue-select
        :options="durations"
        v-model="properties.duration"
        :value="properties.duration"
        label="duration"
      />
    </div>
    <div v-if="typeForm === 'time'">
      <label for="time">{{ $t("challenge.form.time") }}</label>
      <input
        type="text"
        class="form-control"
        id="time"
        aria-describedby="timeHelp"
        placeholder="Enter time"
        v-model="properties.time"
      />
      <small id="timeHelp" class="form-text text-muted"
        >{{ $t("challenge.form.time_label") }}</small
      >
    </div>
    <button class="btn btn-primary" @click="submitChallengeForm">{{ $t("challenge.form.create") }}</button>
  </div>
</template>
