<template>
  <div class="wrapper">
    <TopBar />
    <SideBar />
    <v-content class="content">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import TopBar from '@/views/shared/TopBar'

export default {
  name: 'Home',
  components: { TopBar },
  data() {
    return {}
  }
}
</script>

<style scoped>
.wrapper,
.content {
  height: 100%;
  width: 100%;
}
</style>
