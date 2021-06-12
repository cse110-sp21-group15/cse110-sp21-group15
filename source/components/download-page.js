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
                               src="media/privacy-first.png"
                               description="To get started with using JRNL, you will be greeted by a login page where you will be prompted to enter your name and a 4-digit login pin. After you have configured these details, you'll be ready to JRNL!"
                               ></feature-component>
            <feature-component imgSize=big
                               title="Tips & Tricks"
                               src="media/custom-logs.png"
                               description="Something special about JRNL is its ability to create custom logs that fit your needs. From Custom Collections to Habit Trackers, JRNL has customization features that put it in a league of its own"
                               alignment=right></feature-component>
        </main>
      </section>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('download-page', DownloadPage);