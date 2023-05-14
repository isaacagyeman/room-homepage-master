const navBar = document.querySelector('.navBar')
const hamburgerMenu = document.querySelector('#menuIcon')
const logo = document.querySelector('#Logo')
const btnMenuClose = document.querySelector('#btnCloseMenu')
const imgSlides = document.getElementsByClassName('slide')
const headmessageslides = document.getElementsByClassName('headingMessage')
const messageslides = document.getElementsByClassName('mainMessage')


let initialIndex = 1;

showSlides(initialIndex);

function nextSlide(n){
    showSlides(initialIndex += n)
}


function showSlides(n){
    let i;
    if(n > imgSlides.length){
        initialIndex = 1;
    }
    if(n < 1){
        initialIndex = imgSlides.length
    }
   for(i = 0; i < imgSlides.length; i++){
    imgSlides[i].style.display = 'none';
    headmessageslides[i].style.display = 'none';
    messageslides[i].style.display = 'none';
   }
   imgSlides[initialIndex - 1].style.display = 'block'
   headmessageslides[initialIndex - 1].style.display = 'block'
   messageslides[initialIndex - 1].style.display = 'block'

}

    hamburgerMenu.addEventListener('click', ()=>{
 
    })
    
    btnMenuClose.addEventListener('click', ()=>{
  
    })