<template>
  <v-app>
    <v-subheader class="primary darken-1 white--text subtitle-1">Product Management</v-subheader>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
  }),
};
</script>
