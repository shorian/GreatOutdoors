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
         <nav id="navbar">
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

class RecentPosts extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("style", "display: contents;");

    this.innerHTML = `
    <nav id="recent" class="cell">
            <h3>Recent Posts</h3>
    <ul>
        <li><a href="./lake.html">Trip Report: Lake 22</a><br>February 13, , 2025</li>
        <li><a href="./snowshoe.html">Quieter spots for snowshoeing close to home</a><br> January 27, 2025</li>
        <li><a href="./forest.html">Trip Report: Deer Canyon</a><br> December 19, 2025</li>
        <li><a href="./daypack.html">My new favorite daypack</a><br> November 30, 2025</li>
    </ul>
    </nav>
      `;
  }
}

customElements.define("banner-component", Banner);
customElements.define("navbar-component", NavBar);
customElements.define("recent-posts", RecentPosts);
