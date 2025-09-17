import './style.css'
import popofHtml from "./popofProject.js"
import numaHtml from "./numaProject.js"
import mdHtml from "./md.js"
import dkHtml from "./DK.js"
import tinyTroubleshtml from "./Tinytroubles.js"
import natureMorteHtml from "./natureMorteHtml.js"
import aboutMe from './aboutMe.js'
import emptyTheBin from './emptyTheBin.js'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

document.querySelector('#app').innerHTML = `
  <div class="main_container">
    <div id="img_scroll_bar">
      <div style="min-height: 50vh;" class="placeHolder"></div>
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
      <img class="project_img" id="img1" src="./numa.jpg">
      <img class="project_img" id="img2" src="./popof.jpg">
      <img class="project_img" id="img3" src="./md.jpg">
      <img class="project_img" id="img4" src="./DK.jpg">
      <img class="project_img" id="img5" src="./tinytrouble.jpg">
      <img class="project_img" id="img6" src="./stillLife.jpg">
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
`

const scrollBar = document.querySelector('#img_scroll_bar')
const scrollItems = scrollBar.querySelectorAll('img, .showReel, #Contact, #emptyTheBin')
const clickableItem = scrollBar.querySelectorAll('img, div')
const title = document.getElementById("title")
const projectPage = document.getElementById('projectPage')
const contentPage = document.getElementById('contentPage')

const titleMap = {
  img1: ["NUMA", "SUPPLY", numaHtml],
  img2: ["POPOF", "??????", popofHtml],
  img3: ["RANDOM", "SHOT 1", mdHtml],
  img4: ["DIGITAL", "KINGDOM", dkHtml],
  img5: ["TINY", "TROUBLES", tinyTroubleshtml],
  img6: ["NATURE", "MORTE", natureMorteHtml],
  emptyTheBin: ["EMPTY", "THE BIN", emptyTheBin],
  aboutMe: ["ABOUT", "ME", aboutMe],
  default: ["Portfolio", "Jérémie J."],
}

var x = window.matchMedia("(max-width: 500px")

scrollBar.addEventListener('scroll', () => {
  if (x.matches) {
    let closestItem = null
    let closestDistance = Infinity

    scrollItems.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemMid = rect.left + rect.width / 2
      const distance = Math.abs(itemMid - window.innerWidth / 2)
      if (distance < closestDistance) {
        closestDistance = distance
        closestItem = item
      }
    })

    if (closestItem) {
      let key = closestItem.id ||
        (closestItem.classList.contains("showReel") ? "showReel" : "default")
      const [line1, line2, line3] = titleMap[key] || titleMap.default
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `
      if (typeof line3 === "function") {
        line3(contentPage)
      } else {
        contentPage.innerHTML = `
      ${line3}
      `
      }
      if (key === "img3") {
        const secondLine = title.querySelectorAll(".titleLine")[1]
        function glitchLoop() {
          const randomDelay = Math.random() * (8000 - 5000) + 5000
          setTimeout(() => {
            secondLine.textContent = "SH1T O"
            setTimeout(() => {
              secondLine.textContent = "SHOT 1"
              glitchLoop()
            }, 500)
          }, randomDelay)
        }
        glitchLoop()
      }
      if (closestItem.classList.contains("showReel")) {
        projectPage.style.display = "none"

      } else {
        projectPage.style.display = "block"
      }
    }
  } else {
    let closestItem = null
    let closestDistance = Infinity

    scrollItems.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemMid = rect.top + rect.height / 2
      const distance = Math.abs(itemMid - window.innerHeight / 2)
      if (distance < closestDistance) {
        closestDistance = distance
        closestItem = item
      }
    })

    if (closestItem) {
      let key = closestItem.id ||
        (closestItem.classList.contains("showReel") ? "showReel" : "default")
      const [line1, line2, line3] = titleMap[key] || titleMap.default
      title.innerHTML = `
        <h1 class="titleLine">${line1}</h1>
        <h1 class="titleLine">${line2}</h1>
      `
      if (key === "img3") {
        const secondLine = title.querySelectorAll(".titleLine")[1]
        function glitchLoop() {
          const randomDelay = Math.random() * (6000 - 3000) + 3000
          setTimeout(() => {
            secondLine.textContent = "SH1T O"
            setTimeout(() => {
              secondLine.textContent = "SHOT 1"
              glitchLoop()
            }, 500)
          }, randomDelay)
        }
        glitchLoop()
      }
      clickableItem.forEach(item => {
        item.addEventListener("click", function () {
          projectPage.style.right = "0vw"
          if (typeof line3 === "function") {
            line3(contentPage)
          } else {
            contentPage.innerHTML = `
            ${line3}
            `
          }
        })
      })
    }
  }
})

if (x.matches) {
  document.getElementById("img_scroll_bar").addEventListener("click", function () {
    projectPage.scrollIntoView()
  })
}

document.getElementById("backButton").addEventListener("click", function () {
  projectPage.style.right = "-100vw"
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



