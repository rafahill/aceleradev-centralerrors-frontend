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
        <v-btn icon class="mr-2" :to="`/error/${item.id}`">
          <v-icon>visibility</v-icon>
        </v-btn>

        <v-btn icon class="mr-2">
          <v-icon>archive</v-icon>
        </v-btn>

        <v-btn icon @click="selectToDelete(item)">
          <v-icon>delete</v-icon>
        </v-btn>
      </template>

    </v-data-table>

     <v-dialog v-model="confirmDialog" persistent max-width="290">
      <v-card>
        <v-layout justify-center>
        <v-subheader>Deseja deletar esse item?</v-subheader>
        </v-layout>

        <v-card-actions>
          <v-layout justify-center>
          <v-btn small text @click="confirmDialog = false">Cancelar</v-btn>
          <v-btn small color="#004B8B" text @click="deleteItem()">Confirmar</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
            v-model="snackbar"
            color="#004B8B"
            :timeout="2000"
            :top="true"
            :right="true"
            flat
          >
            <strong>{{snackMessage}}</strong>
            <v-btn color="#004B8B" small flat @click="snackbar = false">Close</v-btn>
          </v-snackbar>

  </v-card>
</template>

<script>
import { APIService } from '@/resources/errors.js';
const api = new APIService();

export default {
  data() {
    return {
      search: "",
      teste: null,
      environment: null,
      confirmDialog: false,
      selectedItem: null,
      snackbar: false,
      snackMessage: null,
      errorDetails: false,
      headers: [
        { text: "Level", value: "level" },
        { text: "Data/Hora", value: "date" },
        { text: "Título", value: "title" },
        { text: "Código", value: "errorCode" },
        { text: "Ações", value: "actions" }
      ],
      errors: [
        {
          id: "0",
          iconLevel: "error",
          level: "Erro",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.Service.Addcandidate: <forbidden>",
          errorCode: 1000
        },
        {
          id: "1",
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          id: "2",
          iconLevel: "warning",
          level: "Alerta",
          date: "23/11/2019 - 12:11:02",
          title: "user.Service.Auth: password.Password.Compare.crypto/bcrrypt",
          errorCode: 100
        },
        {
          id: "3",
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          id: "4",
          iconLevel: "update",
          level: "Debug",
          date: "23/11/2019 - 12:11:02",
          title: "acceleration.detail: <not_found>",
          errorCode: 300
        },
        {
          id: "5",
          iconLevel: "warning",
          level: "Alerta",
          date: "23/11/2019 - 12:11:02",
          title: "user.Service.Auth: password.Password.Compare.crypto/bcrrypt",
          errorCode: 100
        },
        {
          id: "6",
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
    },
    selectToDelete(item){
      console.log(item)
      this.selectedItem = item
      this.confirmDialog = true
    },
    deleteItem() {
      const index = this.errors.indexOf(this.selectedItem);
      this.errors.splice(index, 1)
      this.confirmDialog = false
      this.activeSnackBar("Erro deletado com sucesso!")
    },
    activeSnackBar(message) {
      this.snackMessage = message
      this.snackbar = true
    },
    getErrors(){
      this.teste = api.findAll()
      console.log(this.teste)
    }
  },
  mounted(){
    this.getErrors()
  }
};
</script>