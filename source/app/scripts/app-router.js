/* eslint-disable default-case */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-shadow */
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
    console.log(state);
  const strState = state.split(';');
  console.log(strState);


  switch (strState[0]) {
    case 'daily-log':
        console.log('ONE');
      dailyLog(strState[1]);
      break;
    case 'monthly-log':
        console.log('TWO');
      monthlyLog();
      break;
    case 'future-log':
        console.log('THREE');
      futureLog();
      break;
  }

  // Two states pushed to history consecutively can't be the same otherwise clicking the back and forward
  // buttons to the browser appear appear to not do anything
  if (!statePopped && window.location.hash != `#${state}`) {
    // console.log(`${state} pushed to history`);
    // console.log(`statePopped: ${statePopped}`);
    // console.log(`window.location.hash: ${window.location.hash}`);
    // console.log(`#${state}`);
    // console.log(`!statePopped: ${!statePopped}`);
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
function dailyLog(date) {
  // Remove all children of <main>
  console.log('DAILY LOG CALLED');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  // If visiting the home page, add the home component
  if (date) {
    console.log(`HERES THE DATE: ${date}`);
    const dailyLog = document.createElement('daily-log-component');
    // dailyLog.setAttribute('date', date);
    dailyLog.date = date;
    console.log(dailyLog);
    main.appendChild(dailyLog);
  }
}

function monthlyLog() {
  console.log('DAILY LOG CALLED');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const monthlyLog = document.createElement('monthly-log-component');
  main.appendChild(monthlyLog);
}

function futureLog() {
  console.log('FUTURE LOG CALLED');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const futureLog = document.createElement('future-overview-page');
  main.appendChild(futureLog);
}

/**
 * Push a new state to the history stack
 * @param {string} state The new page to set the state of
*/
export function pushToHistory(state) {
  switch (state) {
    case 'features':
    default:
      history.pushState({}, '', './');
  }
  return history;
}
