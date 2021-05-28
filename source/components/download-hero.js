class DownloadHero extends HTMLElement {
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
            .hero {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              padding-top: 100px;
              padding-bottom: 60px;
              background-color: #F0EBCC
            }
            .hero-logo-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 3.5%;
              margin-bottom: 25px;
            }
            .logo-image {
              width: 350px;
              height: auto;
            }
            .hero-text-section {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 5%;
              margin-right: 5%;
            }
            .hero-description {
              max-width: 500px;
              margin-bottom: 60px;
            }
            p.hero-description {
              font-size: 30px;
              font-family: Amaranth;
              font-weight: bold;
              color: #3F3697;
              text-align: center;
            }
            p.hero-os-display {
              font-family: "Mulish";
              font-size: 20px;
              text-align: center;
              color: #3D84B8;
            }
            .download-button {
              font-family: "Mulish";
              font-weight: bold;
              font-size: 26px;
              text-align: center;
              letter-spacing: -0.015em;
              color: #F0EBCC;
              background-color: #344FA1;
              border-radius: 6px;
              padding-left: 12px;
              padding-right: 12px;
              padding-top: 12px;
              padding-bottom: 12px;
              max-width: 350px;
            }
            button, input[type="submit"], input[type="reset"] {
                /* Remove default styling */
                background: none;
                cursor: pointer;
                border: none;
                padding: 0;
                outline: inherit;
    
                /* Add custom styling */
                transition: background-color 0.5s;
              }
              button:hover {
                color: #fffbe3;
                background-color: #5f52d8;
              }
              button:active {
                color: #fffbe3;
                background-color: #5f52d8;
              }
          </style>
  
          <section class="hero">

            <section class="hero-logo-section">
                <img class="logo-image" 
                    src="./media/JRNLlogo.svg"
                    alt="JRNL"></img>
            </section>
            <section class="hero-text-section">
                <p class="hero-description"></p>
                <button class="download-button" type="button">Download JRNL</button>
                <p class="hero-os-display"></p>
            </section>   
  
          </section>
          `;
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        // Get attributes
        const description = this.getAttribute('description');

        // Set attributes

        if (description) {
            this.shadowRoot.querySelector('.hero-description').innerText = description;
        } else {
            this.shadowRoot.querySelector('.hero-description').innerText =
                "Assignments, goals, habits, and more. Student life is tough to stay on top of and JRNL is here to help.";
        }

        // Detect user's OS (for displaying on the hero)
        const userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'];
        let os = null;
  
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = "MacOS";
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = "iOS";
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = "Windows";
        } else if (/Android/.test(userAgent)) {
            os = "Android";
        } else if (!os && /Linux/.test(platform)) {
            os = "Linux";
        }
        this.shadowRoot.querySelector('.hero-os-display').innerText = "For " + os;

    }
}

customElements.define('download-hero', DownloadHero);