
let margin = { top: 25, right: 25, bottom: 25, left: 25 };
// created our margin object with Top, Right, Bottom, and Left properties
let width = 425 - margin.left - margin.right;
let height = 625 - margin.top - margin.bottom;
// then created width and height variables that take those margin properties into account

let svg =  d3.select('.chart') // constructed our svg element and set its width and height to the full numeric values by adding the margin properties back in
  .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);
  // then created a graphics container and moved it according to the left and top margins,
  // so that all graphics created after that were already starting from the proper point.

svg.append('rect')
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightblue')
  .style('stroke', 'green');
  
  svg.append('rect')
  .attr('x', width / 2 + 3)
  .attr('width', width / 2)
  .attr('height', height)
  .style('fill', 'lightpink')
  .style('stroke', 'red');