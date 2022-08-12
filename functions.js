const cell = document.createElement('div');   
const grid = document.querySelector('.grid')            
const clean = document.querySelector('.clean')  
const classic = document.querySelector(".classic");    
const multiColor = document.querySelector(".multiColor");
const range = document.querySelector(".range");
const rangeDesc = document.querySelector(".rangeDesc");
let rangeSize = 16;
let color = false;
let x, y, z, bgColor;
 
cell.classList.add('cell'); 

fillGrid(rangeSize);



range.addEventListener("input", function() {
    fillGrid(range.value)
}, false);      

function fillGrid(value) {
    rangeSize = value * value ;
    rangeDesc.innerHTML = value + ' x ' + value;
    gridSize = grid.offsetWidth;
    grid.innerHTML = "";  
    cell.style.width = ((gridSize/value) - 2) + "px" ;
    cell.style.height = ((gridSize/value) - 2) + "px" ;
    
    for (let i=0 ; i<rangeSize; i++) { 
        grid.appendChild(cell.cloneNode(true));
    }
    const cells = document.querySelectorAll(".cell");

    cells.forEach((item) => {

        // and for each one we add a 'click' listener
        item.addEventListener('mouseover', () => {
            if ( color === true ) {
                    x = Math.floor(Math.random() * 256);
                    y = Math.floor(Math.random() * 256);
                    z = Math.floor(Math.random() * 256);
                bgColor = "rgb(" + x + "," + y + "," + z + ")";
            
                item.style.backgroundColor = bgColor;
            }else {
                item.style.backgroundColor = "turquoise";
            }
            
        });
    });
}

clean.addEventListener('click', () =>{
    cells.forEach((item) => {  
        item.style.backgroundColor = "transparent";
    });
});

classic.addEventListener('click', () => {
    classic.classList.toggle('buttonHover');
    classic.disabled = true
    multiColor.disabled = false;
    multiColor.classList.toggle('buttonHover');
    color = false;
 });

 multiColor.addEventListener('click', () => {
    multiColor.classList.toggle('buttonHover');
    classic.classList.toggle('buttonHover');
    multiColor.disabled = true;
    classic.disabled = false;
    color = true;
 });

 

 