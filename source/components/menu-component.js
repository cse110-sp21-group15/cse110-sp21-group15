class MenuComponent extends HTMLElement {
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
                .hamburger-button {
                    /* Remove default styling */
                    background: none;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    outline: inherit;

                    position: fixed;
                    width: 60px;
                    height: 60px;
                }
                #closed {
                    z-index: 99;
                    left: 1rem;
                }
                #open {
                    z-index: 101;
                    top: 0;
                    right: 1rem;
                    position: absolute;
                }
                svg {
                    transition: fill 0.5s
                }
                svg:hover {
                    fill: #4aa3e3;
                }
                .menu-window {
                    position: fixed;
                    z-index: 100;
                    width: 20%;
                    height: 100%;
                    background-color: #ffffff;
                    // box-shadow: 2px 0 0 #3d84b8;
                    transform: translateX(-101%);
                    transition: transform 0.5s;
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                    padding-left: 2.5%;
                    padding-right: 2.5%;
                }
                .menu-title {
                    font-family: "Amaranth";
                    font-weight: bold;
                    font-size: 48px;
                    color: #344FA1;
                }
                .menu-contents {
                    list-style: none;
                    font-family: "Amaranth";
                    font-size: 36px;
                    color: #000000;
                    padding-left: 0;
                }
                li {
                    transition: background-color 0.5s;
                    margin-bottom: 10px;
                }
                li:hover {
                    background-color: #F2F2F2;
                }
                a:link {
                    color: #000000;
                    text-decoration: none;
                    transition: color 0.5s;
                }
                .future-log:hover, .monthly-log:hover {
                    color: #344FA1;
                }
                .custom-log:hover {
                    color: #3D84B8;
                }
                a:visited {
                    color: #000000;
                }
                .daily-list {
                    list-style: none;
                }
                .daily-log {
                    font-size: 24px;
                }
                .daily-log:hover {
                    color: #777777;
                }
                .new-collection {
                    font-family: "Mulish";
                    font-weight: bold;
                    font-size: 24px;
                    text-align: center;
                    letter-spacing: -0.015em;
                    color: #F0EBCC;
                    background-color: #344FA1;
                    border-radius: 5px;
                    padding-left: 44px;
                    padding-right: 44px;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    max-width: 350px;
                    cursor: pointer;
                    border: none;
                    outline: inherit;
                    transition: background-color 0.5s;
                }
                .new-collection:hover {
                    color: #fffbe3;
                    background-color: #5f52d8;
                }
                .new-collection:active {
                    color: #fffbe3;
                    background-color: #5f52d8;
                }
                .showMenu {
                    transform: translateX(0);
                }
            </style>
    
            <section class="menu-hamburger">
                <button class="hamburger-button" id="closed" type="button"><svg width="100%" height="100%" viewBox="0 0 157 84" fill="#3d84b8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 13.0625 C 0 5.8483 4.2533 0 9.5 0 L 147.5 0 C 152.747 0 157 5.8483 157 13.0625 V 13.0625 C 157 20.2767 152.747 26.125 147.5 26.125 L 9.5 
                    26.125 C 4.2533 26.125 0 20.2767 0 13.0625 V 13.0625 Z M 0 57.75 C 0 50.9155 4.0294 45.375 9 45.375 L 148 45.375 C 152.971 45.375 157 50.9155 157 57.75 
                    V 57.75 C 157 64.5845 152.971 70.125 148 70.125 L 9 70.125 C 4.0294 70.125 0 64.5845 0 57.75 V 57.75 Z M 0 102.4375 C 0 95.2233 4.2533 89.375 9.5 89.375 
                    L 147.5 89.375 C 152.747 89.375 157 95.2233 157 102.4375 V 102.4375 C 157 109.6517 152.747 115.5 147.5 115.5 H 9.5 C 4.2533 115.5 0 109.6517 0 102.4375 
                    V 102.4375 Z"/>
                    </svg></button>
            </section>
            <section class="menu-window">
                <button class="hamburger-button" id="open" type="button"><svg width="100%" height="100%" viewBox="0 0 157 84" fill="#3d84b8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 13.0625 C 0 5.8483 4.2533 0 9.5 0 L 147.5 0 C 152.747 0 157 5.8483 157 13.0625 V 13.0625 C 157 20.2767 152.747 26.125 147.5 26.125 L 9.5 
                    26.125 C 4.2533 26.125 0 20.2767 0 13.0625 V 13.0625 Z M 0 57.75 C 0 50.9155 4.0294 45.375 9 45.375 L 148 45.375 C 152.971 45.375 157 50.9155 157 57.75 
                    V 57.75 C 157 64.5845 152.971 70.125 148 70.125 L 9 70.125 C 4.0294 70.125 0 64.5845 0 57.75 V 57.75 Z M 0 102.4375 C 0 95.2233 4.2533 89.375 9.5 89.375 
                    L 147.5 89.375 C 152.747 89.375 157 95.2233 157 102.4375 V 102.4375 C 157 109.6517 152.747 115.5 147.5 115.5 H 9.5 C 4.2533 115.5 0 109.6517 0 102.4375 
                    V 102.4375 Z"/>
                    </svg></button>
                <h1 class="menu-title">Collections</h1>
                <ul class="menu-contents">
                    <li><a class="future-log" href="#">Future Log</a></li>
                    <li><a class="monthly-log" href="#">January</a>
                        <ul class="daily-list">
                            <li><a class="daily-log" href="#">1/1/2021</a></li>
                        </ul>
                        </li>
                    <li><a class="custom-log" href="#">CSE 110</a></li>
                </ul>
                <button class="new-collection" type="button">+ Custom Collection</button>
            </section>
            `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const menu = this.shadowRoot.querySelector('.menu-window');
        const ham1 = this.shadowRoot.querySelector('#closed');
        const ham2 = this.shadowRoot.querySelector('#open');

        ham1.addEventListener('click', toggleMenu);
        ham2.addEventListener('click', toggleMenu);

        function toggleMenu() {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
              } else {
                menu.classList.add("showMenu");
            }
        }

    }
}

customElements.define('menu-component', MenuComponent);