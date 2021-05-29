class GridFeaturesComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
  
      template.innerHTML = `
          <style>
            .grid {
              display: flex;
              flex-direction: column;
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
          </style>
          <section class="grid">
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
customElements.define('grid-features-component', gridFeaturesComponent);