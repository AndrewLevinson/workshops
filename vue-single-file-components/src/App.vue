<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <simplebarchart></simplebarchart>
    <simplebarchart></simplebarchart>
  </div>
</template>

<script>
import simplebarchart from "./SimpleBarChart.vue";

export default {
  name: "SimpleBarChart",
  components: {
    simplebarchart
  },
  data() {
    return {
      message: "Let’s try to make a bar chart"
    };
  }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
}
</style>