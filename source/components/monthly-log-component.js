class logComponent extends HTMLElement {
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

          .log {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .log-main-section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            background: #F9F6E7;
            border-radius: 5px;
            width: 90%;
            max-width: 65em;
          }

          .log-form-section {
            display: flex;
            flex-direction: column;
          }

          .log-title-text {
            font-family: "Amaranth";
            font-size: 96px;
            color: #344FA1;
          }

          .log-calendar-section {
            margin: 3em;
          }

          .log-calendar-month-text {
            font-family: Amaranth;
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            line-height: 78px;
            text-align: center;
            letter-spacing: -0.015em;
          }

          .log-bullets {
            font-family: Mulish;
            font-style: normal;
            font-weight: normal;
            font-size: 36px;
            line-height: 80px;
            letter-spacing: -0.015em; 
          }
            
          .add-bullet-button {
            font-family: "Mulish";
            font-weight: bold;
            font-size: 24px;
            text-align: center;
            letter-spacing: -0.015em;
            color: #F0EBCC;
            background-color: #344FA1;
            border-radius: 6px;
            padding-left: 12px;
            padding-right: 12px;
            padding-top: 12px;
            padding-bottom: 12px;
            margin-left: 25px;
            margin-right: 150px;
            margin-bottom: 30px;
            max-width: 350px;
          }
              
          button, input[type="submit"], input[type="reset"] {
            /* Remove default styling */
            background: none;
            cursor: pointer;
            border: none;
            padding: 0;
            outline: inherit;
      
            /* Add custom styling */
            transition: background-color 0.5s;
          }

          button:hover {
            color: #fffbe3;
            background-color: #5f52d8;
          }

          button:active {
            color: #fffbe3;
            background-color: #5f52d8;
          }

          @media (min-width: 800px) {
            .log-form-section {
              margin-top: 3em;
              margin-left: 3em;
            }
          }

          @media (max-width: 599px) {
            .log-title-text {
              margin-left: 1em;
            }
          }

          </style>
          <section class="log">
            <section class="log-title-section">
              <h2 class="log-title-text"><h2>
            </section>
          <section class="log-main-section">
            <section class="log-calendar-section">
              <h2 class="log-calendar-month-text"></h2>
                <img class="log-calendar-image-placeholder" 
                  src="./media/calendar-icon.svg"
                  alt="please enter a valid path">
            </section>
            <section class="log-form-section">
              <ul class="log-bullets">
                <li>2: laundry</li>
                <li>14: grocery shopping</li>
              </ul>
              <button class="add-bullet-button">+ add</button>
            </section>
          </section>
          `;

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Get attributes
        const title = this.getAttribute('title');
        const month = this.getAttribute('month');

        // Apply css classes based on value of attributes
        if (title) {
            this.shadowRoot.querySelector('.log-title-text').innerText = title;
        } else {
            this.shadowRoot.querySelector('.log-title-text').innerText = "Viv's January"
        }

        if (month) {
            this.shadowRoot.querySelector('.log-calendar-month-text').innerText = month;
        } else {
            this.shadowRoot.querySelector('.log-calendar-month-text').innerText = "JAN";
        }
    }
}

customElements.define('log-component', logComponent);