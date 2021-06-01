class LandingPage extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      
      template.innerHTML = `
      <style>
      </style>
      <section>
        <main>
            <landing-page-main-hero-component title="Digital Bullet Journaling for Students"
                                            buttonText="Start JRNLing"></landing-page-main-hero-component>
            <grid-features-component></grid-features-component>
            <landing-page-secondary-hero-component title="Keep yourself on top of everything" 
                                                buttonText="Learn More"
                                                description="JRNL takes the core concepts behind the Bullet Journal and applies it in a digital format."></landing-page-secondary-hero-component>
            <row-features-component></row-features-component>
        </main>
      </section>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('landing-page', LandingPage);