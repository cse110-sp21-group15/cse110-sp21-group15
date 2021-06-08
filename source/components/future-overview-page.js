class FutureOverviewPage extends HTMLElement {
    constructor () {
        super();

        const template = document.createElement('template'); 

        template.innerHTML =  `
            <style>
                @font-face {
                    font-family: "Amaranth";
                    src: url(./Amaranth/Amaranth-Regular.ttf) format("truetype")
                }

                @font-face {
                    font-family: "Mulish";
                    src: url(./Mulish/static/Mulish-Regular.ttf) format("truetype")
                }
                
                .header {
                    font-family: Amaranth;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 96px;
                    color: #344FA1;
                    text-align: center;
                    letter-spacing: -0.015em;
                    margin-top: 60px;
                    margin-bottom: 65px;
                    margin-left: 20px;
                    margin-right: 20px; 
                }

                main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    margin-top: 0px;
                    margin-bottom: 50px;
                }

                .month-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: stretch;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    margin-left: 80px;
                    margin-right: 25px;
                }

                future-overview-component {
                    margin-top: 25px;
                    margin-bottom: 45px;
                    margin-left: 5px;
                    margin-right: 5px;
                }

                @media (max-width: 1463px) {
                    .month-row {
                        flex-direction: column;
                    }
                }
            </style>
            <section class="future-overview-first-page">
                <header>
                    <h1 class="header">Viv's Future</h1>
                </header>
                <main>
                    <section class="month-row"> 
                        <future-overview-component month="JAN"></future-overview-component>
                        <future-overview-component month="FEB"></future-overview-component>
                    </section>
                    <section class="month-row">
                        <future-overview-component month="MAR"></future-overview-component>
                        <future-overview-component month="APR"></future-overview-component>
                    </section>
                    <section class="month-row">
                        <future-overview-component month="MAY"></future-overview-component>
                        <future-overview-component month="JUN"></future-overview-component>
                    </section>
                    <section class="month-row">
                        <future-overview-component month="JUL"></future-overview-component>
                        <future-overview-component month="AUG"></future-overview-component>
                    </section>
                    <section class="month-row">
                        <future-overview-component month="SEP"></future-overview-component>
                        <future-overview-component month="OCT"></future-overview-component>
                    </section>
                    <section class="month-row">
                        <future-overview-component month="NOV"></future-overview-component>
                        <future-overview-component month="DEC"></future-overview-component>
                    </section>
                </section>
        
                </main>
            </section>
        `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('future-overview-page',  FutureOverviewPage);