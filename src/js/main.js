import scores from '../../data/scores.js';

let update = d3.select('.chart')
  .selectAll('div')                     // as there are no divs this is only data
  .data(scores, function (d) {          // pair each number in the array with an empty div 
    return d ? d.name : this.innerText; // check if name already exists
  })
  .style('color', 'blue'); 

let enter = update.enter() // to access the enter selection, we'll use the .enter method on the update selection.
  .append('div') // creating elements
  .text((d) => d.name )
  .style('color', 'green');  //only updated will be green

update.exit().remove();  // removes Walter as it is not in the data(update)

update.merge(enter)
  .style('width', d => d.score + 'px')
  .style('height', '30px')
  .style('border', '1px solid grey')
  .style('background', 'orange')
  .style('margin-top', '2px');
