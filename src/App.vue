<template>
  <v-app>
    <Header />
    <v-content class="ma-5">
      <div>
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import auth from "@/auth.js";

export default {
  name: "App",
  mounted() {
    this.$auth.checkVuex();
    
    console.log(this.$auth)
    if (this.$auth.isAuthenticated()) {
     
      this.$store.dispatch("carregarPerfil", this.$auth.user);
    }
  },

  data: () => ({
    //
  })
};
</script>


<style>
#app {
  font-family: "Montserrat", "Roboto", Arial, sans-serif;
}
</style>