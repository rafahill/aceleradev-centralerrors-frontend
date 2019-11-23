<template>
  <v-card>
    
    <v-layout>
      <v-card-title>Logs do Sistema</v-card-title>
      <v-spacer></v-spacer>
      <v-flex xs3>
        <v-radio-group v-model="environment" row>
          <v-radio label="Dev" color="#004B8B" value="dev"></v-radio>
          <v-radio label="Produção" color="#004B8B" value="production"></v-radio>
          <v-radio label="Homologação" color="#004B8B" value="validation"></v-radio>
        </v-radio-group>
      </v-flex>

      <v-flex xs3>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Buscar"
          single-line
          hide-details
          class="mr-3"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-data-table :headers="headers" :items="errors" :search="search">
      <template v-slot:item.errorCode="{ item }">
        <v-chip :color="getColor(item.errorCode)" dark>{{ item.errorCode }}</v-chip>
      </template>

      <template v-slot:item.level="{ item }">
        <v-icon :color="getColor(item.errorCode)" left dark>{{ item.iconLevel }}</v-icon>
        <span>{{ item.level }}</span>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-btn icon class="mr-2">
          <v-icon>archive</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      environment: null,
      headers: [
        { text: "Level", value: "level" },
        { text: "Data/Hora", value: "date" },
        { text: "Título", value: "title" },
        { text: "Código", value: "errorCode" },
        { text: "Ações", value: "actions" }
      ],
      errors: [
        {
          iconLevel: "error",
          level: "Erro",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.Service.Addcandidate: <forbidden>",
          errorCode: 1000
        },
        {
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          iconLevel: "warning",
          level: "Alerta",
          date: "23/11/2019 - 12:11:02",
          title: "user.Service.Auth: password.Password.Compare.crypto/bcrrypt",
          errorCode: 100
        },
        {
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          iconLevel: "warning",
          level: "Alerta",
          date: "23/11/2019 - 12:11:02",
          title: "user.Service.Auth: password.Password.Compare.crypto/bcrrypt",
          errorCode: 100
        },
        {
          iconLevel: "error",
          level: "Erro",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.Service.Addcandidate: <forbidden>",
          errorCode: 1000
        }
      ]
    };
  },
  methods: {
    getColor(errorCode) {
      if (errorCode >= 1000) return "red";
      if (errorCode >= 300 && errorCode <= 999) return "orange";
      if (errorCode <= 100) return "purple";
      else return "#000000";
    }
  }
};
</script>