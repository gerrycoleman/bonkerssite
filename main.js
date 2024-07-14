document.addEventListener('DOMContentLoaded', function() {
 const menuOpen = document.querySelector('.menu-open');
 const menuClose = document.querySelector('.menu-close');
 const navUl = document.querySelector('nav ul');

 menuOpen.addEventListener('click', function() {
  navUl.classList.add('open');
 });

 menuClose.addEventListener('click', function() {
  navUl.classList.remove('open');
 });
});