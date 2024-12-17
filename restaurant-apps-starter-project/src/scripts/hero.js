const hero = document.querySelector('.hero');
const mediaQuery = window.matchMedia('(max-width: 600px)');

const regulatingHero = ()=>{
  if (mediaQuery.matches){
    hero.style.backgroundImage= "url('/images/hero-image_4-small.jpg')";
  } else {
    hero.style.backgroundImage= "url('/images/hero-image_4-large.jpg')";
  }
};
mediaQuery.addListener(regulatingHero);