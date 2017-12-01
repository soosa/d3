document.body.innerHTML = d3.version;

// LINEAR
let linearScale = d3.scaleLinear()
  .domain([0, 100]) // representing the range of possible values of scores
  .range([0, 1]) // output range, stuff domain being mapped to
  .clamp(true);  // gets rounded to closest if outside limits
// console.log(linearScale(99)); // => 0.99
// console.log(linearScale.invert(0.99)); // => 99

// DATE
let timeScale = d3.scaleTime()
  .domain([new Date(2017, 0, 1), new Date()])
  .range([0,100]);
// console.log(timeScale(new Date(2017, 5, 17)));  // => 49.89179346179267
// console.log(timeScale.invert(50)); // => Sat Jun 17 2017 08:48:30 GMT+0100 (BST)

// QUANTIZED
let quantizeScaleNumber = d3.scaleQuantize()
  .domain([0, 100])
  .range([0, 300]);
// console.log(quantizeScaleNumber(22)); // => 0

let quantizeScaleColour = d3.scaleQuantize()
  .domain([0, 100])
  .range(["red", "pink"]);
// console.log(quantizeScaleColour(22)); // => "red"
// console.log(quantizeScaleColour.invertExtent("red")); // => [0, 50]


