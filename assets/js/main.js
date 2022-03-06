// Grab elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if (element) return element;
  throw new Error('Something went, make sure that ${selector} exists or is typed correctly.');
};


//Nav styles on scroll
const scrollHeader = () => {
  const navbarElement = selectElement('#header');
  if (this.scrollY >= 15) {
    navbarElement.classList.add('activated');
  } else {
    navbarElement.classList.remove('activated');
   }
};

window.addEventListener('scroll', scrollHeader);

// Open menu 
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);


// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');



if (currentTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    bodyElement.classList.toggle('light-theme');

    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Swiper