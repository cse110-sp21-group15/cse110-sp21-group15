import { router } from '../scripts/router.js';

class FeaturePage extends HTMLElement {
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
          body {
            display: flex; 
            flex-direction: column;
            align-items: stretch;
            margin: 0px;
          }
          section {
            margin-top: 100px;
          }
          .header {
            margin: 0.3rem;
            margin-left: 5%;
            font-size: 96px;
            font-family: "Amaranth";
            font-weight: 700;
            color: #3F3697;
          }
          .button-description {
            font-size: 48px;
            font-family: "Amaranth";
            font-weight: bold;
            text-align: center;
            color: #344FA1;
            margin: 5%;
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
            font-weight: bold;
            font-size: 35px;
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
  
        <section class="feature-page">
            <header>
                <h1 class="header">Features</h1>
            </header>
            <main>
            <feature-component title="Rapid Logging"
                               description="JRNL allows you to rapid log your thoughts with ease as they float into your mind. The concept of rapid logging is fundamental to how you bullet journal, and JRNL has encapsulated this experience into something you'll love"
                               src="./media/sort-thoughts.png"></feature-component>
            <feature-component title="Migration"
                               description="To help facilitate forward progress with your tasks, JRNL allows you to reflect on the past month's tasks at the beginning of each month and migrate your tasks to the current month based on whether you need to complete them moving forward or not"
                               src="./media/migration.png"
                               alternateBackgroundColor=true
                               alignment="right"></feature-component>
            <feature-component title="Custom Collections"
                               description="Through Custom Collections, JRNL will allow you to modularize your Bullet Journaling experience so that it fits your specific needs in the best way possible"
                               src="./media/custom-collections.png"></feature-component>
            <h5 class="button-description">Ready to JRNL?</h5>
            <div class="align-button">
                <button class="start-jrnling-button" type="button">Start JRNLing</button>
            </div>
            </main>
            <script src="./components/aFeature.js" type="module"></script>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // Go to Download page from button on the Features page
      const featuresPageButton = this.shadowRoot.querySelector('button');
      featuresPageButton.addEventListener('click', () => {
        window.scroll(0,0);
        router.setState('download', false);
      });
    }
}
  
  customElements.define('feature-page', FeaturePage);