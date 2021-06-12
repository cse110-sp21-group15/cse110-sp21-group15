// script.js

import { router } from './router.js';

const homeButton = document.getElementById('home-button');
const logoButton = document.querySelector('nav > button');
const featuresButton = document.getElementById('features-button');
const downloadButton = document.getElementById('download-button');
const menuButton = document.getElementById('menu-button');
const navigationButtonList = document.getElementById('navigation-items');

// When the back button is hit, set the state with the new page
window.addEventListener('popstate', e => {
  if (e.state?.page && e.state.page.startsWith('features')) {
    router.setState('features', true);
  } else {
    router.setState(e.state?.page, true);
  }
});

// Go to home page when home-button is clicked
homeButton.addEventListener('click', () => {
  window.scroll(0,0);
  router.setState('', false); // home state needs to be blank by default
  hideMenuOptionsAfterClickingButtonIfMenuOpen()
});

// Go to home page when the logo is clicked
logoButton.addEventListener('click', () => {
  window.scroll(0,0);
  router.setState('', false); // home state needs to be blank by default
  hideMenuOptionsAfterClickingButtonIfMenuOpen()
});

// Go to features page when features-button is clicked
featuresButton.addEventListener('click', () => {
  window.scroll(0,0);
  router.setState('features', false);
  hideMenuOptionsAfterClickingButtonIfMenuOpen()
});

// Go to features page when features-button is clicked
downloadButton.addEventListener('click', () => {
  window.scroll(0,0);
  router.setState('download', false);
  hideMenuOptionsAfterClickingButtonIfMenuOpen()
});

// Go to features page when features-button is clicked
menuButton.addEventListener('click', () => {
  window.scroll(0,0);
  navigationButtonList.classList.toggle("navigation-items-active");
  navigationButtonList.classList.toggle("navigation-items-inactive");
});

function hideMenuOptionsAfterClickingButtonIfMenuOpen() {
  navigationButtonList.classList.remove("navigation-items-active");
  navigationButtonList.classList.add("navigation-items-inactive");
}

// Go to settings page when settings button is clicked
// settings.addEventListener('click', () => {
//   router.setState('settings', false);
// });

// document.addEventListener('DOMContentLoaded', () => {
//   fetch('https://cse110lab6.herokuapp.com/entries')
//     .then(response => response.json())
//     .then(entries => {
//       entries.forEach(entry => {
//         let newPost = document.createElement('journal-entry');
//         newPost.entry = entry;
//         newPost.addEventListener('click', () => {
//           let numEntry = Array.from(document.querySelector('main').childNodes).indexOf(newPost);
//           router.setState('entry', false, numEntry + 1);
//         });
//         document.querySelector('main').appendChild(newPost);
//       });
//     });
// });
