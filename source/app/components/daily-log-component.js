/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class DailyLogComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
          <style>
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .header {
                margin-top: 60px;
                margin-bottom: 50px;
                font-size: 96px;
                font-family: "Amaranth";
                font-weight: 700;
                color: #3F3697;
                text-align: center;
            }

            .current-date-row {
                margin-left: -250px;
            }

            .current-date {
                margin-top: 0px;
                margin-bottom: 0px;
                font-family: "Amaranth";
                font-weight: 400;
                font-size: 64px;
                line-height: 80px;
                letter: -1.5%;
                text-decoration: underline;
            }
        
            entry-list {
                margin-top: 10px;
            }
           
            @media (max-width: 619px) {
                .header {
                    font-size: 60px;
                    margin-bottom: 20px;
                }

                .current-date {
                    font-size: 32px;
                }
            }
          </style>
          <section class="">
            <header>
                <h1 class="header"> Hello, Viv </h1>
            </header>
            <div class="current-date-row">
                <h2 class="current-date"> </h2>
            </div>
            <entry-list></entry-list>
          </section>
          `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get attributes
    const date = this.getAttribute('date');

    if (date) {
      console.log('DATE IS TRUE');
      this.shadowRoot.querySelector('.current-date').innerText = dateRef;
    } else {
      console.log('DATE IS NOT TRUE');
      this.shadowRoot.querySelector('.current-date').innerText = 'Enter Date';
    }
  }

  set date(date) {
    const dateRef = date;

    if (dateRef) {
      console.log('DATEREF IS TRUE');
      const dateText = this.shadowRoot.querySelector('.current-date');
      dateText.innerHTML = dateRef;
    }
  }
}
customElements.define('daily-log-component', DailyLogComponent);
