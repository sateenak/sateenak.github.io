window.addEventListener('load', function () {
  const loader = document.querySelector('.block-load');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 400);
  // nav 3 lines animation
  const nav_button = document.querySelector('.nav-button');
  const nav = document.querySelector('nav');
  nav_button.addEventListener('click', function () {
    nav.classList.toggle('hidden');
    nav_button.classList.toggle('nav-active');
  });

  //Blur navbar scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', function () {
    if (this.scrollY > 1) {
      header.classList.add('navbar-scroll');
    } else {
      header.classList.remove('navbar-scroll');
    }
  });
  // search button
  const search_box = document.querySelector('.search-box');
  const search_button = document.querySelector('.search-button');
  const cancel_button = document.querySelector('.cancel-button');
  search_button.addEventListener('click', function () {
    search_box.classList.add('search-active');
  });

  cancel_button.addEventListener('click', function () {
    search_box.classList.remove('search-active');
  });
  // announcement
  const announce = document.getElementById('announce');
  const announce_button = document.getElementById('announce-button');
  announce_button.addEventListener('click', function () {
    announce.classList.remove('lg:block');
  });
});
