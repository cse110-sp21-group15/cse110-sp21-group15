class MenuComponent extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                @font-face {
                    font-family: "Amaranth";
                    src: url(./Amaranth/Amaranth-Regular.ttf) format("truetype")
                }
                @font-face {
                    font-family: "Mulish";
                    src: url(./Mulish/static/Mulish-Regular.ttf) format("truetype")
                }

                .hamburger-button {
                    /* Remove default styling */
                    background: none;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    outline: inherit;

                    position: fixed;
                    width: 60px;
                    height: 60px;
                }
                #closed {
                    z-index: 99;
                    left: 1rem;
                }
                .ham {
                    transition: fill 0.5s
                }
                .ham:hover {
                    fill: #4aa3e3;
                }

                @media (min-width: 1345px) {
                    .menu-window {
                        position: fixed;
                        z-index: 100;
                        width: 20%;
                        height: 100%;
                        top:0;
                        background-color: #ffffff;
                        // box-shadow: 2px 0 0 #555555;
                        transform: translateX(-101%);
                        transition: transform 0.5s;
                        padding-left: 2.5%;
                        padding-right: 2.5%;
                    }
                    #open {
                        z-index: 101;
                        top: 0;
                        right: 1rem;
                        position: absolute;
                    }
                }
                @media (max-width: 1344px) {
                    .menu-window {
                        position: fixed;
                        z-index: 100;
                        width: 100%;
                        height: 100%;
                        top:0;
                        background-color: #ffffff;
                        transform: translateX(-101%);
                        transition: transform 0.5s;
                        padding-left: 2.5rem;
                        padding-right: 2.5rem;
                    }
                    #open {
                        z-index: 101;
                        top: 0;
                        right: 6rem;
                        position: absolute;
                    }
                }
                @media (max-height: 630px) {
                    .menu-window {
                        overflow-y: scroll;
                    }
                }
                .showMenu {
                    transform: translateX(0);
                }

                .menu-title {
                    font-family: "Amaranth";
                    font-weight: bold;
                    font-size: 44px;
                    color: #344FA1;
                    position: absolute;
                    top: 0;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }

                .menu-contents {
                    list-style: none;
                    font-family: "Amaranth";
                    font-size: 36px;
                    color: #000000;
                    margin-top: 6rem;
                    padding-left: 0;
                    margin-bottom: 1rem;
                    max-height: 75%;
                    overflow-y: scroll;
                }
                li {
                    margin-bottom: 10px;
                    transition: padding-left 0.25s
                }
                li:hover {
                    padding-left: 2%;
                }
                a {
                    text-decoration: none;
                    cursor: pointer;
                    transition: color 0.5s;
                }
                .future-log a, .monthly-log a, .custom-log a {
                    color: #000000;
                }
                .future-log a:hover, .monthly-log a:hover {
                    color: #344FA1;
                }
                .custom-log a:hover {
                    color: #3D84B8;
                }
                a:visited {
                    color: #000000;
                }
                
                .dropdown-button {
                    /* Remove default styling */
                    background: none;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    outline: inherit;

                    width: 24px;
                    height: 24px;
                    transition: margin-right 0.25s, transform 0.25s;
                    transform: rotate(0deg);
                }
                .dropdown-button:hover {
                    margin-right: 2%;
                }
                .dropdown-button svg {
                    pointer-events: none;
                }
                .dropped button {
                    transform: rotate(90deg);
                }
                
                .daily-list {
                    transition: max-height 0.25s;
                    max-height: 0;
                    overflow: hidden;
                    list-style: none;
                }

                .daily-log a {
                    font-size: 24px;
                    color: #555555;
                }
                .daily-log a:hover {
                    color: #888888;
                }

                .new-collection {
                    font-family: "Mulish";
                    font-weight: bold;
                    font-size: 18px;
                    text-align: center;
                    letter-spacing: -0.015em;
                    color: #F0EBCC;
                    background-color: #344FA1;
                    border-radius: 5px;
                    padding-left: 44px;
                    padding-right: 44px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    width: 100%
                    cursor: pointer;
                    border: none;
                    outline: inherit;
                    cursor: pointer;
                    transition: background-color 0.5s;
                }
                .new-collection:hover {
                    color: #fffbe3;
                    background-color: #5f52d8;
                }
                .new-collection:active {
                    color: #fffbe3;
                    background-color: #5f52d8;
                }
            </style>
    
            <section class="menu-hamburger">
                <button class="hamburger-button" id="closed" type="button"><svg class="ham" width="100%" height="100%" viewBox="0 0 157 84" fill="#3d84b8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 13.0625 C 0 5.8483 4.2533 0 9.5 0 L 147.5 0 C 152.747 0 157 5.8483 157 13.0625 V 13.0625 C 157 20.2767 152.747 26.125 147.5 26.125 L 9.5 
                    26.125 C 4.2533 26.125 0 20.2767 0 13.0625 V 13.0625 Z M 0 57.75 C 0 50.9155 4.0294 45.375 9 45.375 L 148 45.375 C 152.971 45.375 157 50.9155 157 57.75 
                    V 57.75 C 157 64.5845 152.971 70.125 148 70.125 L 9 70.125 C 4.0294 70.125 0 64.5845 0 57.75 V 57.75 Z M 0 102.4375 C 0 95.2233 4.2533 89.375 9.5 89.375 
                    L 147.5 89.375 C 152.747 89.375 157 95.2233 157 102.4375 V 102.4375 C 157 109.6517 152.747 115.5 147.5 115.5 H 9.5 C 4.2533 115.5 0 109.6517 0 102.4375 
                    V 102.4375 Z"/>
                    </svg></button>
            </section>
            <section class="menu-window">
                <button class="hamburger-button" id="open" type="button"><svg class="ham" width="100%" height="100%" viewBox="0 0 157 84" fill="#3d84b8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 13.0625 C 0 5.8483 4.2533 0 9.5 0 L 147.5 0 C 152.747 0 157 5.8483 157 13.0625 V 13.0625 C 157 20.2767 152.747 26.125 147.5 26.125 L 9.5 
                    26.125 C 4.2533 26.125 0 20.2767 0 13.0625 V 13.0625 Z M 0 57.75 C 0 50.9155 4.0294 45.375 9 45.375 L 148 45.375 C 152.971 45.375 157 50.9155 157 57.75 
                    V 57.75 C 157 64.5845 152.971 70.125 148 70.125 L 9 70.125 C 4.0294 70.125 0 64.5845 0 57.75 V 57.75 Z M 0 102.4375 C 0 95.2233 4.2533 89.375 9.5 89.375 
                    L 147.5 89.375 C 152.747 89.375 157 95.2233 157 102.4375 V 102.4375 C 157 109.6517 152.747 115.5 147.5 115.5 H 9.5 C 4.2533 115.5 0 109.6517 0 102.4375 
                    V 102.4375 Z"/>
                    </svg></button>
                <h1 class="menu-title">Collections</h1>
                <ul class="menu-contents">
                    <li class="future-log"><a>Future Log</a></li>
                </ul>
                <button class="new-collection" type="button">+ Custom Collection</button>
                </section>
            </section>
            `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const menu = this.shadowRoot.querySelector('.menu-window');
        const menuList = this.shadowRoot.querySelector('.menu-contents');

        function toggleMenu() {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
              } else {
                menu.classList.add("showMenu");
            }
        }

        // click listeners
        this.shadowRoot.addEventListener('click', event => {
            if (event.target.closest('#closed') || event.target.closest('#open')) { // open/close hamburger menu
                toggleMenu();
            }
            else if (event.target.matches('.dropdown-button')) {    // open/close dropdown menu
                let par = event.target.parentElement;
                let daily = par.querySelector('.daily-list');
                if (event.target.parentElement.classList.contains("dropped")) {
                    event.target.parentElement.classList.remove("dropped");
                    daily.style.maxHeight = "0px";
                } else {
                    event.target.parentElement.classList.add("dropped");
                    daily.style.maxHeight = daily.scrollHeight + "px";
                }
            }
            else if (event.target.matches('.new-collection')) {     // go to new collection page
                // TODO: Route to new collection creation page in the SPA
            }
            // TODO: Route to respective page upon clicking a collection/log in the menu
        }, false);

        // get local date/time to populate the menu
        const dateObj = new Date();
        const month = dateObj.getMonth(); // january = 0, ..., december = 11
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // create the month list with its dropdowns starting from january and ending on the current day in the current month
        for (let i = month; i >= 0; i--) {   // iterate through each month starting from the current month

            let monthLog = document.createElement('li');    // overall list element
            monthLog.classList.add("monthly-log");

            let dropButton = document.createElement('button');  // dropdown button
            monthLog.appendChild(dropButton);
            dropButton.outerHTML = "<button class='dropdown-button' type='button'><svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 24 24' width='100%' fill='#000000'>"
                                    + "<path d='M0 0h24v24H0V0z' fill='none'/><path d='M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 "
                                    + "0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z'/></svg></button>";

            let monthText = document.createElement('a');    // month text/link
            monthText.innerHTML = months[i];
            monthLog.appendChild(monthText);

            let dailyList = document.createElement('ul');   // daily log list dropdown
            dailyList.classList.add("daily-list");

            let numDays = daysInMonth(i, year);

            for (let j = 1; j <= numDays; j++) {    // iterate through all days in the month
                let dailyLog = document.createElement('li');    // daily logs
                dailyList.appendChild(dailyLog);
                dailyLog.outerHTML = "<li class='daily-log'><a>" + (i+1) + "/" + j + "/" + year + "</a></li></ul>";    // month/day/year
                if (i == month && j == day) {    // stop populating after hitting today
                    break;
                }
            }
            monthLog.appendChild(dailyList);
            menuList.appendChild(monthLog);
            
            if (i == month) {   // current month = dropdown is active by default
                monthLog.classList.add("dropped");
                dailyList.style.maxHeight = dailyList.scrollHeight + "px";
            }

            /* HTML representation:
            <li class="monthly-log"><button class="dropdown-button" type="button"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" width="100%" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 
                0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg></button>
                <a>January</a>
                <ul class="daily-list">
                    <li class="daily-log"><a>1/1/2021</a></li>
                </ul>
            </li>
            */
        }

        function daysInMonth(month, year) {
            return new Date(year, month+1, 0).getDate();
        }

    }
    
    // managing/populating custom collections
    get collections() { // get all the custom collection representations in an object
        let customCollections = this.shadowRoot.querySelectorAll('.custom-log a');
        let collectionsObj = {};
        let collectionNum = 0;

        customCollections.forEach((entry) => {
            let entryObj = {
                'title': entry.innerText,               // name/title of custom collection
                'state': entry.getAttribute('state')    // state of collection to route to
                // TODO: Work out routing states for custom collections to finalize object format
            };
            collectionsObj["collection-"+collectionNum] = entryObj;
            collectionNum++;
        });

        return collectionsObj;
    }
        
    set collections(entries) {  // create all custom collections and add to menu based on the given object 
        let customCollections = this.shadowRoot.querySelectorAll('.custom-log a');
        customCollections.forEach((entry) => {  // clear existing collection displays
            entry.remove();
        });
        for (let key in entries) {
            if (entries.hasOwnProperty(key) && entries[key].hasOwnProperty('title') && entries[key].hasOwnProperty('state')) {  // checks for valid entry objects
                // add custom collection to the menu
                let customLog = document.createElement('li');
                customLog.classList.add("custom-log");

                let customLogTitle = document.createElement('a');
                customLogTitle.innerHTML = entries[key].title;
                customLogTitle.setAttribute('state', entries[key].state);
                
                customLog.appendChild(customLogTitle);
                this.shadowRoot.querySelector('.menu-contents').appendChild(customLog);
            }
        }
    }

    /**
     * JSON Format for custom collections:
     * 
     * {
     *      'collection-0': {
     *          title: 'CSE 110',
     *          state: 'CSE 110'     // or whatever string is passed to router.setState route to the CSE 110 collection in the SPA
     *      },
     *      'collection-1': {
     *          title: 'Tutoring',
     *          state: 'Tutoring'
     *      },
     *      ...
     * }
     */

    /** 
     * Add/delete custom collections:
     * 
     *  let menu = document.querySelector('menu-component');
     *  menu.collections = { 'collection-0': { title: 'CSE 1', state: 'CSE 1' } };  // set initial collections
     *  let tempCollections = menu.collections;
     * 
     *  delete tempCollections['collection-0'];
     *  menu.collections = tempCollections;   // deletes the CSE 1 collection from the menu
     * 
     *  menu.collections = { 'collection-3': { title: 'CSE 110', state: 'CSE 110' } };
     * 
     *  tempCollections = menu.collections;   // reformats and reorders the collection keys in the object
     *  newCollections['collection-1'] = { title: 'Tutoring', state: 'Tutoring' };
     *  menu.collections = newCollections;    // adds the new Tutoring collection to the menu
     */
}

customElements.define('menu-component', MenuComponent);