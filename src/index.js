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

// keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 5) {
        document.body.innerHTML = 'You Deleted EVERYTHING!';
    }
})

//mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt;
    // console.log(`mouse cursor is at ${clientX}, ${clientY}`);
})

//mouseenter
const destinations = document.querySelectorAll('.destination');
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold';
    })
//mouseleave
destination.addEventListener('mouseleave', () => {
    destination.style.fontWeight = 'initial';
})
}

}