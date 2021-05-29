import { router } from '../scripts/router.js';

class RowFeaturesComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
  
      template.innerHTML = `
          <style>
            section {
                display: flex;
                flex-direction: column;
            }
            .row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            feature-component {
                margin-left: 2%;
                margin-right: 2%;
            }
            .align-button {
                display: flex;
                justify-content: center;
                margin: 60px;
              }
            .start-jrnling-button {
                display: flex;
                align-items: center;
                font-family: "Mulish";
                font-weight: 700;
                font-size: 24px;
                text-align: center;
                letter-spacing: -0.015em;
                color: #F0EBCC;
                background-color: #344FA1;
                border-radius: 6px;
                padding-left: 44px;
                padding-right: 44px;
                padding-top: 15px;
                padding-bottom: 15px;
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
          </style>
          <section class="">
            <div class="row">
                <feature-component alignment=vertical
                                textSize=mini
                                imgSize=mini
                                src="media/rapid-logging-example.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                imgSize=mini
                                src="media/rapid-logging-example.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                imgSize=mini
                                src="media/rapid-logging-example.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                imgSize=mini
                                src="media/rapid-logging-example.png"></feature-component>
            </div>
            <div class="align-button">
                <button class="start-jrnling-button" type="button">More Features</button>
            </div>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // Go to Features page from button on the Features page
      const featuresPageButton = this.shadowRoot.querySelector('button');
      featuresPageButton.addEventListener('click', () => {
        window.scroll(0,0);
        router.setState('features', false);
      });
    }
}
customElements.define('row-features-component', RowFeaturesComponent);