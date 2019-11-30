<template>
  <div class="text-xs-center">
    <v-progress-circular
      :size="70"
      :width="7"
      color="#4A55C2"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>


<script>
export default {
  name: 'callback',
  mounted() {
    console.log('should not be here');
    this.$auth.callback();
  },
};
</script>
