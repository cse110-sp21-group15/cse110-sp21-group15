class aFeature extends HTMLElement {
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
          .feature {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding-top: 91px;
          }
          .feature.swap-image-and-text {
            flex-direction: row-reverse;
            text-align: right;
          }
          .feature.alternate-background-color {
            background-color: #F9F6E7;
          }
          .feature-title-text {
            color: #344FA1;
          }
          .feature-description {
            max-width: 450px;
            margin-bottom: 50px;
          }
          .feature-text-section {
            display: flex;
            flex-direction: column;
            margin-left: 5%;
            margin-right: 5%;
          }
          .feature-image-section {            
            margin-right: 5%;
            margin-bottom: 50px;
          }
          .feature-image-section.swap-image-and-text {
            margin-left: 5%;
            margin-right: 0;
          }
          .feature-image {
            width: 400px;
            height: auto;
            border-radius: 5px;
          }
          h3 {
            margin: 0px;
            font-size: 48px;
            font-family: Amaranth;
            font-weight: 700;
          }
          p {
            font-size: 30px;
            font-family: Mulish;
            font-weight: 400;
          }
          img {
            border: solid #344FA1;
          }
        </style>

        <section class="feature">
            <section class="feature-text-section">
              <h3 class="feature-title-text"></h3> 
              <p class="feature-description"></p>
            </section>   

            <section class="feature-image-section">
              <img class="feature-image" 
                   src="./media/rapid-logging-example.png"
                   alt="please enter a valid path">
            </section>
        </section>
        `;
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // Get attributes
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const imgSrc = this.getAttribute('src');
    const imgWidth = this.getAttribute('width');
    const alternateBackgroundColor = this.getAttribute('alternateBackgroundColor');
    const swapImageAndText = this.getAttribute('swapImageAndText');

    // Set attributes
    if(title) {
      this.shadowRoot.querySelector('.feature-title-text').innerText = title;
    } else {
      this.shadowRoot.querySelector('.feature-title-text').innerText = "Enter Title"
    }

    if(description) {
      this.shadowRoot.querySelector('.feature-description').innerText = description;
    } else {
      this.shadowRoot.querySelector('.feature-description').innerText = 
        "Lorum ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos";
    }

    if(imgSrc) {
      this.shadowRoot.querySelector('.feature-image').src = String(imgSrc);
    } else {
      this.shadowRoot.querySelector('.feature-image').src = "";
    }

    if(alternateBackgroundColor) {
      this.shadowRoot.querySelector('.feature').classList.add("alternate-background-color");
    }

    if(swapImageAndText) {
      this.shadowRoot.querySelector('.feature').classList.add("swap-image-and-text");
      this.shadowRoot.querySelector('.feature-image-section').classList.add("swap-image-and-text");
    }

  }
}

customElements.define('a-feature', aFeature);