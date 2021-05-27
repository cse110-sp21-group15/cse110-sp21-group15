// script.js

import { router } from './router.js';

const homeButton = document.getElementById('home-button');
const logoButton = document.querySelector('nav > button');
const featuresButton = document.getElementById('features-button');
const downloadButton = document.getElementById('download-button');

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
  console.log("Home clicked");
  router.setState('', false); // home state needs to be blank by default
});

// Go to home page when the logo is clicked
logoButton.addEventListener('click', () => {
  console.log("Logo clicked");
  router.setState('', false); // home state needs to be blank by default
});

// Go to features page when features-button is clicked
featuresButton.addEventListener('click', () => {
  console.log("Features clicked");
  router.setState('features', false);
});

// Go to features page when features-button is clicked
downloadButton.addEventListener('click', () => {
  console.log("Features clicked");
  router.setState('download', false);
});

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
