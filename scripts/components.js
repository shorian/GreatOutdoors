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
            <a href="blogHome.html">Blog</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      `;
  }
}

class Comments extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("style", "display: contents;");

    this.innerHTML = `
    <section>
        <div
          id="convocomet-widget"
          data-page=""
          data-site="71937473052531"
          data-theme="light"
        ></div>
      </section>
      `;
  }
}

customElements.define("banner-component", Banner);
customElements.define("navbar-component", NavBar);
customElements.define("comments-component", Comments);
