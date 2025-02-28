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
        <img id="logo" src="images/logo.png" alt="Great Outdoors" />
        <ul>
          <li onclick="location.href="./index.html';">
            <a href="index.html">Great Outdoors</a>
          </li>
          <li onclick="location.href='./mountain.html';">
            <a href="mountain.html">Climb the Mountain</a>
          </li>
          <li onclick="location.href='./forest.html';">
            <a href="forest.html">Wander the Forest</a>
          </li>
          <li onclick="location.href='./falls.html';">
            <a href="falls.html">See the Falls</a>
          </li>
          <li onclick="location.href='./ferry.html';">
            <a href="ferry.html">Ride the Ferry</a>
          </li>
          <li onclick="location.href='./lake.html';">
            <a href="lake.html">Walk Around the Lake</a>
          </li>
          <li onclick="location.href='./park.html';">
            <a href="park.html">Read in the Park</a>
          </li>
        </ul>
      </nav>
      `;
  }
}

customElements.define("banner-component", Banner);
customElements.define("navbar-component", NavBar);
