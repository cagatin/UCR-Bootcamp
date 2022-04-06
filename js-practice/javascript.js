//Selecting the box / buttons
const box = document.querySelector('#box');
const growBtn = document.querySelector('#button1');
const blueBtn = document.querySelector('#button2');
const fadeBtn = document.querySelector('#button3');
const resetBtn = document.querySelector('#button4');

//default style of the box
const defaultStyle = "height:150px; width:150px; background-color:orange; margin:25px";

//Add functionality to the grow button
growBtn.addEventListener('click', function () {
    box.style.height = "350px";
    box.style.width = "350px";
});

//Add functionality to the blue button
blueBtn.addEventListener('click', function () {
    box.style.backgroundColor = 'blue';
})

//Add funcitonality to the fadebutton
fadeBtn.addEventListener('click', function () {
    box.style.opacity = "0.33";
});

//Add functionality to the resetBtn
resetBtn.addEventListener('click', function () {
    box.style = '';
    box.style = defaultStyle;
})