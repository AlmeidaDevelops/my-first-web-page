class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const title = this.getAttribute('project-title') || '';
    const imgSrc = this.getAttribute('img-src') || '';
    const imgAlt = this.getAttribute('img-alt') || 'Project image';
    const technologies = this.getAttribute('technologies') || '';
    const linkHref = this.getAttribute('link-href') || '#';
    const linkText = this.getAttribute('link-text') || 'Learn more';

    this.shadowRoot.innerHTML = `
      <style>
        article {
          margin-top: 1rem;
          border-radius: 1rem;
          padding: 1rem;
          background-color: var(--color-light-white);
          box-shadow: inset 0 0 0 0.25rem var(--color-dark-black);
          font-family: 'Baloo 2';
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
        }
        p {
          font-weight: 600;
          text-align: justify;
          margin: 0.5rem 0;
        }
        .link-container {
          text-align: center;
          margin-top: 1rem;
        }
        a {
          display: inline-block;
          padding: 1rem;
          border-radius: 1rem;
          background-color: var(--color-light-white);
          box-shadow: inset 0 0 0 0.25rem var(--color-dark-black);
          text-decoration: none;
          color: var(--color-dark-black);
          font-weight: 800;
        }
      </style>
      <article>
        <h3>${title}</h3>
        <img src="${imgSrc}" alt="${imgAlt}">
        <div>
          <slot></slot> <!-- Here goes the description -->
          <p><strong>Technologies used:</strong> ${technologies}</p>
        </div>
        <div class="link-container">
          <a href="${linkHref}">${linkText}</a>
        </div>
      </article>
    `;
  }
}

customElements.define('project-card', ProjectCard);
