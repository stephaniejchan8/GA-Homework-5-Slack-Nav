// ------- SIDE MENU -------

// Create DOM variables for side menu
const hamburgerMenu = document.querySelector('#menu-trigger');
const sideMenu = document.querySelector('#side-menu');

// Create click and enter/space key event for hamburger menu
hamburgerMenu.addEventListener("click", sideMenuToggle);
hamburgerMenu.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
    sideMenuToggle();
  }
});

// Create function to make side menu appear
function sideMenuToggle() {
  sideMenu.classList.toggle('show-menu');
}

// Create DOM variables for close side menu
const menuClose = document.querySelector('#menu-close');

// Close menu if cross is clicked or interacted with enter/space key
menuClose.addEventListener('click', sideMenuToggle);
menuClose.addEventListener('keyup', function (e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
  sideMenuToggle();
  }
});

// ------- NAV BAR -------

// Create DOM variables for nav bar

const menuButton = document.querySelectorAll('.nav li');

const dropdownMenu = document.querySelectorAll('aside.dropdown-menu');

const offNav = document.querySelector('.nav-right');

const logo = document.querySelector('.logo');

// Loop to reveal dropdown 

for (let i = 0; i < dropdownMenu.length; i++) {

  // Function to show dropdown
  function showDropdown() {
    dropdownMenu[i].classList.add('show');
    for (let k = 0; k < dropdownMenu.length; k++) {
      if (k != i) {
        hideDropdown(k);
      }
    }
  }

  // Function to hide dropdown
  function hideDropdown(num) {
    dropdownMenu[num].classList.remove('show');
  }

  function hideDropdownAll() {
    for (let j = 0; j < dropdownMenu.length; j++) {
      dropdownMenu[i].classList.remove('show');
    }
  }

  // Run showDropdown function when mouse is over main nav or its dropdown
  menuButton[i].addEventListener('mouseover', showDropdown);
  dropdownMenu[i].addEventListener('mouseover', showDropdown);

  // Run hideDropdown function when mouse leaves the dropdown

  dropdownMenu[i].addEventListener('mouseleave', function () {
    hideDropdown(i);
    menuButton[3].addEventListener('mouseover', hideDropdownAll);
    offNav.addEventListener('mouseover', hideDropdownAll);
    logo.addEventListener('mouseover', hideDropdownAll);
  });
}
