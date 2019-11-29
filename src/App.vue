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
export default {
  name: "App",
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
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