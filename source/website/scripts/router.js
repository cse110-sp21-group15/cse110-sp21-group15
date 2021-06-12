/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// router.js
export const router = {};

const { body } = document;
const main = document.querySelector('main');

/**
 * Set the state for the new page
 * @param {string} state The new page to set the state of
 * @param {boolean} statePopped If the request came from a popstate event
 * @param {number} entryNum if state is 'entry', then entryNum is the num
 */
router.setState = (state, statePopped) => {
  switch (state) {
    case 'features':
      homePage(false); // homePage(false) needs to come first since it recursively deletes any elements in <main>
      featuresPage(true); // then featuresPage can be added to <main>
      break;
    case 'download':
      homePage(false); // clear out <main>
      downloadPage(true);
      break;
    default:
      homePage(true);
  }

  // Two states pushed to history consecutively can't be the same otherwise clicking the back and forward
  // buttons to the browser appear appear to not do anything
  if (!statePopped && window.location.hash != `#${state}`) {
    console.log(`${state} pushed to history`);
    console.log(`statePopped: ${statePopped}`);
    console.log(`window.location.hash: ${window.location.hash}`);
    console.log(`#${state}`);
    console.log(`!statePopped: ${!statePopped}`);

    // Don't push the home page to history multiple times.
    // An empty state indicates is for the home page
    if (state === '' && window.location.hash === '') {
      return;
    }

    pushToHistory(state);
  }
};
/**
 * @param {boolean} goTo true if you are going to this page, false if unsetting the page
 */
function homePage(goTo) {
  // Remove all children of <main>
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  // If visiting the home page, add the home component
  if (goTo) {
    // TODO replace createElement('p') with home page component
    const homePage = document.createElement('landing-page');
    main.appendChild(homePage);
  }
}

/**
 * @param {boolean} goTo true if you are going to this page, false if unsetting the page
 */
function featuresPage(goTo) {
  if (goTo) {
    const featurePage = document.createElement('feature-page');
    main.appendChild(featurePage);
  } else if (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

/**
 *
 * @param {boolean} goTo  true if you are going to this page, false if unsetting the page
 */
function downloadPage(goTo) {
  if (goTo) {
    const downloadPage = document.createElement('download-page');
    main.appendChild(downloadPage);
  } else if (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

/**
 * Push a new state to the history stack
 * @param {string} state The new page to set the state of
*/
export function pushToHistory(state) {
  switch (state) {
    case 'features':
      history.pushState({ page: 'features' }, '', './#features');
      break;
    case 'download':
      history.pushState({ page: 'download' }, '', './#download');
      break;
    default:
      history.pushState({}, '', './');
  }
  return history;
}
