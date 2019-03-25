<template>
  <div>
    <input v-model="data[0][1]" type="number">
    <svg id="graph" :width="width" :height="height">
      <rect
        id="svgIdentifier"
        x="0"
        y="0"
        :width="width"
        :height="height"
        fill="#f8f8f8"
        class="identifier"
      ></rect>
      <g id="data">
        <rect
          v-for="(item, index) in data"
          :key="item[0]"
          class="bars"
          :x="10+index*20"
          :y="height-item[1]*height/10"
          width="10"
          :height="item[1]*height/10"
          fill="#000090"
        ></rect>
      </g>
    </svg>
  </div>
</template>

<script>
// import * as d3 from "d3";

export default {
  data() {
    return {
      message: "Let’s try to make a bar chart",
      width: 100,
      height: 200,
      data: [["Apples", 3], ["Oranges", 5], ["Bananas", 9], ["Avocados", 1]]
    };
  },
  methods: {}
};
</script>

<style scoped>
rect {
  transition: all 1s;
}
</style>
