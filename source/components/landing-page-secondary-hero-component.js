import { router } from '../scripts/router.js';

class LandingPageSecondaryHeroComponent extends HTMLElement {
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
            .hero {
                display: flex;
                flex-direction: row-reverse;
                background-color: #F9F6E7;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .text-and-button {
                display: flex;
                flex-direction: column;
                font-family: "Amaranth";
                font-size: 50px;
                text-align: right;
                color: #3F3697;
                width: 557px;
                margin-right: 5%;
            }
            @media (max-width: 619px) {
              .text-and-button {
                font-size: 30px;
              }
            }
            .description {
                font-family: "Mulish";
                font-weight: 400;
                font-size: 22px;
                width: 385;
                color: black;
            }
            .align-button {
                display: flex;
                justify-content: flex-end;
                margin-top: 20px;
              }
            .button-to-different-page {
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
            object {
              margin-top: 50px;
              margin-bottom: 100px;
            }
          </style>

          <section class="hero">
            <div class="text-and-button">
                <h1></h1>
                <div class="align-button">
                    <button class="button-to-different-page" 
                            type="button"
                            onclick="window.open('https://www.bulletjournal.com')">
                    </button>
                </div>
            </div>
            <object type="image/svg+xml" 
                    data="media/JRNL-Landing-Top.svg"
                    width="900"></object>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      
      // Get attributes
      const title = this.getAttribute('title');
      const buttonText = this.getAttribute('buttonText');
      const description = this.getAttribute('description');

      // Apply css classes based on value of attributes
      if(title) {
        this.shadowRoot.querySelector('h1').innerText = title;
      } else {
        this.shadowRoot.querySelector('h1').innerText = "Enter Title";
      }
      if(description) {
          this.shadowRoot.querySelector('h1').insertAdjacentHTML('afterend',
                  `<p class="description">${description}</p>`);
      } else {
          this.shadowRoot.querySelector('h1').insertAdjacentHTML('afterend',
                  `<p class="description">Enter description here</p>`);
      }
      if(buttonText) {
        this.shadowRoot.querySelector('button').innerHTML = buttonText;
      } else {
        this.shadowRoot.querySelector('button').innerHTML = "button text";
      }

      // Go to bulletjournal.com
      // const buttonToDifferentPage = this.shadowRoot.querySelector('button');
      // buttonToDifferentPage.addEventListener('click', () => {
      //   window.scroll(0,0);
      //   router.setState('download', false);
      // });
    }
}
customElements.define('landing-page-secondary-hero-component', LandingPageSecondaryHeroComponent);
