class Banner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("style", "display: contents;");

    this.innerHTML = `
        <header id="banner">
          <h1>The Great Outdoors: A Poul Nichols Experience</h1>
      </header>
      `;
  }
}

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("style", "display: contents;");

    this.innerHTML = `
         <nav id="sidebar">
        <a href=""><img id="logo" src="images/logo.png" alt="Great Outdoors" /></a>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="destinationPage.html">Destinations</a>
          </li>
          <li>
            <a href="index.html">Blog</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("banner-component", Banner);
customElements.define("navbar-component", NavBar);
