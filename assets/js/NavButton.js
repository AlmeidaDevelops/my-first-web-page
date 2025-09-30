class NavButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('text') || 'Button';
    const href = this.getAttribute('href') || '#';

    this.shadowRoot.innerHTML = `
      <style>
        li {
          list-style: none;
        }
        a {
          display: block;
          padding: 0.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-family: 'Baloo 2';
          font-weight: 800;
        }
        :host([preset="purple"]) a {
          background-color: var(--color-light-purple);
          box-shadow: var(--color-purple) 0rem 0.5rem;
          color: var(--color-dark-purple);
        }
        
        :host([preset="pink"]) a {
          background-color: var(--color-light-pink);
          box-shadow: var(--color-pink) 0rem 0.5rem;
          color: var(--color-dark-pink);
        }

        :host([preset="red"]) a {
          background-color: var(--color-light-red);
          box-shadow: var(--color-red) 0rem 0.5rem;
          color: var(--color-dark-red);
        }

        :host([preset="orange"]) a {
          background-color: var(--color-light-orange);
          box-shadow: var(--color-orange) 0rem 0.5rem;
          color: var(--color-dark-orange);
        }

        :host([preset="yellow"]) a {
          background-color: var(--color-light-yellow);
          box-shadow: var(--color-yellow) 0rem 0.5rem;
          color: var(--color-dark-yellow);
        }
        
        :host([preset="green"]) a {
          background-color: var(--color-light-green);
          box-shadow: var(--color-green) 0rem 0.5rem;
          color: var(--color-dark-green);
        }

        :host([preset="blue"]) a {
          background-color: var(--color-light-blue);
          box-shadow: var(--color-blue) 0rem 0.5rem;
          color: var(--color-dark-blue);
        }

        
      </style>
      <li><a href="${href}">${text}</a></li>
    `;
  }
}

customElements.define('nav-button', NavButton);
