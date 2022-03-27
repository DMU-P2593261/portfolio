/*Main Function*/
const burgerAnimation = () => { /*creates a function which is equal to an anonymous function*/
  const burger = document.querySelector('.burgerMenu'); /*creates a variable to store a reference to the elemenet within the burger class*/
  const nav = document.querySelector('.nav-links'); /*creates a variable to store a reference to the elemenet within the nav class*/
  const navLinks = document.querySelectorAll('.nav-links li'); /*creates a variable to store a reference to all elemenets that match nav-links li*/



burger.addEventListener('click',()=>{ /*creates an on-click eventListener for the burger function*/
  /*Burger Menu Toggle*/
  nav.classList.toggle('burgerOpen'); /*allows the nav menu to open and close accordingly relating to its current position on the page, this */


  /*Link Animation*/
    navLinks.forEach((link, index)=>{ /*for each nav link it creates a loop which checks whether it has animated or not. If it has then it will not animate, if it hasn't then it will animate.*/
      if(link.style.animation){ /*this code says that if the links contain an animation, it must not animate, and if it does not have an animation or has not animated then it must animate */
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 + 0.5}s`;
      }
    });


      /*Burger Animation*/
      burger.classList.toggle('toggle');
  });
}


/*Function Invoker*/
burgerAnimation(); /*this invokes the burgerAnimation function*/
