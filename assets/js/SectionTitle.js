class SectionTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const titleText = this.getAttribute('title-text') || 'Default Title';

    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          box-sizing: border-box;
          font-size: 1.5em;
          text-align: left;
          margin: 2rem auto;
          padding: 1rem;
          max-width: 60rem;
          border-radius: 1rem;
          /* We get font-family and font-weight from the main page by default */
          font-family: 'Baloo 2';
          font-weight: 800;
        }

        :host([preset="purple"]) h2 {
          background-color: var(--color-light-purple);
          box-shadow: var(--color-purple) 0rem 1rem;
          color: var(--color-dark-purple);
        }

        :host([preset="pink"]) h2 {
          background-color: var(--color-light-pink);
          box-shadow: var(--color-pink) 0rem 1rem;
          color: var(--color-dark-pink);
        }

        :host([preset="red"]) h2 {
          background-color: var(--color-light-red);
          box-shadow: var(--color-red) 0rem 1rem;
          color: var(--color-dark-red);
        }

        :host([preset="orange"]) h2 {
          background-color: var(--color-light-orange);
          box-shadow: var(--color-orange) 0rem 1rem;
          color: var(--color-dark-orange);
        }

        :host([preset="green"]) h2 {
          background-color: var(--color-light-green);
          box-shadow: var(--color-green) 0rem 1rem;
          color: var(--color-dark-green);
        }

        :host([preset="yellow"]) h2 {
          background-color: var(--color-light-yellow);
          box-shadow: var(--color-yellow) 0rem 1rem;
          color: var(--color-dark-yellow);
        }

        :host([preset="blue"]) h2 {
          background-color: var(--color-light-blue);
          box-shadow: var(--color-blue) 0rem 1rem;
          color: var(--color-dark-blue);
        }
      </style>
      <h2>${titleText}</h2>
    `;
  }
}

customElements.define('section-title', SectionTitle);
