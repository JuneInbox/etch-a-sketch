let input = document.getElementById('inputvalue');
let container = document.getElementById('container');
let value = 0;
let div = 0;

function createGrid() {
    for (let i = 0; i < value * value; i++) {
       let div = document.createElement(div)
       div.classList.add('cells')
       container.appendChild(div)
    }
}

