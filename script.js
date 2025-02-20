let input = document.getElementById('inputvalue');
let container = document.getElementById('container');
let div = 0;
let number = document.getElementById('number')

function createGrid(num) {
    container.innerHTML = '';

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement('div')
        div.classList.add('cells')
        container.appendChild(div)
    }

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
   
    hover();
}


const value = document.getElementById('inputvalue')



value.addEventListener('input', () => {
    let num = value.value;
    createGrid(num);
 number.innerHTML = num;
}
);

function hover() {
    const cell = document.querySelectorAll('.cells')
    cell.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            const r = Math.random() * 256;
            const g = Math.random() * 256;
            const b = Math.random() * 256;
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}    


