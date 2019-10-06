<template>
  <v-app id="app">
    <NavigationBarBottom></NavigationBarBottom>
    <v-content transition="slide-x-transition">
      <Router-View></Router-View>
    </v-content>
  </v-app>
</template>

<script>
  import NavigationBarBottom from "./components/NavigationBarBottom";

  export default {
    name: 'App',
    components: {NavigationBarBottom},
};
</script>
