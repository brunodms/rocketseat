function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  // se tiver light mode, adicionar a imagem light
  // se tiver sem light mode, manter a imagem normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar.png")
  } else {
    img.setAttribute("src", "assets/avatar.png")
  }
}
