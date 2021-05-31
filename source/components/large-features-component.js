class LargeFeaturesComponent extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
  
      template.innerHTML = `
          <style>
          </style>
          <section class="">
            <feature-component imgSize=big
                                src="media/rapid-logging-example.png"></feature-component>
            <feature-component imgSize=big
                                alignment=right
                                src="media/rapid-logging-example.png"></feature-component>
          </section>
          <feature-component imgSize
                                   alignment=left
                                   src="media/rapid-logging-example.png"></feature-component>
          <feature-component imgSize
                                   alignment=right
                                   src="media/rapid-logging-example.png"></feature-component>
          <feature-component
                                   alignment=left
                                   textSize=mini
                                   imgSize=mini
                                   src="media/rapid-logging-example.png"></feature-component>
          <feature-component
                                   alignment=right
                                   textSize=mini
                                   imgSize=mini
                                   src="media/rapid-logging-example.png"></feature-component>
          <feature-component
                                   alignment=vertical
                                   textSize=mini
                                   imgSize=mini
                                   src="media/rapid-logging-example.png"></feature-component>
          <feature-component
                                   alignment=vertical
                                   textSize=mini
                                   imgSize=mini
                                   src="media/rapid-logging-example.png"></feature-component>
          `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('large-features-component', LargeFeaturesComponent);