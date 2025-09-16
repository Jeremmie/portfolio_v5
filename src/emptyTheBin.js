export default function emptyTheBin(container) {
    container.innerHTML = `
    <div class="ETB_main_container">
      <div class="ETB_grid_container">
        <div class="ETB_grid_item">
          <div style="height: 100%;width: 100%;">
            <iframe src="https://player.vimeo.com/video/910803323?badge=0&autoplay=1&muted=1&loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="width: auto;height: 100%;" title="square"></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div
          style="
            grid-column: auto / span 2;
            display: flex;
            flex-direction: column;
          "
          class="ETB_grid_item"
        >
          <div style="height: 100%;width: 100%;background: black">
            <iframe src="https://player.vimeo.com/video/743324917?badge=0&loop=1&muted=1&autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="width: 100%;height: 100%;" title="2022.01.17_parallaxe_JeremieJaouen_ID401.mov"></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div class="ETB_grid_item">
          <iframe style="width: 100%;" src="https://gameboy-jeremie.netlify.app//"></iframe>
        </div>
        <div id="gridGalaxy" class="ETB_grid_item">
          <iframe style="width: 100%;" src="https://jeremmie.github.io/galaxy_generator_animate-build-/"></iframe>
        </div>
        <div class="gridBubu">
         
        </div>
        <div id="gridSerif" class="ETB_grid_item">
          <iframe
            id="gridSerifVideo"
            class="ETB_embbed"
            style="height: 250px;"
            width="560"
            height="515"
            src="https://www.youtube-nocookie.com/embed/78yfQnmYKKc?si=OfkMqdxE8BlA_FKO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <a>
            "SERIF, un zeu de cowboy" is a game we made with the Digital Kingdom team during a 48h game jam.
          </a>
          <iframe
            class="ETB_embbed"
            frameborder="0"
            src="https://itch.io/embed/1932594"
            width="552"
            height="167"
          >
            <a href="https://peche-et-traditions.itch.io/serif">Serif by Peche et Traditions, Elio Ramel</a>
          </iframe>
        </div>
      </div>
    </div>
  `;


}
