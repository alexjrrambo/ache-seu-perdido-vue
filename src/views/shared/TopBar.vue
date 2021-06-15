<template>
  <v-app-bar id="app-bar" dense clipped-left flat app color="primary" dark>
    <v-spacer></v-spacer>

    <v-menu
      v-model="userMenu"
      :close-on-content-click="false"
      :nudge-width="200"
    >
      <template v-slot:activator="{ on }">
        <v-avatar class="avatar" v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Alex Jr Rambo</v-list-item-title>
              <v-list-item-subtitle>
                alexjr.rambo@gmail.com
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="onLogout">
                <v-icon>mdi-door</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
  components: {},
  computed: {
    pageTitle() {
      return this.$route.meta.label
    }
  }
}
</script>

<style lang="scss">
#app-bar {
  border-bottom: 1px solid #ddd !important;
}
</style>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
