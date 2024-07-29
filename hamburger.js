const menu = document.getElementById('bar');
const nav = document.querySelector('.icons-section');
const botNav = document.querySelector('.bottom-header');
const close = document.getElementById('close');

menu.addEventListener('click', () =>{
  nav.classList.add('active');
  botNav.classList.add('active')
});

close.addEventListener('click', () =>{
  nav.classList.remove('active');
  botNav.classList.remove('active');
})