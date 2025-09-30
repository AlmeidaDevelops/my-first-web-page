class ListBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        div {
          box-sizing: border-box;
          list-style: none;
          padding: 1rem;
          margin: 2rem auto;
          max-width: 60rem;
          box-shadow: inset 0 0 0 0.25rem var(--color-dark-black);
          border-radius: 1rem;
          background-color: var(--color-light-white);
          font-family: 'Baloo 2';
        }
        ::slotted(ul) {
          list-style: none;
          padding-left: 0;
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('list-box', ListBox);
