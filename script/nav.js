const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    console.log('1');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
