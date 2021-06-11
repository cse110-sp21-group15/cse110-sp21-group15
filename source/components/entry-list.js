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

            svg, image {
                pointer-events: none;
            }

            .entry-handler {
                padding: 1rem 1.5rem;
                min-width: 750px;
            }
            
            .single-entry {
                width: 75%;
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
            
            .single-entry input[type=date] {
                display: block;
                font-family: "Mulish";
                font-weight: bold;
                font-size: 24px;
                color: #000000;
                width: 200px;
                min-width: 200px;
                border: none;
                border-bottom: 2px solid #00000000;
                margin-right: 1rem;
                transition: border-bottom 0.25s, color 0.25s;
            }
            input[type=date]:hover {
                border-bottom: 2px solid #000000FF;
            }
            input[type=date]:focus {
                outline: none;
                border-bottom: 2px solid #3d84b8FF;
                color: #3d84b8;
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
                border: none;
                border-bottom: 2px solid #00000000;
                transition: border-bottom 0.25s, color 0.25s;
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
                z-index: 98;
                position: fixed;
                bottom: 0;
                left:0;
                background-color: #FFFFFF;
                font-family: "Mulish";
                font-size: 18px;
                color: #000000;
                padding: 1em;
                content: "Left Click: Toggle bullet type | Right Click: Cross/uncross out entry";
                text-align: center;
            }
            .single-entry span:hover:after {
                width: 100%;
                z-index: 98;
                position: fixed;
                bottom: 0;
                left:0;
                background-color: #FFFFFF;
                font-family: "Mulish";
                font-size: 18px;
                color: #000000;
                padding: 1em;
                content: "Left Click: Edit entry text | Right Click: Migrate entry";
                text-align: center;
            }

            .new-entry {
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
            .new-entry:hover {
                color: #fffbe3;
                background-color: #5f52d8;
            }

        </style>
        <section class="entry-handler">
            <section class="entries">
            </section>
            <button class="new-entry" type="button">+ Add</button>
        </section>
        `;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const entriesSection = this.shadowRoot.querySelector('.entries');

        var attribMonth = this.getAttribute('month');
        var attribDay = this.getAttribute('day');
        var attribYear = this.getAttribute('year');
        var attribShowDate = this.getAttribute('showDate');
        
        const dateObj = new Date();
        this.month = (attribMonth) ? attribMonth : dateObj.getMonth(); // january = 0, ..., december = 11
        this.day = (attribDay) ? attribDay : dateObj.getDate();
        this.year = (attribYear) ? attribYear : dateObj.getFullYear();
        this.showDate = (attribShowDate) ? attribShowDate : true;

        this.shadowRoot.addEventListener('click', event => {
            let clicked = event.target;
            if (clicked.closest('.new-entry')) {   // new entry when add button is clicked
                this.newEntry("", this.showDate, this.month, this.day, this.year);
            }
            else if (clicked.closest('.bullet')) {      // toggles bullet type when clicked
                let img = clicked.querySelector('image');
                let text = clicked.parentElement.querySelector('.entry-text');
                if (img.classList.contains('task')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='x' href='./media/x-bullet.svg' width='100%' height='100%'/></svg>";
                    text.classList.add('complete');
                }
                if (img.classList.contains('x')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='event' href='./media/event-bullet.svg' width='100%' height='100%'/></svg>";
                    text.classList.remove('complete');
                }
                if (img.classList.contains('event')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='note' href='./media/note-bullet.svg' width='100%' height='100%'/></svg>";
                }
                if (img.classList.contains('note')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='task' href='./media/task-bullet.svg' width='100%' height='100%'/></svg>";
                }
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
            }
            else if (clicked.closest('.entry-text')) { // right clicking entry text will trigger migration menu
                event.preventDefault();
                // TODO: finish migration stuff
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
                this.newEntry(entry.text, entry.showDate, entry.month, entry.day, entry.year, entry.type);
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
     * @returns 
     */
    newEntry(txt, showDate, month, day, year, type) {
        let entriesSection = this.shadowRoot.querySelector(".entries");

        if (type === undefined) {    // default type
            type = "task";
        }
        console.log(txt + " " + type);

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

        textElement.addEventListener('keypress', event => { // after pressing enter while editing the entry text, add a new entry
            if (event.key == 'Enter') {
                this.newEntry("", this.showDate, this.month, this.day, this.year);
            }
        });

        textElement.addEventListener('blur', event => {     // if an entry is deselected and has no text in its entry, delete it
            if (event.target.value == "") {
                event.target.parentElement.parentElement.remove();
            }
        });
        
        entriesSection.appendChild(entry);
        document.activeElement.blur();
        textElement.focus();
        return;
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
     *          year: 2021
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
        // should still set month, day, and year attributes for daily logs because it'll be useful for migration
        entryList.month = 0;        // January
        entryList.day = 15;         // Jan 15
        entryList.year = 2021;      // Jan 15 2021
        document.querySelector('main').prepend(entryList);

    Importing/modifying entry lists in a page:

        let entryList = document.querySelector('entry-list');
        entryList.entries = { 'entry0': { text: 'New Years!', showDate: true, type: 'note', month: 0, day: 1, year: 2021} };  // set initial entry
        let tempList = entryList.entries;
        delete tempList['entry0'];
        entryList.entries = tempList;   // deletes the New Years note from the menu
        entryList.entries = { 'entry3': { text: 'New Years!', showDate: true, type: 'note', month: 0, day: 1, year: 2021} };
        tempList = entryList.entries;   // reformats and reorders the collection keys in the object
        tempList['entry1'] = { text: 'Laundry', showDate: true, type: 'task', month: 0, day: 5, year: 2021};
        entryList.entries = tempList;    // adds the new laundry task to the menu
     */
}

customElements.define('entry-list', EntryList);