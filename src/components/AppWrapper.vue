<template>
  <div>
    <v-toolbar color="grey lighten-2" flat dense>
      <v-toolbar-side-icon @click="drawerLeft = !drawerLeft"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-on:click="signIn">Sign In</v-btn>
        <v-btn flat v-on:click="signUp">Sign Up</v-btn>
        <v-btn flat v-on:click="signOut">Sign Out</v-btn>
        <v-btn flat v-on:click="checkSignIn">Check</v-btn>
      </v-toolbar-items>

      <v-menu bottom left offset-y>
        <v-btn slot="activator" icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="signIn">
            <v-list-tile-title>Sign In</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="signUp">
            <v-list-tile-title>Sign Up</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="signOut">
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="checkSignIn">
            <v-list-tile-title>Check</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn icon @click="drawerRight = !drawerRight">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: "Test App Wrapper",
      drawerLeft: false,
      drawerRight: false,
    }
  },

  computed: {
    ...mapState('app/account', {
      // companyId: state => state.companyId,
      postId: state => state.postId
    }),
    // 'getRouteData' getter use to create route object with correct params.
    ...mapGetters('app/layout', ['getRouteData']),
    // ...mapGetters('app/account', ['isAccountActive']),
    bigScreen: function() {
      return Boolean(this.$vuetify.breakpoint.width > 1264);
    }
  },

  watch: {
    // NOTE:
    // Application must watch for post ID changing
    postId: function() {
      // Post ID changed globally => App content must be updated
      // Post ID: this.postId
      // Post Object: this.$store.getters[`app/account/getPostById`](this.postId)
    }
  },

  methods: {
    signIn: function() {
      // this.$store.dispatch("app/account/signIn", {
      //   email: "testaddress@testhost.ru",
      //   password: "1234567890"
      // })
    },
    signUp: function() {
      // this.$store.dispatch("app/account/signUp", {
      //   email: "testaddress@testhost.ru",
      //   password: "1234567890",
      //   confirm: "1234567890"
      // })
    },
    signOut: function() {
      // this.$store.dispatch("app/account/signOut");
    },
    checkSignIn: function() {
      // this.$store.dispatch("app/account/check");
    }
  }
}
</script>
