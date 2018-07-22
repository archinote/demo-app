<template lang="html">
  <v-layout class="my-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="lime darken-2" dark flat>
          <v-icon>mdi-help-circle-outline</v-icon>
          <v-toolbar-title>Help page</v-toolbar-title>
        </v-toolbar>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-3">Help page</h3>
            <p>Eu nisi qui laborum adipisicing est. Irure nisi et culpa proident minim cupidatat esse quis. 
              Veniam fugiat elit excepteur id veniam. Eiusmod fugiat reprehenderit elit excepteur. Qui incididunt pariatur labore et.</p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['companyId'],

  data: function() {
    return {
      // companyId: null
    };
  },

  created() {
    // console.log("'Help' component CREATED.");
  },
  mounted() {
    // console.log("'Help' component MOUNTED.");
  }
};
</script>

<style lang="css">
</style>
