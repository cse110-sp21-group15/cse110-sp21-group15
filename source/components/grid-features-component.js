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
                                 title="Write and Sort Thoughts Quickly"
                                 description="Capture your thoughts as they spring up throughout the day"
                                 id=top-left
                                 src="media/sort-thoughts.png">
              </feature-component>
              <feature-component imgSize=mini
                                 textSize=mini
                                 title="Identify your priorities"
                                 description="Mark the most important items in your JRNL with unique bullet signifiers"
                                 id=top-right
                                 src="media/identify-priorities.png">
              </feature-component>
            </div>
            <div class="row">
              <feature-component imgSize=mini
                                 textSize=mini
                                 title="Track Short and Long Term Goals"
                                 description="Manifest your goals like never before. From writing bullets on the page to changing your life for the better, JRNL will help you get there"
                                 id=bottom-left
                                 src="media/track-goals.png">
              </feature-component>
              <feature-component imgSize=mini
                                 textSize=mini
                                 title="Make the Journal Yours"
                                 description="JRNL is a framework for reflection, ideation, logging, and so much more. Configure your JRNL experience to match your lifestyle."
                                 id=bottom-right
                                 src="media/custom-logs.png">
              </feature-component>
            </div>
          </section>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('grid-features-component', GridFeaturesComponent);