<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <v-card-title>Telegram bots</v-card-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <TelegramTable/>
    </v-main>
  </v-app>
</template>

<script>

  import TelegramTable from './components/TelegramTable';

export default {
  name: 'App',

  components: {
    TelegramTable,
  },

  data: () => ({
    //
  }),
};
</script>
