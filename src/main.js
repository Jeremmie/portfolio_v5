import './style.css'
import { setupCounter } from './counter.js'
import img2 from "/img_2.jpg"
import popofHtml from "./popofProject.js"
import numaHtml from "./numaProject.js"
import mdHtml from "./md.js"
import dkHtml from "./DK.js"
import tinyTroubleshtml from "./Tinytroubles.js"
import natureMorteHtml from "./natureMorteHtml.js"


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
<div style="min-height: 70vh;min-width: 80vw;background: none;" class="placeHolder" id="Contact"></div>
</div>
<div>
    <section id="title">
        <h1 class="titleLine">Portfolio</h1>
        <h1 class="titleLine">Jérémie J.</h1>
    </section>
    </div>
    </div>
<div id="projectPage"><h1 id="backButton">back</h1><div id="contentPage"></div></div>
`

const scrollBar = document.querySelector('#img_scroll_bar');

// on prend toutes les images + le showreel
const scrollItems = scrollBar.querySelectorAll('img, .showReel, #Contact');
const clickableItem = scrollBar.querySelectorAll('img, div');

const title = document.getElementById("title");
const projectPage = document.getElementById('projectPage')
const contentPage = document.getElementById('contentPage')

// dictionnaire qui mappe un id (ou une class) à du contenu HTML
const titleMap = {
  img1: ["NUMA", "SUPPLY", numaHtml],
  img2: ["POPOF", "??????", popofHtml],
  img3: ["RANDOM", "SHOT 1", mdHtml],
  img4: ["DIGITAL", "KINGDOM", dkHtml],
  img5: ["TINY", "TROUBLES", tinyTroubleshtml],
  img6: ["NATURE", "MORTE", natureMorteHtml],
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
      const [line1, line2, line3] = titleMap[key] || titleMap.default;

      // met à jour le titre
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `;
      contentPage.innerHTML = `
      ${line3}
      `
      if (key === "img3") {
        const secondLine = title.querySelectorAll(".titleLine")[1];

        function glitchLoop() {
          // attendre un délai random entre 1.5 et 3s
          const randomDelay = Math.random() * (8000 - 5000) + 5000;

          setTimeout(() => {
            // passe en "glitched"
            secondLine.textContent = "SH1T O";

            // après 0.5s on revient à l’original
            setTimeout(() => {
              secondLine.textContent = "SHOT 1";

              // on relance la boucle
              glitchLoop();
            }, 500);

          }, randomDelay);
        }

        glitchLoop();
      }


      // style --> quand page content est dispo
      if (closestItem.classList.contains("showReel")) {
        projectPage.style.height = "0vh";
        projectPage.style.minHeight = "0vh";
      } else {
        projectPage.style.height = "fit-content";
        projectPage.style.minHeight = "100vh";
      }
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
      const [line1, line2, line3] = titleMap[key] || titleMap.default;

      // met à jour le titre
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `;

      if (key === "img3") {
        const secondLine = title.querySelectorAll(".titleLine")[1];

        function glitchLoop() {
          const randomDelay = Math.random() * (6000 - 3000) + 3000;

          setTimeout(() => {
            secondLine.textContent = "SH1T O";

            setTimeout(() => {
              secondLine.textContent = "SHOT 1";

              glitchLoop();
            }, 500);

          }, randomDelay);
        }

        glitchLoop();
      }
      clickableItem.forEach(item => {
        item.addEventListener("click", function () {
          projectPage.style.right = "0vw"
          contentPage.innerHTML = `
          ${line3}
          `
        })
      })


    }
  }
});

if (x.matches) {

  document.getElementById("img_scroll_bar").addEventListener("click", function () {
    projectPage.scrollIntoView()

  })

}

document.getElementById("backButton").addEventListener("click", function () {
  projectPage.style.right = "-100vw"
})


const words = ["_", "Open_", "Open to_", "Open to work_", "Open to work :)_"];
let index = 0;
let titleInterval;

function animateTitle() {
  document.title = words[index];
  index = (index + 1) % words.length; // boucle
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // démarre l'animation du titre
    titleInterval = setInterval(animateTitle, 800);
  } else {
    // stoppe quand on revient
    clearInterval(titleInterval);
    document.title = "Jérémie Jaouen";
    index = 0; // reset pour recommencer depuis "Open"
  }
});



const favicon = document.getElementById("favicon");

// Liste des frames
const frames = [
  "./img/favicon/favicon.svg",
  "./img/favicon/1.svg",
  "./img/favicon/2.svg",
  "./img/favicon/3.svg",
  "./img/favicon/2.svg",
  "./img/favicon/1.svg",
];

let i = 0;
let faviconInterval;

// Précharger toutes les frames pour éviter de re-télécharger
frames.forEach(src => {
  const img = new Image();
  img.src = src;
});

function setFavicon(src) {
  // Supprime l’ancien favicon
  const old = document.getElementById("favicon");
  if (old) old.remove();

  // Crée un nouveau lien
  const link = document.createElement("link");
  link.id = "favicon";
  link.rel = "icon";
  link.type = "image/svg+xml";
  link.href = src; // pas besoin de ?v=Date.now()
  document.head.appendChild(link);
}

// Écoute la visibilité de la page
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Page inactive → anime le favicon
    faviconInterval = setInterval(() => {
      setFavicon(frames[i % frames.length]);
      i++;
    }, 500); // vitesse
  } else {
    // Page active → stoppe animation, revient sur la frame 1
    clearInterval(faviconInterval);
    setFavicon(frames[0]);
    i = 0;
  }
});



