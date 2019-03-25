<template>
  <div>
    <svg id="graph" :width="width" :height="height">
      <rect
        id="svgIdentifier"
        x="0"
        y="0"
        :width="width"
        :height="height"
        fill="#eee"
        class="identifier"
      ></rect>
      <g id="data">
        <rect
          v-for="(element, index) in parentData"
          :key="element.name"
          class="bars"
          :x="width*0.05+index*(width-width*0.05)/(parentData.length)"
          :y="height-element.val*height/10"
          :width="(width-width*0.05)/(parentData.length)-width*0.05"
          :height="element.val*height/10"
          fill="#228"
        ></rect>
      </g>
    </svg>
    <ul>
      <li v-for="element in parentData">{{ element.name }}, amount: {{ element.val }}</li>
    </ul>
    <p style="font-size:80%;">This component is {{width}}px wide and {{height}}px high</p>
  </div>
</template>

<script>
// import * as d3 from "d3";

export default {
   name: 'SimpleBarChart',
  // To use props, they must be declared
  props: {
    width: Number,
    height: Number,
    parentData: Array
  }
};
</script>

<style scoped>
rect {
  transition: all 1s;
}
ul {
  list-style: none;
  padding-left: 0;
}
</style>
