import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './hero';

document.querySelectorAll('a, button, input').forEach((e) =>{
  if (e.offsetWidth < 44 || e.offsetHeight < 44){
    console.log(e);
  };
});

const app = new App({
  hamburger: document.querySelector('.hamburger'),
  nav: document.querySelector('nav'),
  main: document.querySelector('.content'),
});

window.addEventListener('hashchange', ()=>{
  app.renderPage();
});

window.addEventListener('load', ()=>{
  app.renderPage();
  swRegister();
});