class GridFeaturesComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
  
      template.innerHTML = `
          <style>
            .grid {
              display: flex;
              flex-direction: column;
              margin-bottom: 60px;
            }
            .row {
              display: flex;
              flex-direction: row;
              justify-content: center;
              flex-wrap: wrap;
            }
            feature-component {
              flex-grow: 2;
            }
          .header {
              margin-top: 60px;
              margin-left: 5%;
              font-size: 96px;
              font-family: "Amaranth";
              font-weight: 700;
              color: #3F3697;
              max-width: 1100px;
          }
          @media (max-width: 600px) {
            .header {
              font-size: 50px;
            }
          }
          </style>
          <section class="grid">
            <header>
              <h1 class="header">Track your assignments and goals thoughtfully</h1>
            </header>
            <div class="row">
              <feature-component imgSize=mini
                                 textSize=mini
                                 id=top-left
                                 src="media/rapid-logging-example.png">
              </feature-component>
              <feature-component imgSize=mini
                                 textSize=mini
                                 id=top-right
                                 src="media/rapid-logging-example.png">
              </feature-component>
            </div>
            <div class="row">
              <feature-component imgSize=mini
                                 textSize=mini
                                 id=bottom-left
                                 src="media/rapid-logging-example.png">
              </feature-component>
              <feature-component imgSize=mini
                                 textSize=mini
                                 id=bottom-right
                                 src="media/rapid-logging-example.png">
              </feature-component>
            </div>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('grid-features-component', GridFeaturesComponent);