<template>
  <div>
    <v-toolbar>
     
      <v-subheader>Bem vindo @Usuario, seu token é: 312absa2313aae42</v-subheader>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Geral</v-btn>
        <v-btn text>Arquivados</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon to="">
          <v-icon>person</v-icon>
        </v-btn>
        <v-btn icon to="/">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
        
      </template>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      extended: false,
      extendedSlot: false,
      prominent: false,
      dense: false,
      collapse: false,
      flat: false,
      bg: false,
      extensionHeight: 48,
    }),
  }
</script>