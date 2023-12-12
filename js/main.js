// scroll to section
let menuLink = document.querySelectorAll('.header__menu-list__item-link');
menuLink.forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href),
            elementPosition = scrollTarget.getBoundingClientRect().top,
            offsetPosition = elementPosition;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});


// hamburger
let hamburger = document.querySelector('.menu-toggle'),
    menu = document.querySelector('.header__menu');

 
function hambWork (){
  if(hamburger.classList.contains('open')) {
    hamburger.classList.remove('open');
    menu.classList.remove('active')
  } else {
    hamburger.classList.add('open');
    menu.classList.add('active');
  }
}

hamburger.addEventListener('click', () => {hambWork ()});

let menuLinks = document.querySelector('.header__menu-list');

menuLinks.addEventListener('click', () => {hambWork ()});



// animation light
const light = document.querySelector('.about__table-light');

function animatedLight(duration) {
  light.style.setProperty('animation-duration', duration +'s');
}

function changeAnimationTime() {
  const animationDuration = Math.random();
  animatedLight(animationDuration);
}

setInterval(changeAnimationTime, 500);


// // checkbox
// const checkDes = document.getElementById('checkbox__design'),
//       checkDev = document.getElementById('checkbox__develop'),
//       portfolioWrapper = document.querySelectorAll('.portfolio__wrapper')

// checkDes.addEventListener('click', function(){
//   checkDev.classList.remove('active');
//   checkDes.classList.add('active');
//   portfolioWrapper[0].classList.add('active');
//   portfolioWrapper[1].classList.remove('active');
// })

// checkDev.addEventListener('click', function(){
//   checkDes.classList.remove('active');
//   checkDev.classList.add('active');
//   portfolioWrapper[0].classList.remove('active');
//   portfolioWrapper[1].classList.add('active');

// })


// slider
let dots = document.querySelectorAll('.dots__item'),
    textContent = document.querySelectorAll('.content-text__description'),
    sliderItems = document.querySelectorAll('.slide__item');

    


Array.prototype.forEach.call(dots, function(item) {
  item.addEventListener('click', function() {
    
    let indexItem = Array.prototype.indexOf.call(dots, this)

    for(i=0; i<dots.length; i++) {
      dots[i].classList.remove('active')
      textContent[i].classList.remove('active')
      sliderItems[i].classList.remove('slide__first', 'slide__second', 'slide__third')
    }

    this.classList.add('active')
    textContent[indexItem].classList.add('active')
    sliderItems[indexItem].classList.add('slide__first')
    sliderItems[indexItem+1].classList.add('slide__second')
    sliderItems[indexItem+2].classList.add('slide__third')
    
  });
});


// document.addEventListener('DOMContentLoaded', () => {


//   const slider = document.querySelector('.portfolio__content-works');
//   const $ = selector => {
//     return document.querySelector(selector);
//   };
  
//   slider.addEventListener('click', (event) => {
//       const target = event.target;   
//       let src;
      
//       if(target.classList.contains('slide__second')) {
//         src = $('.slide__first').src;
//         $('.slide__first').remove();
        
//         $('.slide__second').classList.add('slide__first');
//         $('.slide__second').classList.remove('slide__second');
          
//         $('.slide__third').classList.add('slide__second');
//         $('.slide__third').classList.remove('slide__third');

//         let addedEl = document.createElement("img");
//         addedEl.src = src;
  
//         $('.portfolio__content-works').insertBefore(addedEl, $('.portfolio__content-works').lastChild);
//         addedEl.classList.add('slide__item', 'slide__third', 'slide__new');      
//         slideTextNext();
//       }

//   })
// });








