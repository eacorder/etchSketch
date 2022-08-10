const cell = document.createElement('div');   
const grid = document.querySelector('.grid')            


  
cell.classList.add('cell'); 
cell.setAttribute('draggable','false')

for (let i=0 ; i<256; i++) { 
        grid.appendChild(cell.cloneNode(true));
    }

const cells = document.querySelectorAll(".cell");

cells.forEach((item) => {

    // and for each one we add a 'click' listener
    item.addEventListener('mouseover', () => {
       item.classList.add('hoverCell')
    });
  });