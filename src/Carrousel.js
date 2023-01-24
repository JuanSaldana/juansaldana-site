import "./Carrousel.css";
import typewriter from "./images/typewriter.jpg";

function Carrousel() {
  return (
    <div class="CarrouselLayout">
      <nav class="nav-bar">
        <div id="nav-logo-section" class="nav-section">
          <a href="#">
            <i class="ri-menu-2-fill"></i>
          </a>
        </div>
        <div id="nav-link-section" class="nav-section">
          <a href="#">ABOUT</a>
          <a href="#">WORK</a>
        </div>
        <div id="nav-social-section" class="nav-section">
          <a href="#">
            <i class="ri-linkedin-box-fill"></i>
          </a>
          <a href="#">
            <i class="ri-github-fill"></i>
          </a>
        </div>
        <div id="nav-contact-section" class="nav-section">
          <a href="#">GET IN TOUCH</a>
        </div>
      </nav>
      <main>
        <article id="typewriter">
          <div class="article-image-section article-section"></div>
          <div class="article-description-section article-section">
            <p>
              Lorem ipsum Eiusmod sint cillum occaecat irure minim. Voluptate
              occaecat labore minim incididunt fugiat ea consectetur aliquip
              sint veniam quis voluptate. Minim sint ea Lorem tempor commodo.
            </p>
          </div>
          <div class="article-title-section article-section">
            <h2>Typewriter title, looking nice, checking third line</h2>
            <a>
              <i class="ri-add-line"></i>
            </a>
          </div>
          <div class="article-nav-section article-section">
            <a>
              <i class="ri-arrow-left-line"></i>
            </a>
            <a>
              <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </main>
    </div>
  );
}

export default Carrousel;
