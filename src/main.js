import './style.css'
import popofHtml from "./popofProject.js"
import numaHtml from "./numaProject.js"
import dkHtml from "./DK.js"
import tinyTroubleshtml from "./Tinytroubles.js"
// import natureMorteHtml from "./natureMorteHtml.js"  // archived
import aboutMe from './aboutMe.js'
import emptyTheBin from './emptyTheBin.js'
import epesse from "./epesse.js"
import pasTaTarte from './pasTaTarte.js'
import alerteSoiree from './alerteSoiree.js'
import musicClip from './musicClip.js'
import brandAd from './brandAd.js'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

document.querySelector('#app').innerHTML = `
<div class="main_container">
    <div id="img_scroll_bar">
      <div style="min-height: 50dvh;" class="placeHolder"></div>
      <div class="showReel">
        <iframe
          src="https://player.vimeo.com/video/930275465?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          title="Showreel 2024-2023"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div class="project_img video_preview" id="img10">
        <video src="./brand_ad/rocher_flottant.mp4" muted loop playsinline preload="metadata"></video>
      </div>
      <div class="project_img video_preview" id="img9">
        <video src="./H.LL/rendu_wip.mp4" muted loop playsinline preload="metadata"></video>
      </div>
      <img class="project_img" id="img8" src="./img/alerte_soiree.jpeg">
      <img class="project_img" id="img0" src="./img/pas-ta-tarte/7.png">
      <img class="project_img" id="img1" src="./numa.jpg">
      <img class="project_img" id="img2" src="./popof.jpg">
      <img class="project_img" id="img7" src="./img/epesse_black.jpg">
      <img class="project_img" id="img4" src="./DK.jpg">
      <img class="project_img" id="img5" src="./tinytrouble.jpg">
      <!-- <img class="project_img" id="img6" src="./stillLife.jpg"> archived -->

      <div class="project_img" id="emptyTheBin"></div>
      <img class="project_img" id="aboutMe" src="./img/pp.jpeg">
      
    </div>
    <div>
      <section id="title">
        <h1 class="titleLine">Portfolio</h1>
        <h1 class="titleLine">Jérémie J.</h1>
      </section>
    </div>
  </div>
  <div id="projectPage">
    <h1 id="backButton">back</h1>
    <div id="contentPage"></div>
  </div>
  <div id="scrollHint">scroll down to see more</div>
`

const scrollBar = document.querySelector('#img_scroll_bar')
const scrollItems = scrollBar.querySelectorAll('img, .showReel, #Contact, #emptyTheBin, .video_preview')
const clickableItem = scrollBar.querySelectorAll('img, div')
const title = document.getElementById("title")
const projectPage = document.getElementById('projectPage')
const contentPage = document.getElementById('contentPage')
const mainContainer = document.querySelector(".main_container")
console.log(mainContainer);


// Video thumbnails: the video plays (with a fade) only while its project is
// the focused one.
const videoPreviews = [...scrollBar.querySelectorAll('.video_preview')].map((el) => {
  const preview = { el, video: el.querySelector('video'), focused: false, pauseTimer: null }
  preview.video.addEventListener('playing', () => {
    if (preview.focused) el.classList.add('is-playing')
  })
  return preview
})

function updateVideoPreviews(key) {
  videoPreviews.forEach((preview) => {
    const focused = key === preview.el.id
    if (focused === preview.focused) return
    preview.focused = focused
    clearTimeout(preview.pauseTimer)
    if (focused) {
      if (!preview.video.paused) preview.el.classList.add('is-playing')
      preview.video.play().catch(() => {})
    } else {
      preview.el.classList.remove('is-playing')
      preview.pauseTimer = setTimeout(() => preview.video.pause(), 800)
    }
  })
}

