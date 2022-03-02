
    let boton = document.querySelector(".reproductor")

    boton.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "../media/sound.mp3")
    etiquetaAudio.play()
})
