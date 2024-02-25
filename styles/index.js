let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelector(`header nav a[href='#${id}']`).classList.add('active')
    }
  })
}

document.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

function scrollToSection(sectionId) {
  let targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    let targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// toggle menu

let menu = document.getElementById('menu')

function toggleMenu() {
  menu.classList.toggle('openMenu');
  showMenu();
}

// hide and show menu

function showMenu(){
  let nav = document.getElementById('nav')

  if(nav.style.display === 'flex'){
    nav.style.display = 'none';
  }else{
    nav.style.display = 'flex';
  }
}

function showSettings(){
  let sett = document.getElementById('settings')

  if(sett.style.display === 'flex'){
    sett.style.display = 'none'
  }else{
    sett.style.display = 'flex'
  }
}

function showEditProfile(){
  let profile = document.getElementById('myAccountModal')

  if(profile.style.display === 'flex'){
    profile.style.display = 'none'
  }else{
    profile.style.display = 'flex'
  }
}

// dashboard menu actions
const dashMenu = document.querySelector('.menu')
const dashSidebar = document.querySelector('.AdminPanelWraper')

dashMenu.addEventListener('click', ()=>{
  dashMenu.classList.toggle('active')
  dashSidebar.classList.toggle('active')
})