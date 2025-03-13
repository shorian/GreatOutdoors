class Banner extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute("style", "display: contents;");

        this.innerHTML = `
        <script defer src="https://chirpy.dev/bootstrapper.js" data-chirpy-domain="shorian.githubpages.io"></script>
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
        <a href=""><img id="logo" src="/GreatOutdoors/assets/images/logo.png" alt="Great Outdoors" /></a>
        <ul>
          <li>
            <a href="/GreatOutdoors/index.html">Home</a>
          </li>
          <li>
            <a href="/GreatOutdoors/destinationPage.html">Destinations</a>
          </li>
          <li>
            <a href="/GreatOutdoors/blogHome.html">Blog</a>
          </li>
          <li>
            <a href="/GreatOutdoors/contact.html">Contact</a>
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
        <li><a href="/GreatOutdoors/destinations/lake.html">Trip Report: Lake 22</a><br>February 13, , 2025</li>
        <li><a href="/GreatOutdoors/blog/snowshoe.html">Quieter spots for snowshoeing close to home</a><br> January 27, 2025</li>
        <li><a href="/GreatOutdoors/destinations/forest.html">Trip Report: Deer Canyon</a><br> December 19, 2025</li>
        <li><a href="/GreatOutdoors/blog/daypack.html">My new favorite daypack</a><br> November 30, 2025</li>
    </ul>
    </nav>
      `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute("style", "display: contents;");

        this.innerHTML = `
              <footer id="site-footer">
        <ul>
          <li>©2025 Poul Nichols</li>
          <li><a href="/terms.html">Terms</a></li>
          <li>Enjoying The Great Outdoors? <a href="">Buy me a coffee</a></li>
        </ul>
      </footer>

      `;
    }
}

class Comments extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.setAttribute("style", "display: contents;");

        this.innerHTML = `
        <section class="cell">
        <div data-chirpy-theme="light" data-chirpy-comment="true" id="chirpy-comment"></div>
        </section>
      `;
    }
}

customElements.define("banner-component", Banner);
customElements.define("navbar-component", NavBar);
customElements.define("recent-posts", RecentPosts);
customElements.define("site-footer", Footer);
customElements.define("comments-component", Comments);
