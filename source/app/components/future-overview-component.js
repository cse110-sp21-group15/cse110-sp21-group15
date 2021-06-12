class FutureOverviewComponent extends HTMLElement {
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

           .month-overview {
               display: flex;
               flex-direction: row;
               justify-content: center;
               align-items: flex-start;
           }
  
           .month-overview-month-text {
               font-family: Amaranth;
               font-style: normal;
               font-weight: bold;
               font-size: 96px;
               letter-spacing: -0.015em;
               margin-top: 0px;
               margin-bottom: 0px;
               margin-left: 0px;
               margin-right: 15px;
               
           }

           .month-overview-form-section {
                display: flex;
                flex-direction: column;
           }

           .month-overview-bullets {
               display: flex;
               flex-direction: column;
               font-family: Mulish;
               font-style: normal;
               font-weight: 400;
               font-size: 24px; 
               line-height: 45px;
               letter-spacing: -0.015em;
               margin-top: 15px;
               margin-bottom: 25px;
               margin-left: 10px;
               margin-right: 10px;
           }

           li {
                max-width: 500px;   
                word-wrap: break-word;
            }

           .add-button {
               font-family: Mulish;
               font-weight: bold;
               font-size: 24px;
               text-align: center;
               letter-spacing: -0.015em;
               color: #F0EBCC;
               background-color: #344FA1;
               border-radius: 6px;
               padding-left: 12px;
               padding-right: 12px;
               padding-top: 6px;
               padding-bottom: 6px;
               margin-left: 35px;
               margin-right: 150px;
               max-width: 112px;
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

          @media (max-width: 1340px) {
            .month-overview {
                flex-wrap: wrap;
            }
          }

        </style>
        <section class="month-overview">
            <section class="month-overview-month-section">
                <h2 class="month-overview-month-text"></h2>
            </section>

            <section class="month-overview-form-section">
                <ul class="month-overview-bullets">
                    <li> 2: laundry </li>
                    <li> 14: grocery shopping  </li>      
                    <li> 14: this is a very long entry but it should eventually start a new line weeee!  </li>        
                </ul>
            </section>
        </section>

        `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        // Get attributes
        const month = this.getAttribute('month');


        // Apply css classes based on value of attributes
        if(month) {
            this.shadowRoot.querySelector('.month-overview-month-text').innerText = month;           
        } else {
            this.shadowRoot.querySelector('.month-overview-month-text').innerText = 'Enter Month';
        }

    }
}

customElements.define('future-overview-component',  FutureOverviewComponent );