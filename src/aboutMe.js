export default function renderAboutMe(container) {
    container.innerHTML = `
    <div class="aboutMe_main_container">
      <div>
        <h1>As a junior 3D generalist and junior motion capture specialist, I am passionate about discovering new ways to illustrate ideas, send messages and, above all, create cool stuff. I love diving into a universe and contributing to enrich it.</h1>
      </div>
      <div class="link_container">
        <img class="link_container_img" src="./img/arrow.svg"></img> <a class="link_container_a" href="https://www.instagram.com/jeremmiee/"> <h1>Instagram</h1> </a>
      </div>
      <div class="link_container">
        <img class="link_container_img" src="./img/arrow.svg"></img> <a class="link_container_a" href="https://www.linkedin.com/in/jeremiejaouen/"> <h1>Linkedin</h1> </a>
      </div>
      <div class="link_container">
        <img class="link_container_img" src="./img/arrow.svg"></img> <a class="link_container_a" href="https://sketchfab.com/Jeremie03/"> <h1>Sketchfab</h1> </a>
      </div>
      <h1>Or send me a message, I would be super happy to talk with you!</h1>
      <h1 id="copyEmail">contact@jeremiejaouen.ch</h1>
    </div>
  `

    const emailCopy = document.getElementById("copyEmail")
    emailCopy.addEventListener("click", () => {
        navigator.clipboard.writeText("contact@jeremiejaouen.ch")
        emailCopy.style.fontStyle = "italic"
        emailCopy.innerHTML = `copied to clipboard`
        setTimeout(() => {
            emailCopy.style.fontStyle = "normal"
            emailCopy.innerHTML = `contact@jeremiejaouen.ch`
        }, 1000);
    })
}
