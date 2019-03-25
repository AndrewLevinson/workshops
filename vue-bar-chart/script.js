var app = new Vue({
  // This is the id of our referenced div-element
  // only this element and everything in it 
  // will be connected to the data
  el: '#bars',
  data: { 
    // The title of our chart
    chartTitle: "Counting in German",
    // The outer dimensions of our svg
    svgWidth: 155,
    svgHeight: 300,
    // Our dataset
    data: [
      {name: "eins", val: 1},
      {name: "zwei", val: 2},
      {name: "drei", val: 3},
      {name: "vier", val: 4},
      {name: "fünf", val: 5}
    ]
  }
})