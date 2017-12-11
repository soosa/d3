
let margin = { top: 25, right: 25, bottom: 25, left: 45 };
let width = 425 - margin.left - margin.right;
let height = 625 - margin.top - margin.bottom;

let svg =  d3.select('.chart')
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('rect')
  .attr('width', width)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'grey');

let yScale = d3.scaleLinear()
  .domain([0, 1])
  .range([height, 0]);  // y dimension runs from top to bottom in svg

let yAxis = d3.axisLeft(yScale); //.ticks(5, '%') etc. to customise
svg.call(yAxis);

let xScale = d3.scaleTime()
  .domain([new Date(2017, 9, 1), new Date(2017, 12, 1) ])
  .range([0,width]);

let xAxis = d3.axisBottom(xScale)
    .ticks(5)
    .tickSizeInner(10)
    .tickSizeOuter(20)
    .tickPadding(5);

svg
  .append('g')
    .attr('transform', `translate(0, ${height})`)
  .call(xAxis);