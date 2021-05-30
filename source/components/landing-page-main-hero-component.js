import { router } from '../scripts/router.js';

class LandingPageMainHeroComponent extends HTMLElement {
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
                flex-direction: row;
                background-color: #F0EBCC;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .text-and-button {
                display: flex;
                flex-direction: column;
                font-family: "Amaranth";
                font-size: 70px;
                width: 557px;
                color: #344FA1;
            }
            @media (max-width: 619px) {
              .text-and-button {
                font-size: 60px;
                margin-left: 5%;
              }
            }
            .align-button {
                display: flex;
                justify-content: flex-start;
                margin-bottom: 100px;
              }
            .button-to-different-page {
                display: flex;
                align-items: center;
                font-family: "Mulish";
                font-weight: 700;
                font-size: 36px;
                text-align: center;
                letter-spacing: -0.015em;
                color: #F0EBCC;
                background-color: #344FA1;
                border-radius: 6px;
                padding-left: 65px;
                padding-right: 65px;
                padding-top: 22px;
                padding-bottom: 22px; 
            }
            @media (max-width: 619px) {
              .button-to-different-page {
                font-size: 30px;
                padding-left: 44px;
                padding-right: 44px;
                padding-top: 15px;
                padding-bottom: 15px;
              }
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
              margin-bottom: 100px;
            }
          </style>

          <section class="hero">
            <div class="text-and-button">
                <h1></h1>
                <div class="align-button">
                    <button class="button-to-different-page" type="button"></button>
                </div>
            </div>
            <object type="image/svg+xml" 
                    data="media/digitalBuJoAnimated.svg"
                    width="600"></object>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      
      // Get attributes
      const title = this.getAttribute('title');
      const buttonText = this.getAttribute('buttonText');

      // Apply css classes based on value of attributes
      if(title) {
        this.shadowRoot.querySelector('h1').innerText = title;
      } else {
        this.shadowRoot.querySelector('h1').innerText = "Enter Title"
      }
      if(buttonText) {
        this.shadowRoot.querySelector('button').innerHTML = buttonText;
      } else {
        this.shadowRoot.querySelector('button').innerHTML = "button text";
      }

      // Go to Download page
      const buttonToDifferentPage = this.shadowRoot.querySelector('button');
      buttonToDifferentPage.addEventListener('click', () => {
        window.scroll(0,0);
        router.setState('download', false);
      });
    }
}
customElements.define('landing-page-main-hero-component', LandingPageMainHeroComponent);