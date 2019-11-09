<template>
  <v-app>
      <v-content>
        <div>
          <router-view></router-view>
        </div>
      </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>


<style>
#app {
  font-family: "Montserrat", "Roboto", Arial, sans-serif;
}
</style>