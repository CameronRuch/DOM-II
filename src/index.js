import './less/index.less'

// Your code goes here!


// load
window.onload = function (evt) {
    const heading = document.querySelector('h1');
    heading.textContent = 'All Aboard the Fun Bus!';

// copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text;
            })
    })

// click

document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('dup');

})

// dblclick

document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = [];

})



}