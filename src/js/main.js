import scores from '../../data/scores.js';

d3.select('.chart')
  .selectAll('div')
  .data(scores)
  .enter()
    .append('div')
    .text((d) => d.name )
    .style('color', 'green');  //only updated will be green

update.exit().remove();  // removes Walter as it is not in the data(update)

update.merge(enter)
  .style('width', d => d.score + 'px');
