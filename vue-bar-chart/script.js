// https://stackoverflow.com/questions/48726636/draw-d3-axis-without-direct-dom-manipulation

var app = new Vue({
  el: '#bars',
  data: {
    margin: {top:20, right:25, bottom: 20, left: 25},
    svgWidth: 600,
    svgHeight: 300,
    marginBetweenBars: 10,
    data: [
    {name: "eins", val: 1},
    {name: "zwei", val: 2},
    {name: "drei", val: 3},
    {name: "vier", val: 4},
    {name: "fünf", val: 5}
  ]
  },
  computed: {
    width() {
      return this.svgWidth - this.margin.right - this.margin.left
    },
    height() {
      return this.svgHeight - this.margin.top - this.margin.bottom
    },
    scale() {
      const x = d3
        .scaleBand()
        .domain(this.data.map(x => x.name))
        .rangeRound([0, this.width])
        .padding(0.15);
      const y = d3
        .scaleLinear()
        .domain([0, Math.max(...this.data.map(x => x.val))])
        .rangeRound([this.height, 0]);
      return { x, y };
    }
  },
  methods: {
    myFill(index) {
      if (index === 0) {
        return "#C06C84"
      } else {
        return "#355C7D"
      }
    }
  },
  directives: {
    axis(el, binding) {
      // console.log(el);
      // console.log(binding);
      const axis = binding.arg;
      const axisMethod = { x: "axisBottom", y: "axisLeft" }[axis];
      const methodArg = binding.value[axis];
      d3.select(el).call(d3[axisMethod](methodArg));
    }
  }
})