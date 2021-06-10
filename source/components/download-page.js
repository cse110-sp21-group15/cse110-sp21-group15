class DownloadPage extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      
      template.innerHTML = `
      <style>
      </style>
      <section>
        <main>
            <download-hero-component></download-hero-component>
            <feature-component imgSize=big
                               title="Getting Started"
                               src="media/rapid-logging-example.png"
                               ></feature-component>
            <feature-component imgSize=big
                               title="Tips & Tricks"
                               src="media/rapid-logging-example.png"
                               alignment=right></feature-component>
        </main>
      </section>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('download-page', DownloadPage);