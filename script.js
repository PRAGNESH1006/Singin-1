const wraper = document.querySelector('.wraper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');

const iconclose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
     wraper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wraper.classList.remove('active');
});

btnpopup.addEventListener('click',()=>{
    wraper.classList.add('active-popup');
});

iconclose.addEventListener('click',()=>{
    wraper.classList.remove('active-popup');
});


