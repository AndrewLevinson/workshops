<template>
  <div id="app">
    <h2>{{ subheadline }}</h2>
    <h1>{{ headline }}</h1>
    <hr>
    <div>
      <label>Change the first value of the first data set:</label>
      <input v-model="data1[0].val" type="number">
      
      <simplebarchart :parentData="data1" :width=100 :height=100></simplebarchart>
      <hr>
      <simplebarchart :parentData="data2" :width=600 :height=200></simplebarchart>
    </div>
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
      headline: "A simple, reusable bar chart",
      subheadline: "Vue single-file-components talking to each other",
      data1: [
        {name: 'Apple', val: 3},
        {name: 'Avocado', val: 8},
        {name: 'Banana', val: 2},
        {name: 'Orange', val: 7}
      ],
      data2: [
        {name: 'Beet', val: 1},
        {name: 'Celery', val: 8},
        {name: 'Cucumber', val: 3},
        {name: 'Fennel', val: 2},
        {name: 'Squash', val: 4},
      ]
    };
  }
};
</script>

<style>
  h1, h2 {
    margin: 8px 0;
    font-weight:normal
  }
  div, hr {
    margin: 16px 0;
  }
  #app {
    background: #fafafa;
    padding: 20px;
    width: 600px;
    margin: auto;
    font-family: "Roboto", sans-serif;
  }
</style>