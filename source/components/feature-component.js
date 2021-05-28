class featureComponent extends HTMLElement {
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
          .feature.vertical-align {
            flex-direction: column-reverse;
            text-align: center;
          }
          .feature.alternate-background-color {
            background-color: #F9F6E7;
          }
          .feature-title-text {
            color: #344FA1;
          }
          .feature-title-text.alternate-title-color {
            color: #3F3697;
          }
          .feature-description {
            max-width: 450px;
            margin-bottom: 50px;
          }
          .feature-description.vertical-align {
            max-width: 400px;
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
          .feature-image-section.mini {            
            margin-right: 25%;
            margin-left: 10%;
            margin-bottom: 50px;
          }
          .feature-image-section.swap-image-and-text {
            margin-left: 5%;
            margin-right: 0;
            margin-bottom: 50px;
          }
          .feature-image-section.swap-image-and-text.mini {
            margin-left: 25%;
            margin-right: 10%;
          }
          .feature-image-section.vertical-align {
            margin-left: 0;
            margin-right: 0;
          }
          .feature-text-section.vertical-align {
            margin-left: 0;
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
            max-width: 450px;
          }
          h3.mini {
            font-size: 36px;
            line-height: 28px;
            font-weight: bold;
            line-height: 36px;
            max-width: 335px;
          }
          p {
            font-size: 30px;
            font-family: Mulish;
            font-weight: 400;
          }
          p.mini {
            font-size: 22px;
            line-height:28px;
            max-width: 335px;
          }
          img {
            border: solid #344FA1;
          }
          img.alternate-border-color {
            border: solid #3F3697;
          }
          img.mini {
            width: 200px;
          }
          img.big {
            width: 550px;
          }
          @media (min-width: 1199px) {
            img.big {
              width: 550px;
            }
          }
          @media (max-width: 1198px) {
            img.big {
              width: 400px;
            }
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
    const imgSize = this.getAttribute('imgSize');
    const alignment = this.getAttribute('alignment');
    const alternateBackgroundColor = this.getAttribute('alternateBackgroundColor');
    const alternateTitleColor = this.getAttribute('alternateTitleColor');
    const alternateBorderColor = this.getAttribute('alternateBorderColor');
    const textSize = this.getAttribute('textSize');

    // Apply css classes based on value of attributes
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

    if(imgSize === "mini") {
      this.shadowRoot.querySelector('img').classList.add("mini");
      this.shadowRoot.querySelector('.feature-image-section').classList.add("mini");
    } else if (imgSize === "big") {
      this.shadowRoot.querySelector('img').classList.add("big");
    }

    if(alignment === "vertical") {
      this.shadowRoot.querySelector('.feature').classList.add("vertical-align");
      this.shadowRoot.querySelector('.feature-image-section').classList.add("vertical-align");
      this.shadowRoot.querySelector('.feature-text-section').classList.add("vertical-align");
    } else if (alignment === "right") {
      this.shadowRoot.querySelector('.feature').classList.add("swap-image-and-text");
      this.shadowRoot.querySelector('.feature-image-section').classList.add("swap-image-and-text");
    }

    if(alternateBackgroundColor === "true") {
      this.shadowRoot.querySelector('.feature').classList.add("alternate-background-color");
    }

    if(alternateTitleColor) {
      this.shadowRoot.querySelector('.feature-title-text').classList.add("alternate-title-color");
    }

    if(alternateBorderColor === "true") {
      this.shadowRoot.querySelector('img').classList.add("alternate-border-color");
    }
    
    if(textSize === "mini") {
      this.shadowRoot.querySelector('h3').classList.add("mini");
      this.shadowRoot.querySelector('p').classList.add("mini");
    }
  }
}

customElements.define('feature-component', featureComponent);