const titleMap = {
  img10: ["ROCK", "PROJECT (WIP)", brandAd],
  img9: ["MUSIC", "CLIP (WIP)", musicClip],
  img8: ["2221", "", alerteSoiree],
  img0: ["48H FILM", "PROJECT", pasTaTarte],
  img1: ["NUMA", "SUPPLY", numaHtml],
  img2: ["POPOF", "??????", popofHtml],
  img4: ["DIGITAL", "KINGDOM", dkHtml],
  img5: ["TINY", "TROUBLES", tinyTroubleshtml],
  img7: ["EPESSES", "EN FETE", epesse],
  // img6: ["NATURE", "MORTE", natureMorteHtml],  // archived
  emptyTheBin: ["EMPTY", "THE BIN", emptyTheBin],
  aboutMe: ["ABOUT", "ME", aboutMe],
  default: ["Portfolio", "Jérémie J."],
}

var x = window.matchMedia("(max-width: 500px)")
let userHasScrolled = false

// "scroll down" banner state (mobile): shown when settled on a project, hidden
// for good once the user actually scrolls down.
let verticalScrollDone = false
let settleTimer = null

// Project currently focused in the scroll bar. The title and the project page
// are only (re)rendered when it changes: re-rendering on every scroll event
// reloads all the videos/iframes of the page.
let currentKey = null

function renderProject(key) {
  const [, , content] = titleMap[key] || titleMap.default
  if (typeof content === "function") {
    content(contentPage)
  } else {
    contentPage.innerHTML = content || ""
  }
}

function getFocusedItem() {
  let closestItem = null
  let closestDistance = Infinity

  scrollItems.forEach((item) => {
    const rect = item.getBoundingClientRect()
    const distance = x.matches
      ? Math.abs(rect.left + rect.width / 2 - window.innerWidth / 2)
      : Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
    if (distance < closestDistance) {
      closestDistance = distance
      closestItem = item
    }
  })
  return closestItem
}

