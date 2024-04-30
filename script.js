let gearImg = document.querySelector('#gearImg')
let gearImgWidth = '';

window.addEventListener('resize', function() {
    gearImgWidth = gearImg.width
    console.log(gearImgWidth);
})

function rotate() {
   let scrollLength = document.body.scrollTop;
   let imgRadius = gearImgWidth / 2
   let theta = (scrollLength / imgRadius) * (180 / Math.PI);
   gearImg.style.transform = `rotate(${theta}deg)`;
}

// Define the scroll event listener function
function handleScroll() {
    console.log('YOURE SCROLLINGGGGG');
}

// Add the scroll event listener to the window
document.addEventListener('scroll', handleScroll);
