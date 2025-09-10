import './style.css'
import { setupCounter } from './counter.js'
import img2 from "/img_2.jpg"



document.querySelector('#app').innerHTML = `
<div class="main_container">
<div id="img_scroll_bar">
<div class="placeHolder"></div>
<div class="showReel">
<iframe src="https://player.vimeo.com/video/930275465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Showreel 2024-2023"></iframe><script src="https://player.vimeo.com/api/player.js"></script></div>
<img class="project_img" id="img1" src="./numa.jpg">
<img class="project_img" id="img2" src="./popof.jpg">
<img class="project_img" id="img3" src="./md.jpg">
<img class="project_img" id="img4" src="./DK.jpg">
<img class="project_img" id="img5" src="./tinytrouble.jpg">
<img class="project_img" id="img6" src="./stillLife.jpg">
<img class="project_img" id="emptyTheBin" src="./bin.jpg">
<div style="min-height: 70vh;" class="placeHolder" id="Contact"></div>
</div>
<div>
    <section id="title">
        <h1 class="titleLine">Portfolio</h1>
        <h1 class="titleLine">Jérémie J.</h1>
    </section>
    </div>
    </div>
<div id="projectPage"><h1>test</h1></div>
`

const scrollBar = document.querySelector('#img_scroll_bar');

// on prend toutes les images + le showreel
const scrollItems = scrollBar.querySelectorAll('img, .showReel, #Contact');
const clickableItem = scrollBar.querySelectorAll('img, div');

const title = document.getElementById("title");

// dictionnaire qui mappe un id (ou une class) à du contenu HTML
const titleMap = {
  img1: ["NUMA", "SUPPLY"],
  img2: ["POPOF", "??????"],
  img3: ["RANDOM", "SH#T 1"],
  img4: ["DIGITAL", "KINGDOM"],
  img5: ["TINY", "TROUBLES"],
  img6: ["NATURE", "MORTE"],
  emptyTheBin: ["EMPTY", "THE BIN"],
  Contact: ["LET'S KEEP", "CONTACT"],
  default: ["Portfolio", "Jérémie J."],
};

// Media queries
var x = window.matchMedia("(max-width: 500px")

scrollBar.addEventListener('scroll', () => {
  if (x.matches) {
    let closestItem = null;
    let closestDistance = Infinity;

    scrollItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemMid = rect.left + rect.width / 2;

      const distance = Math.abs(itemMid - window.innerWidth / 2);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });



    if (closestItem) {
      // récupère la clé (id ou "showReel")
      let key = closestItem.id ||
        (closestItem.classList.contains("showReel") ? "showReel" : "default");

      // récupère le tableau [ligne1, ligne2] ou "default"
      const [line1, line2] = titleMap[key] || titleMap.default;

      // met à jour le titre
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `;
    }
  } else {

    let closestItem = null;
    let closestDistance = Infinity;

    scrollItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemMid = rect.top + rect.height / 2;

      const distance = Math.abs(itemMid - window.innerHeight / 2);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = item;
      }
    });


    if (closestItem) {
      // récupère la clé (id ou "showReel")
      let key = closestItem.id ||
        (closestItem.classList.contains("showReel") ? "showReel" : "default");

      // récupère le tableau [ligne1, ligne2] ou "default"
      const [line1, line2] = titleMap[key] || titleMap.default;

      // met à jour le titre
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `;
    }
  }
});
const projectPage = document.getElementById('projectPage')
clickableItem.forEach(item => {
  item.addEventListener("click", function () {
    projectPage.style.right = "0vw"
    console.log(item.id);

    if (item.id === "img2") {
      console.log("cbon");

      projectPage.innerHTML = `
    <h1>yo</h1>
      `
    }
  })
})
