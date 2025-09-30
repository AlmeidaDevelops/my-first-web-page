class SkillCategory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('category-title') || '';

    this.shadowRoot.innerHTML = `
      <style>
        div {
          margin-top: 1rem;
          border-radius: 1rem;
          padding: 1rem;
          box-shadow: inset 0 0 0 0.25rem var(--color-dark-black);
          font-family: 'Baloo 2';
          font-weight: 600;
        }
        h3 {
          font-weight: 800;
          margin: 0 0 0.5rem 0;
        }
      </style>
      <div>
        <h3>${title}</h3>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('skill-category', SkillCategory);
