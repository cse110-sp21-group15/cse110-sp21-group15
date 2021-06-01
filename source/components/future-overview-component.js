class FutureOverviewComponent extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');
    
        template.innerHTML = `
        
        <style>
            
        </style>
        
        
        
        
        
        
        <section class="month-overview">
            <section class="month-overview-month-section">
                <h2 class="month-overview-month-text"></h2>
            </section>

            <section class="month-overview-text-section">
                <ul class="month-overview-bullets">
                    <li> 2: laundry </li>
                    <li> 14: grocery shopping </li>
                </ul>
                <button class="add-button"> + add </button>
            </section>
        </section>

        `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        // Get attributes
        const month = this.getAttribute('month');


        // Apply css classes based on value of attributes
        if(month) {
            this.shadowRoot.querySelector('month-overview-month-text').innerText = month;           
        } else {
            this.shadowRoot.querySelector('month-overview-month-text').innerText = 'Enter Month'
        }

    }
}

customElements.define('future-overview-component',  FutureOverviewComponent );