scrollBar.addEventListener('scroll', () => {
  const closestItem = getFocusedItem()

  if (closestItem) {
    const key = closestItem.id ||
      (closestItem.classList.contains("showReel") ? "showReel" : "default")

    if (key !== currentKey) {
      currentKey = key
      document.documentElement.classList.toggle('theme-alerte', key === 'img8')
      updateVideoPreviews(key)
      const [line1, line2] = titleMap[key] || titleMap.default
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `
      if (x.matches) {
        renderProject(key)
      }
    }

    if (x.matches) {
      if (key === "showReel") {
        projectPage.style.display = "none"
        app.classList.remove("hint-bar", "hint-nudge")
      } else {
        projectPage.style.display = "block"
      }
    }
  }

  // Once the user has genuinely browsed and settles on a real project (at the
  // top of #app), slide the "scroll down" banner up and nudge the page with it.
  if (x.matches && userHasScrolled && !verticalScrollDone) {
    clearTimeout(settleTimer)
    settleTimer = setTimeout(() => {
      if (projectPage.style.display !== "none" && app.scrollTop < 20) {
        app.classList.add("hint-bar", "hint-nudge")
      }
    }, 500)
  }
})

// Clicking a thumbnail opens the focused project. Registered once.
clickableItem.forEach(item => {
  item.addEventListener("click", function (event) {
    if (x.matches) return
    event.stopPropagation()
    if (!currentKey) return
    projectPage.style.right = "0dvw"
    renderProject(currentKey)
  })
})

scrollBar.addEventListener("click", function () {
  if (x.matches) projectPage.scrollIntoView()
})

document.getElementById("backButton").addEventListener("click", function () {
  projectPage.style.right = "-100dvw"
})

const words = ["_", "Open_", "Open to_", "Open to work_", "Open to work :)_"]
let index = 0
let titleInterval

function animateTitle() {
  document.title = words[index]
  index = (index + 1) % words.length
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    titleInterval = setInterval(animateTitle, 800)
  } else {
    clearInterval(titleInterval)
    document.title = "Jérémie Jaouen"
    index = 0
  }
})

const favicon = document.getElementById("favicon")
const frames = [
  "./img/favicon/favicon.svg",
  "./img/favicon/1.svg",
  "./img/favicon/2.svg",
  "./img/favicon/3.svg",
  "./img/favicon/2.svg",
  "./img/favicon/1.svg",
]

let i = 0
let faviconInterval

frames.forEach(src => {
  const img = new Image()
  img.src = src
})

function setFavicon(src) {
  const old = document.getElementById("favicon")
  if (old) old.remove()
  const link = document.createElement("link")
  link.id = "favicon"
  link.rel = "icon"
  link.type = "image/svg+xml"
  link.href = src
  document.head.appendChild(link)
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    faviconInterval = setInterval(() => {
      setFavicon(frames[i % frames.length])
      i++
    }, 500)
  } else {
    clearInterval(faviconInterval)
    setFavicon(frames[0])
    i = 0
  }
})

const container = document.getElementById("emptyTheBin")
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(container.clientWidth, container.clientHeight)
container.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(10, container.clientWidth / container.clientHeight, 0.1, 1000)
if (x.matches) {
  camera.position.z = 20
} else {
  camera.position.z = 30
}

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial()
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const loader = new GLTFLoader()
loader.load('./trash.glb', (gltf) => {
  const model = gltf.scene
  model.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshNormalMaterial()
    }
  })
  scene.add(model)
  function animate() {
    requestAnimationFrame(animate)
    if (model) {
      model.rotation.x += 0.01
      model.rotation.y += 0.01
    }
    renderer.render(scene, camera)
  }
  animate()
}, undefined, (error) => {
  console.error('Erreur lors du chargement du modèle :', error)
})



// check if it is read on MAC or WINDOW (solve font render engine for murmure)
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  const style = document.createElement('style');
  style.innerHTML = `
  .titleLine::before {
  content: "";
	display: table;
	margin-bottom: calc(-0.5lh + 0.56em);
}

.titleLine::after {
  content: "";
	display: table;
	margin-bottom: calc(-0.5lh + 0.29em);
}
`;
  document.head.appendChild(style);
}

const app = document.getElementById("app");

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function fakeScrollHint() {
  if (userHasScrolled) return
  const bar = document.getElementById("img_scroll_bar")
  const axis = x.matches ? "scrollLeft" : "scrollTop" // mobile = horizontal, desktop = vertical
  const peekDistance = 130
  const outDuration = 700
  const backDuration = 600
  const pauseBetween = 900
  const maxCycles = 3
  let cycle = 0
  let start = null

  function animateOut(timestamp) {
    if (userHasScrolled) return
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / outDuration, 1)
    bar[axis] = peekDistance * easeInOutQuad(progress)
    if (progress < 1) {
      requestAnimationFrame(animateOut)
    } else {
      start = null
      requestAnimationFrame(animateBack)
    }
  }

  function animateBack(timestamp) {
    if (userHasScrolled) return
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / backDuration, 1)
    bar[axis] = peekDistance * (1 - easeInOutQuad(progress))
    if (progress < 1) {
      requestAnimationFrame(animateBack)
    } else {
      cycle++
      if (cycle < maxCycles && !userHasScrolled) {
        start = null
        setTimeout(() => requestAnimationFrame(animateOut), pauseBetween)
      }
    }
  }

  requestAnimationFrame(animateOut)
}

setTimeout(fakeScrollHint, 1500);

// A genuine user gesture cancels the scroll hint. (We can't rely on scroll
// events: the hint scrolls programmatically.)
["touchstart", "pointerdown", "wheel", "keydown"].forEach((evt) => {
  window.addEventListener(evt, () => { userHasScrolled = true }, { passive: true, once: true })
})

// As the user scrolls down into a project, slide the banner away but keep the
// content nudge static (so the scroll stays fluid); reset the nudge only once
// they're back at the top, at rest. After the first scroll-down it's done.
app.addEventListener("scroll", () => {
  if (app.scrollTop > 20) {
    verticalScrollDone = true
    clearTimeout(settleTimer)
    app.classList.remove("hint-bar")
  } else if (verticalScrollDone) {
    app.classList.remove("hint-nudge")
  }
})