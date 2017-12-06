import scores from '../../data/scores.js';

let bar = d3.select('.chart')  // select the chart target div
  .append('svg')               // appended an explicitly sized SVG  
    .attr('width', 225)  
    .attr('height', 300)
  .selectAll('g')  // data join methodology to create a collection of G elements
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate( 10, ' + i * 35 + ')');

bar.append('rect')  //append a rectangle and a text element to each one of the graphics containers
  .style('width', d => d.score)
  .text( d => d.name)
  .classed('bars', true);

bar.append('text')
  .attr('y', 20)
  .text( d => d.name);