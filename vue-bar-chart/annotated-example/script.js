/* global Vue */

var app = new Vue({
  // This is the id of our referenced div-element
  // only this element and everything in it
  // will be connected to the data
  el: '#bars',
  data: {
    chartTitle: "Counting in German",
    svgHeight: 300,
    svgWidth: 200,
    margin: {top: 25, left: 25, bottom: 25, right: 25 },
    data: [
      { name: "eins", val: 1 },
      { name: "zwei", val: 2 },
      { name: "drei", val: 3 },
      { name: "vier", val: 4 },
      { name: "fünf", val: 5 }
    ]
  },
  methods: {
    myFill(index) {
      if (index === 0) {
        return "#C06C84"
      } else {
        return "#355C7D"
      }
    }
  }
  computed: {
    width() {
      return this.svgWidth - this.margin.left - this.margin.right;
    },
    height() {
      return this.svgHeight - this.margin.top - this.margin.bottom;
    },
    // scale = {
    //   x: () => {
    //     do something
    //     return x
    // }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions
    scale() {
      const x = d3
        .scaleBand()
        .domain(this.data.map(x => x.name))
        // https://github.com/d3/d3-scale/blob/master/README.md#band_rangeRound
        .rangeRound([0, this.width])
        .padding(0.15); // There is also paddingInner and paddingOuter if preferred
      const y = d3
        .scaleLinear()
        // The spread operator ... can be used to convert an array
        // in places where a list of parameters is expected.
        // Because we are using a method here, Math.max(1, 2, 3) is expected.
        // The new mapped array is transformed with ...
        // so it can be interpreted by Math.max()
        .domain([0, Math.max(...this.data.map(x => x.val))])
        .rangeRound([this.height, 0]); // Already flipped
      return { x, y };
    }
  },
  directives: {
    axis(el, binding) {
      console.log(el); // this is the g
      console.log(binding); // the scale object
      const axis = binding.arg; // x or y
      // Line below defines an object and immediately calls
      // only the property for x or y
      // it’s basically like a ternary expression
      const axisMethod = { x: "axisBottom", y: "axisLeft" }[axis];
      // The line below assigns the x or y function of the scale object
      const methodArg = binding.value[axis];
      // The variable assignments above are a very concise way to
      // guarantee that d3 can select *this* element and call
      // the axis method on it
      // with the right argument
      // so it ends up equivalent to the expression
      // d3.axisBottom(scale.x)
      d3.select(el).call(d3[axisMethod](methodArg));
    }
  }
})
