<template>
  <v-card v-if="error">
    <v-card-title class="headline">
      {{error.title}}
      <v-icon right :color="getColor(error.errorCode)" left dark>{{ error.iconLevel }}</v-icon>
    </v-card-title>

    <v-card-text>
      <v-layout row>
        <v-flex ml-3 xs2>
          <strong>Data:</strong>
        </v-flex>

        <v-flex xs9>{{error.createdAt}}</v-flex>
      </v-layout>

      <v-layout row mt-3>
        <v-flex ml-3 xs2>
          <strong>Code:</strong>
        </v-flex>

        <v-flex xs9>
          <v-chip :color="getColor(error.errorCode)" dark>{{ error.errorCode }}</v-chip>
        </v-flex>
      </v-layout>

      <v-layout row mt-3>
        <v-flex ml-3 xs2>
          <strong>Host:</strong>
        </v-flex>

        <v-flex xs9>{{error.hostname}}</v-flex>
      </v-layout>

      <v-layout row mt-3>
        <v-flex ml-3 xs2>
          <strong>Ambiente:</strong>
        </v-flex>

        <v-flex xs9>{{error.environment}}</v-flex>
      </v-layout>

      <v-layout row mt-3>
        <v-flex ml-3 xs2>
          <strong>Log:</strong>
        </v-flex>

        <v-flex xs9>{{error.details}}</v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn small text to="/">Voltar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { APIService } from "@/resources/errors.js";
const api = new APIService();

export default {
  data() {
    return {
      error: null
    };
  },
  mounted() {
    this.getError();
  },
  methods: {
    getError() {
      this.teste = api.findById(this.$route.params.id).then(data => {
        this.error = data;

        if (this.error.errorCode >= 1000) this.error.iconLevel = "error";
        if (this.error.errorCode >= 300 && this.error.errorCode <= 999)
          this.error.iconLevel = "update";
        if (this.error.errorCode <= 299) this.error.iconLevel = "warning";
      });
    },
    getColor(errorCode) {
      if (errorCode >= 1000) return "red";
      if (errorCode >= 300 && errorCode <= 999) return "orange";
      if (errorCode <= 299) return "purple";
      else return "#000000";
    }
  }
};
</script>