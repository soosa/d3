// document.body.innerHTML = `<p>${d3.version}</p>`;

// LINEAR
let linearScale = d3.scaleLinear()
  .domain([0, 100]) // representing the range of possible values of input
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

// USING DATA
// d3.csv('data/data.csv', data => { return data; }); => for .csv

d3.json('data/data.json', (data) => { 
    let extentData = d3.extent(data, (d) => d.age);
    // console.log(extentData); // => [13, 38]  meaning: [min max]
    let scale = d3.scaleLinear().domain(extentData).range([0, 100]);
    // console.log(scale(18)); // => 20    
    let uniqueAges = d3.set(data, (d) => d.age );
    // console.log(uniqueAges.values()); // => ["23", "38", "13", "37"]
  }
)

// SELECTION

let link = d3.selectAll('a:nth-child(2)');
// console.log(link.nodes()); // => [a]  
// console.log(link.attr('href')); // => # getter

link.attr('href', 'http://google.com') // setter   
  .append('button') // changing the selection
    .style('color', 'red')
    .classed('red', true)
    .text("inventory")
    .html("<b>SALE</b>");
// console.log(link.attr('href')); // => http://google.com

d3.select('.title')
  .insert('span','a:first-child') // before first child
    .style('color', 'green')
    .html("<b>BOOK</b>");

d3.select('.action').remove();