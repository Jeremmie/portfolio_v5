export default function emptyTheBin(container) {
  container.innerHTML = `
    <div class="ETB_main_container">
      <div class="ETB_grid_container">
        <div class="ETB_grid_item ETB_square">
          <iframe src="https://player.vimeo.com/video/910803323?badge=0&autoplay=1&muted=1&loop=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="square"></iframe>
        </div>
        <div class="ETB_grid_item ETB_parallax">
          <iframe src="https://player.vimeo.com/video/743324917?badge=0&loop=1&muted=1&autoplay=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="2022.01.17_parallaxe_JeremieJaouen_ID401.mov"></iframe>
        </div>
        <div class="ETB_grid_item ETB_rocher">
          <video src="./rocher flottant.mp4" autoplay loop muted playsinline></video>
        </div>
        <div class="ETB_grid_item ETB_galaxy">
          <iframe src="https://jeremmie.github.io/galaxy_generator_animate-build-/"></iframe>
        </div>
        <div class="ETB_grid_item ETB_bubu"></div>
        <div class="ETB_grid_item ETB_serif">
          <iframe
            class="ETB_embbed ETB_serif_video"
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
            height="167"
          >
            <a href="https://peche-et-traditions.itch.io/serif">Serif by Peche et Traditions, Elio Ramel</a>
          </iframe>
        </div>
        <div class="ETB_grid_item ETB_gameboy">
          <iframe src="https://gameboy-jeremie.netlify.app//"></iframe>
        </div>
      </div>
    </div>
  `;


}
TODO: "changer png to jpg"
