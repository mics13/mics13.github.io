// Hamburger Icon transform
const toggleButton = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');
const nav6 = document.querySelector('#nav-6');
const navItems = [nav1, nav2, nav3, nav4, nav5, nav6];

function navAnimationControl(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    console.log(nav);
  });
}

function toggleNav() {
  toggleButton.classList.toggle('change');
  // toggle menu
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // animate in overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
    // animate in nav items
    navAnimationControl('out', 'in');

  } else {
    // animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
    navAnimationControl('in', 'out');
  }
}

toggleButton.addEventListener('click', toggleNav);
navItems.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});