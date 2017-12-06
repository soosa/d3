import scores from '../../data/scores.js';

d3.select('.chart')
  .append('svg')
    .attr('width', 225)  // to overwrite default values
    .attr('height', 300)
  .selectAll('div')
  .data(scores)
  .enter()
    .append('rect')
    .attr('y', (d, i) => i * 33) // d -> data, i -> index
    .style('width', d => d.score)
    .classed('bars', true);
