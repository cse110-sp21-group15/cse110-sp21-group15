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

        const addButton = this.shadowRoot.querySelector('.new-entry');
        const entries = this.shadowRoot.querySelector('.entries');

        var attribMonth = this.getAttribute('month');
        var attribDay = this.getAttribute('day');
        var attribYear = this.getAttribute('year');
        var attribShowDate = this.getAttribute('showDate');
        
        const dateObj = new Date();
        var month = (attribMonth) ? attribMonth : dateObj.getMonth(); // january = 0, ..., december = 11
        var day = (attribDay) ? attribDay : dateObj.getDate();
        var year = (attribYear) ? attribYear : dateObj.getFullYear();
        var showDate = (attribShowDate) ? attribShowDate : true;

        this.shadowRoot.addEventListener('click', event => {
            let clicked = event.target;
            if (clicked.closest('.new-entry')) {   // new entry when add button is clicked
                newEntry(showDate);
            }
            else if (clicked.closest('.bullet')) {      // toggles bullet type when clicked
                let img = clicked.querySelector('image');
                if (img.classList.contains('task')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='x' href='./media/x-bullet.svg' width='100%' height='100%'/></svg>";
                }
                if (img.classList.contains('x')) {
                    clicked.innerHTML = "<svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                                        + "<image class='event' href='./media/event-bullet.svg' width='100%' height='100%'/></svg>";
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

        /**
         * Creates a new entry in the entries section and focuses the text field of the new entry
         * @param {boolean} showDate true if the entry displays a date (monthly log), false otherwise (daily log)
         * @returns 
         */
        function newEntry(showDate) {
            let entry = document.createElement('section');
            entry.classList.add('single-entry');

            if (showDate) {
                let dateElement = document.createElement('input');
                entry.appendChild(dateElement);
                let formattedDay = (day < 10) ? "0" + day : day.toString();
                let formattedMonth = (month+1 < 10) ? "0" + (month+1) : (month+1).toString();
                let minDate = year.toString() + "-" + formattedMonth + "-01";
                let maxDate = year.toString() + "-" + formattedMonth + "-" + daysInMonth(month, year);
                let today = year.toString() + "-" + formattedMonth + "-" + formattedDay;
                dateElement.outerHTML = "<input type='date' class='date-picker' min='" + minDate + "' max='" + maxDate + "' value='" + today + "'>";
            }

            let bulletElement = document.createElement('button');
            entry.appendChild(bulletElement);
            bulletElement.outerHTML = "<button class='bullet' type='button'><svg width='100%' height='100%' viewBox='0 0 157 84' xmlns='http://www.w3.org/2000/svg'>"
                            + "<image class='task' href='./media/task-bullet.svg' width='100%' height='100%'/></svg></button>";
                            + "<span><input type='text' class='entry-text'></span></section>";

            let textSpan = document.createElement('span');
            entry.appendChild(textSpan);

            let textElement = document.createElement('input');
            textElement.type = 'text';
            textElement.classList.add('entry-text');
            textSpan.appendChild(textElement);

            textElement.addEventListener('keypress', event => { // after pressing enter while editing the entry text, add a new entry
                if (event.key == 'Enter') {
                    newEntry(showDate);
                }
            });
    
            textElement.addEventListener('blur', event => {     // if an entry is deselected and has no text in its entry, delete it
                if (event.target.value == "") {
                    event.target.parentElement.parentElement.remove();
                }
            });
            
            entries.appendChild(entry);
            document.activeElement.blur();
            textElement.focus();
            return;
        }

        function daysInMonth(month, year) {
            return new Date(year, month+1, 0).getDate();
        }
    }
}

customElements.define('entry-list', EntryList);