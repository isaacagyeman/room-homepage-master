# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- 
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)
-



## Overview
This is a challenge from frontendmentor.io. It is  kind of landing page for a furniture store site. frontend

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](/assets/Screenshot%20Frontend%20Mentor%20Room%20homepage.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)



### Built with

- HTML5 markup
- CSS properties
- Mobile-first workflow
- CSS flexbox

### What I learned
I learned how to use the flex to make awesome layouts and how to use simple javascript functions to integrate interactivity to the buttons.
```js
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

```

### Continued development

I would like to get familiar with the css grid design so that I can make nice layouts with that too. and how to make the pages responsive properly. ):

### Useful resources

- [w3Schools](https://www.w3Schools.com) - This site helped me to understand the slides and how to create one myself. I really liked this resource and will use it going forward.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/isaacagyeman)
- Twitter - [@yourusername](https://www.twitter.com/isaacagyeman17)
