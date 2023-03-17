//Event Handler Properties
let fname = document.getElementById('fname');
fname.onfocus = function() {
    fname.style.backgroundColor = 'pink';
}

fname.onblur = function() {
    fname.style.backgroundColor = 'white';
}

let h5 = document.getElementById('register');
h5.onmouseover = function() {
    h5.style.color = 'red';
}

h5.onmouseout = function() {
    h5.style.color = 'black';
}

//add Event Listener Method
function displayAlert() {
    alert('You clicked on submit button');

}
document.getElementById('btn')
    .addEventlistener('click', displayAlert)