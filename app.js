const container = document.getElementById("#container");
const colors = ['#0d3b66','#faf0ca','#f4d35e','#ee964b','#f95738' ]

const squares = 600;
for(let i = 0;i<squares;i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',() => setColor(square))

    square.addEventListener('mouseout',() => removeColor(square))
    container.appendChild(square);
}
function setRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}
function setColor(element){
    const color  = setRandomColor();
    element.style.background= color;
    element.style.boxShadow = '0 0 2px ${color} ,0 0 10px ${color} '


}
function removeColor(element){
    element.style.background= '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}
