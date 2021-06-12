class EntryList extends HTMLElement {
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
            ::-webkit-scrollbar {
                width: 7px;
            }
            ::-webkit-scrollbar-track {
                background: #DDDDDD; 
                border-radius: 7px;
            }
            ::-webkit-scrollbar-thumb {
                background: #3d84b8; 
                border-radius: 7px;
            }

            svg, image {
                pointer-events: none;
            }

            .entry-handler {
                padding: 1rem 1.5rem;
                min-width: 750px;
            }
            
            .entries {
                max-height: 400px;
                overflow-y: scroll;
                overflow-x: hidden;
            }
            
            .single-entry {
                position: relative;
                width: 100%;
                height: 100%;
                margin-top: 0.5rem;
                display: flex;
                flex-direction: row;
                flex-align: center;
            }

            .bullet {
                /* Remove default styling */
                background: none;
                cursor: pointer;
                border: none;
                padding: 0;
                outline: inherit;

                width: 35px;
                height: 35px;
                margin-right: 0.5rem;
                transition: width 0.25s;
            }
            .bullet:hover {
                width: 42px;
            }
            .bullet.inactive {
                pointer-events: none;
            }
            
            .single-entry input[type=date] {
                display: block;
                font-family: "Mulish";
                font-weight: bold;
                font-size: 24px;
                color: #000000;
                background: transparent;
                width: 200px;
                min-width: 200px;
                border: none;
                border-bottom: 2px solid #00000000;
                margin-right: 1rem;
                transition: border-bottom 0.25s, color 0.25s;
                overflow: hidden;
            }
            input[type=date]:hover {
                border-bottom: 2px solid #000000FF;
            }
            input[type=date]:focus {
                outline: none;
                border-bottom: 2px solid #3d84b8FF;
            }

            .single-entry span {
                width: 80%;
            }
            input[type=text] {
                font-family: "Mulish";
                font-weight: bold;
                font-size: 24px;
                width: 100%;
                color: #000000;
                background: transparent;
                border: none;
                border-bottom: 2px solid #00000000;
                transition: border-bottom 0.25s, color 0.25s;
                overflow: hidden;
            }
            input[type=text]:hover {
                border-bottom: 2px solid #000000FF;
            }
            input[type=text]:focus {
                outline: none;
                border-bottom: 2px solid #3d84b8FF;
                color: #3d84b8;
            }
            .crossout {
                pointer-events: none;
                text-decoration: line-through;
            }
            .complete {
                pointer-events: none;
                font-style: italic;
            }

            .bullet:hover:after {
                width: 100%;
                position: fixed;
                bottom: 0;
                left:0;
                background-color: #FFFFFF;
                font-family: "Mulish";
                font-weight: normal;
                font-size: 18px;
                color: #000000;
                padding: 1em;
                content: "Left Click: Toggle bullet type | Right Click: Cross/uncross out entry";
                text-align: center;
            }
            .single-entry span:hover:after {
                width: 100%;
                position: fixed;
                bottom: 0;
                left:0;
                background-color: #FFFFFF;
                font-family: "Mulish";
                font-weight: normal;
                font-size: 18px;
                color: #000000;
                padding: 1em;
                content: "Left Click: Edit entry text | Right Click: Migrate entry";
                text-align: center;
            }
            .single-entry .pill:hover:after {
                width: 100%;
                position: fixed;
                bottom: 0;
                left:0;
                background-color: #FFFFFF;
                font-family: "Mulish";
                font-weight: normal;
                font-size: 18px;
                color: #000000;
                padding: 1em;
                content: "Left Click: Go to collection | Right Click: Migrate entry";
                text-align: center;
            }

            .new-entry, .new-collection {
                font-family: "Mulish";
                font-weight: bold;
                font-size: 18px;
                text-align: center;
                letter-spacing: -0.015em;
                color: #F0EBCC;
                background-color: #344FA1;
                border-radius: 5px;
                padding: 10px 36px;
                margin-top: 0.5rem;
                width: 100%
                cursor: pointer;
                border: none;
                outline: inherit;
                cursor: pointer;
                transition: background-color 0.5s;
            }
            .new-entry:hover, .new-collection:hover {
                color: #fffbe3;
                background-color: #5f52d8;
            }

            .migrator.show {
                transform: translateX(0);
            }
            .migrator {
                display: block
                z-index: 99;
                position: fixed;
                background-color: #F0EBCC;
                border-radius: 10px;
                padding: 1rem 2rem;
                width: 30%;
                right: 0;
                bottom: 0;
                transform: translateX(100%);
                transition: transform 0.5s;
            }
            .migrator h1 {
                font-family: "Amaranth";
                font-weight: bold;
                font-size: 36px;
                color: black;
                margin: 0;
                padding: 0;
            }
            .migrator p {
                font-family: "Amaranth";
                font-size: 28px;
                color: black;
                margin: 0;
                padding: 0;
                overflow-wrap: break-word;
            }

            .collections {
                list-style: none;
                max-height: 150px;
                overflow-y: scroll;
            }
            .future, .month, .custom {
                font-family: "Mulish";
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
                padding-left: 2px;
                padding-right: 2px;
                transition: color 0.5s, margin-left 0.25s;
            }
            .collection a:hover {
                margin-left: 1rem;
            }

            .future, .month {
                color: #344FA1;
            }
            .future:hover, .month:hover {
                color: #476BD8;
            }
            .custom {
                color: #3D84B8;
            }
            .custom:hover {
                color: #4AA3E3;
            }

            .pill {
                display: inline-block;
                background-color: #FFFFFF;
                border-radius: 5px;
                font-size: 20px;
                margin: 0 2px;
            }
            .future.pill, .month.pill {
                border: solid #344FA1 3px;
                transition: color 0.5s, margin-left 0.25s, border 0.5s;
            }
            .future.pill:hover, .month.pill:hover {
                border-color: #476BD8;
            }
            .custom.pill {
                border: solid #3D84B8 3px;
                transition: color 0.5s, margin-left 0.25s, border 0.5s;
            }
            .custom.pill:hover {
                border-color: #4AA3E3;
            }

            .pills {
                right: 25px;
                position:absolute;
                max-width: 60%;
                display: block;
            }

        </style>
        <section class="entry-handler">
            <section class="entries">
            </section>
            <section class='migrator'>
                <h1>Migrate Entry</h1>
                <p>Entry Text</p>
                <ul class='collections'>
                </ul>
                <button class="new-collection" type="button">+ Custom Collection</button>
            </section>
            <button class="new-entry" type="button">+ Add</button>
        </section>
        `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const migrator = this.shadowRoot.querySelector('.migrator');
        const collectionList = migrator.querySelector('.collections');

        var attribMonth = this.getAttribute('month');
        var attribDay = this.getAttribute('day');
        var attribYear = this.getAttribute('year');
        var attribShowDate = this.getAttribute('showDate');

        const dateObj = new Date();
        this.month = (attribMonth) ? attribMonth : dateObj.getMonth(); // january = 0, ..., december = 11
        this.day = (attribDay) ? attribDay : dateObj.getDate();
        this.year = (attribYear) ? attribYear : dateObj.getFullYear();
        this.showDate = (attribShowDate) ? attribShowDate : true;

        // default migration collection creation (overwritten when this.collections is set)
        let customLog = document.createElement('li');
        collectionList.appendChild(customLog);
        customLog.outerHTML = "<li class='collection'><a class='future'>Future Log</a></li>";

        if (this.showDate) {
            customLog = document.createElement('li');
            collectionList.appendChild(customLog);
            customLog.outerHTML = "<li class='collection'><a class='month'>Next Month</a></li>";
        }

        this.shadowRoot.addEventListener('mousedown', event => {
            let clicked = event.target;
            if (clicked.closest('.migrator')) {
                event.preventDefault();
            }
        }, false);
        
        this.shadowRoot.addEventListener('click', event => {
            let clicked = event.target;
            if (!clicked.closest('.migrator') && migrator.classList.contains('show')) {
                migrator.classList.remove('show');
            }
            if (clicked.closest('.new-entry')) {   // new entry when add button is clicked
                this.newEntry("", this.showDate, this.month, this.day, this.year);
            }
            else if (clicked.closest('.bullet')) {      // toggles bullet type when clicked
                let img = clicked.querySelector('image');
                let text = clicked.parentElement.querySelector('.entry-text');
                if (img.classList.contains('task')) {
                    img.outerHTML = "<image class='x' href='./media/x-bullet.svg' width='100%' height='100%'/>";
                    text.classList.add('complete');
                }
                if (img.classList.contains('x')) {
                    img.outerHTML = "<image class='event' href='./media/event-bullet.svg' width='100%' height='100%'/>";
                    text.classList.remove('complete');
                }
                if (img.classList.contains('event')) {
                    img.outerHTML = "<image class='note' href='./media/note-bullet.svg' width='100%' height='100%'/>";
                }
                if (img.classList.contains('note')) {
                    img.outerHTML = "<image class='task' href='./media/task-bullet.svg' width='100%' height='100%'/>";
                }
            } else if (clicked.closest('.new-entry')) {   // add new entry to the list
                this.newEntry("", this.showDate, this.month, this.day, this.year);
            } else if (clicked.closest('.collection a')) {   // add pill to entry
                let active = this.shadowRoot.activeElement;
                let entry = active.parentElement.parentElement;
                let img = entry.querySelector('image');
                if (active != null) {
                    let formatted = clicked.innerHTML.replaceAll(' ', '-');
                    if (!entry.hasAttribute('collections') || entry.getAttribute('collections') == " ") { // if no collections attribute or the attribute is empty
                        entry.setAttribute('collections', formatted);
                    } else if (!entry.getAttribute('collections').split(' ').includes(formatted) && entry.getAttribute('collections').split(' ').length < 5) {  // no duplicates and max of 5 collections
                        entry.setAttribute('collections', entry.getAttribute('collections') + " " + formatted);
                    } else if (entry.getAttribute('collections').split(' ').includes(formatted)) {  // if the clicked collection exists, remove it from the attribute and the pills
                        let re = new RegExp("\\s*" + formatted + "\\s*", "g");
                        entry.setAttribute('collections', entry.getAttribute('collections').replace(re, " "));
                        entry.querySelector('#' + formatted).remove();
                        if (entry.getAttribute('collections') == " ") {
                            img.outerHTML = "<image class='" + img.getAttribute('class') + "' href='./media/" + img.getAttribute('class') + "-bullet.svg' width='100%' height='100%'/>";
                            entry.querySelector('.bullet').classList.remove('inactive');
                        }
                        return;
                    } else { return; }
                    let newPill = document.createElement('a');
                    newPill.classList.add(clicked.className);
                    newPill.classList.add('pill');
                    newPill.setAttribute('id', formatted);
                    newPill.innerHTML = clicked.innerHTML;
                    entry.querySelector('.pills').appendChild(newPill);
                    img.outerHTML = "<image class='" + img.getAttribute('class') + "' href='./media/migrate-bullet.svg' width='100%' height='100%'/>";
                    entry.querySelector('.bullet').classList.add('inactive');
                }
            } else if (clicked.closest('.pill')) {  // left clicking pill will route to respective collection
                // TODO: Add routing capabilities to pills
            } else if (clicked.closest('.new-collection')) {  // left clicking new collection will route to collection creation screen (like in menu)
                // TODO: Add routing capabilities to new collection button
            }
        });

        this.shadowRoot.addEventListener('contextmenu', event => { // right clicking the bullet toggles cross out
            let clicked = event.target;
            if (clicked.closest('.bullet')) {
                event.preventDefault();
                let text = clicked.parentElement.querySelector('.entry-text');
                if (text.classList.contains('crossout')) {
                    text.classList.remove('crossout');
                } else {
                    text.classList.add('crossout');
                }
            } else if (clicked.closest('.entry-text')) {  // right clicking entry text will trigger migration menu
                event.preventDefault();
                if (!migrator.classList.contains('show')) {
                    migrator.classList.add('show');
                }
                migrator.querySelector('p').innerHTML = "\"" + clicked.value + "\"";  // set entry text in migrator
            } else if (clicked.closest('.pill')) {  // right clicking pill will also trigger migration menu
                event.preventDefault();
                if (!migrator.classList.contains('show')) {
                    migrator.classList.add('show');
                }
                let text = clicked.parentElement.parentElement.parentElement.querySelector('.entry-text');
                migrator.querySelector('p').innerHTML = "\"" + text.value + "\"";  // set entry text in migrator
                text.focus();
            }
        }, false);
    }

    // managing/populating entries
    get entries() { // get all the entries and format in an object
        let allEntries = this.shadowRoot.querySelectorAll('.single-entry');
        let entriesObj = {};
        let entryNum = 0;

        allEntries.forEach((entry) => {
            let datePicker = entry.querySelector('.date-picker');
            let entryObj = {
                'text': entry.querySelector('.entry-text').value,           // entry contents
                'showDate': (datePicker !== null),                          // if entry contains a date or not
                'type': entry.querySelector('image').getAttribute('class')  // bullet type
            };
            if (datePicker !== null) {
                let d = new Date( datePicker.value );
                entryObj['month'] = d.getMonth();
                entryObj['day'] = d.getDate();
                entryObj['year'] = d.getFullYear();
            } else {
                entryObj['month'] = this.month;
                entryObj['day'] = this.day;
                entryObj['year'] = this.year;
            }

            let collectionArr = [];
            if (entry.hasAttribute('collections')) {
                entry.querySelectorAll('.pill').forEach(pill => {
                    collectionArr.push(pill.innerHTML);
                });
            }
            entryObj['collections'] = collectionArr;
            
            entriesObj["entry"+entryNum] = entryObj;
            entryNum++;
        });

        return entriesObj;
    }

    set entries(entriesObj) {  // create a list of all entries based on the given object 
        let allEntries = this.shadowRoot.querySelectorAll('.single-entry');
        allEntries.forEach((entry) => {  // clear existing entries (to be replaced)
            entry.remove();
        });
        
        for (let key in entriesObj) {
            if (entriesObj.hasOwnProperty(key) && entriesObj[key].hasOwnProperty('text') && entriesObj[key].hasOwnProperty('showDate')) {  // checks for valid entry objects
                // add entries
                let entry = entriesObj[key];
                this.newEntry(entry.text, entry.showDate, entry.month, entry.day, entry.year, entry.type, entry.collections);
            }
        }
    }

    /**
     * Creates a new entry in the entries section and focuses the text field of the new entry
     * @param {string} txt text to be displayed in the entry, use "" if empty
     * @param {boolean} showDate true if the entry displays a date (monthly log), false otherwise (daily log)
     * @param {number} month month of the entry, January = 0, ... , December = 11
     * @param {number} day day of the entry
     * @param {number} year year of the entry
     * @param {string} type the type of bullet of the entry, defaults to task
     * @param {Array} collections array of collections (pills) to be assigned to the entry
     * @returns 
     */
    newEntry(txt, showDate, month, day, year, type, collections) {
        let entriesSection = this.shadowRoot.querySelector(".entries");
        let migrator = this.shadowRoot.querySelector(".migrator");

        if (type === undefined || type === "") {    // default type
            type = "task";
        }

        let entry = document.createElement('section');
        entry.classList.add('single-entry');

        if (showDate) {
            let dateElement = document.createElement('input');
            entry.appendChild(dateElement);
            let formattedDay = (day < 10) ? "0" + day : day.toString();
            let formattedMonth = (month+1 < 10) ? "0" + (month+1) : (month+1).toString();
            let minDate = year.toString() + "-" + formattedMonth + "-01";
            let maxDate = year.toString() + "-" + formattedMonth + "-" + (new Date(year, month+1, 0).getDate());
            let today = year.toString() + "-" + formattedMonth + "-" + formattedDay;
            dateElement.outerHTML = "<input type='date' class='date-picker' min='" + minDate + "' max='" + maxDate + "' value='" + today + "'>";
        }

        let bulletElement = document.createElement('button');
        entry.appendChild(bulletElement);
        bulletElement.outerHTML = "<button class='bullet' type='button'><svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                        + "<image class='" + type + "' href='./media/" + type + "-bullet.svg' width='100%' height='100%'/></svg></button>";

        let textSpan = document.createElement('span');
        entry.appendChild(textSpan);

        let textElement = document.createElement('input');
        textElement.type = 'text';
        textElement.classList.add('entry-text');
        if (type == "x") { textElement.classList.add('complete'); }
        textElement.value = txt;
        textElement.setAttribute('maxlength', 32);
        textSpan.appendChild(textElement);

        let pillsSection = document.createElement('section');
        pillsSection.classList.add('pills');
        entry.appendChild(pillsSection);

        textElement.addEventListener('keydown', event => { 
            if (event.key == 'Enter') {     // after pressing enter while editing the entry text, add a new entry
                this.newEntry("", this.showDate, this.month, this.day, this.year);
            } else if (event.key == 'Escape' || event.key == 'Esc') {    // after pressing escape, unfocus and save text
                document.activeElement.blur();
            }
        });

        textElement.addEventListener('blur', event => {     // if an entry is deselected and has no text in its entry, delete it
            if (event.target.value == "") {
                event.target.parentElement.parentElement.remove();
            }
            if (migrator.classList.contains('show')) {
                migrator.classList.remove('show');
            }
        });

        if (collections !== undefined) {
            let collectionStr = "";
            collections.forEach(collection => {
                let formatted = collection.replace(" ", "-");
                collectionStr = collectionStr + formatted + " ";
                let newPill = document.createElement('a');
                if (collection == "Future Log") {
                    newPill.classList.add('future');
                } else if (collection == "Next Month") {
                    newPill.classList.add('month');
                } else { newPill.classList.add('custom') }
                newPill.classList.add('pill');
                newPill.setAttribute('id', formatted);
                newPill.innerHTML = collection;
                pillsSection.appendChild(newPill);
            });
            collectionStr = collectionStr.slice(0, -1);
            entry.setAttribute('collections', collectionStr);
        }
        
        entriesSection.appendChild(entry);
        document.activeElement.blur();
        textElement.focus();
        return;
    }

    set collections(entries) {  // populate migration menu with custom collections (can get the entries object from menu-component)
        let migrator = this.shadowRoot.querySelector(".migrator");
        let collectionList = migrator.querySelector('.collections');
        migrator.querySelectorAll('.collection').forEach((entry) => {  // clear existing collection displays
            entry.remove();
        });

        let customLog = document.createElement('li');
        collectionList.appendChild(customLog);
        customLog.outerHTML = "<li class='collection'><a class='future'>Future Log</a></li>";

        if (this.showDate) {
            customLog = document.createElement('li');
            collectionList.appendChild(customLog);
            customLog.outerHTML = "<li class='collection'><a class='month'>Next Month</a></li>";
        }

        for (let key in entries) {
            if (entries.hasOwnProperty(key) && entries[key].hasOwnProperty('title')) {  // checks for valid entry objects
                // add custom collections to the migrator
                customLog = document.createElement('li');
                customLog.classList.add("collection");

                let customLogTitle = document.createElement('a');
                customLogTitle.classList.add("custom");
                customLogTitle.innerHTML = entries[key].title;
                console.log('1');
                customLog.appendChild(customLogTitle);
                collectionList.appendChild(customLog);
            }
        }
    }

    /**
     * JSON Format for entry lists:
     * 
     * {
     *      'entry0': {
     *          text: 'New Years!',
     *          showDate: true,
     *          type: 'note',
     *          month: 0,
     *          day: 1,
     *          year: 2021,
     *          collections: ['Future Log', 'Parties']
     *      },
     *      'entry1': {
     *          text: 'Laundry',
     *          showDate: true,
     *          type: 'task',
     *          month: 0,
     *          day: 5,
     *          year: 2021
     *      },
     *      ...
     * }
     */

    /* 
    Setting up the component on a page:

        let entryList = document.createElement('entry-list');
        entryList.showDate = true;  // false for daily logs, true for monthly logs
        entryList.collections = {}  // should always set collections after showDate even if there are none, so the defaults are set
        // should still set month, day, and year attributes for daily logs because it'll be useful for migration
        entryList.month = 0;        // January
        entryList.day = 15;         // Jan 15
        entryList.year = 2021;      // Jan 15 2021
        document.querySelector('main').prepend(entryList);
        entryList.collections = { 'collection-0': { title: 'CSE 110', state: 'CSE 110' }, 'collection-1': { title: 'Tutoring', state: 'Tutoring' } }; // sets collections

    Importing/modifying entry lists in a page:

        let entryList = document.querySelector('entry-list');
        entryList.entries = { 'entry0': { text: 'New Years!', showDate: true, type: 'note', month: 0, day: 1, year: 2021} };  // set initial entry
        let tempList = entryList.entries;
        delete tempList['entry0'];
        entryList.entries = tempList;   // deletes the New Years note from the menu
        entryList.entries = { 'entry3': { text: 'New Years!', showDate: true, type: 'note', month: 0, day: 1, year: 2021, collections: ['Future Log', 'CSE 110']} }; // creates entry with two collections
        tempList = entryList.entries;   // reformats and reorders the collection keys in the object
        tempList['entry1'] = { text: 'Laundry', showDate: true, type: 'task', month: 0, day: 5, year: 2021};
        entryList.entries = tempList;    // adds the new laundry task to the menu
     */
}

customElements.define('entry-list', EntryList);