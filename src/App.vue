<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="2">
          <Navbar />
      </v-col>
      <v-col cols="10">
          <Dashboard />
      </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

export default {
  name: 'App',

  components: {
    Dashboard,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
