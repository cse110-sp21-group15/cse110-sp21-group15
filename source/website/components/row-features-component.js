/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
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
                align-items: center;
            }
            .row {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            feature-component {
                margin-left: 15px;
                margin-right: 15px;
            }
            .header {
                margin-top: 60px;
                margin-left: 5%;
                font-size: 96px;
                font-family: "Amaranth";
                font-weight: 700;
                color: #3F3697;
                max-width: 1100px;
                text-align: center;
            }
            @media (max-width: 619px) {
                .header {
                    font-size: 60px;
                }
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
          <header>
              <h1 class="header">Make the most out of your JRNL</h1>
            </header>
            <div class="row">
                <feature-component alignment=vertical
                                textSize=mini
                                title="Privacy First"
                                description="Our team at JRNL values your privacy, and for this reason, we are a locally-hosted web application that will only be accessible to you. Privacy for the win!"
                                imgSize=mini
                                src="media/privacy-first.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                title="Remove Distractions"
                                description="When you use JRNL, you will be met with a minimal, attractive, focused interface that will allow you to tune into your thoughts and jot them down as they bubble up in your mind"
                                imgSize=mini
                                src="media/remove-distractions.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                title="Track Habits"
                                description="We understand that you have habits to track, be they good habits to continue or bad habits to break. JRNL will help you track these habits in an intuitive, enjoyable manner"
                                imgSize=mini
                                src="media/track-habits.png"></feature-component>
                <feature-component alignment=vertical
                                textSize=mini
                                title="Plan and Reflect"
                                description="Through JRNL's retrospective and future logs, you will reflect on the past and plan for the future in the best way possible"
                                imgSize=mini
                                src="media/reflect.png"></feature-component>
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
      window.scroll(0, 0);
      router.setState('features', false);
    });
  }
}
customElements.define('row-features-component', RowFeaturesComponent);
