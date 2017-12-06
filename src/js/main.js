import scores from '../../data/scores.js';
import $ from 'jquery';

let bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)  
    .attr('height', 300)
  .selectAll('g')  
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate( 10, ' + i * 35 + ')');

function fade (selection, opacity) {
  selection.style('fill-opacity', opacity)
}

bar.append('rect')
  .style('width', d => d.score)
  .text( d => d.name)
  .classed('bars', true)
  .on('mouseover', function (d, i, elements) { 
   // d3.select(this).classed('bars--on', true);
    d3.selectAll(elements)
      .filter(':not(:hover)')
      .call(fade, 0.5);
  })
  .on('mouseout', function(d, i, elements) { 
   // d3.select(this).classed('bars--on', false);
    d3.selectAll(elements) 
      .call(fade, 1);
  });

bar.append('text')
  .attr('y', 20)
  .text( d => d.name);

/*  event handlers:
.on('click' () => )
.on('mouseover' () => )
*/