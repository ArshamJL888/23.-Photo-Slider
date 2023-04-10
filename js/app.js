
// Define & Initiallize 
let imageArray = ['images/city.jpg', 'images/1.jpg', 'images/2.png', 'images/3.jpg', 'images/free.jpg'];
let imgElem = document.querySelector('img');
let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let index = 0;
imgElem.src = imageArray[index];
// Events
previousBtn.addEventListener('click', previousImgHandler);
nextBtn.addEventListener('click', nextImgHandler);

// Functions
function previousImgHandler() {
    index--;
    if (index < 0) {
        index = imageArray.length - 1;
    }
    imgElem.style.display = 'none';
    setTimeout(function() {
        imgElem.src = imageArray[index];
    }, 200)
    imgElem.style.display = 'block';
}

function nextImgHandler() {
    index++;
    if (index > imageArray.length - 1) {
        index = 0;
    }
    imgElem.style.display = 'none';
    setTimeout(function() {
        imgElem.src = imageArray[index];
    }, 200)
    imgElem.style.display = 'block';
}

setInterval(nextImgHandler, 3000);