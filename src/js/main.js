
let margin = { top: 10, right: 20, bottom: 30, left: 30 };
let width = 400 - margin.left - margin.right;
let height = 600 - margin.top - margin.bottom;

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
  .range([height, 0]); 

let yAxis = d3.axisLeft(yScale); 
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