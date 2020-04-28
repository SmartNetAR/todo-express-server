
const controlador = new Controlador()

window.addEventListener("load", () => {
    const vista = new Vista( controlador )
    vista.load()
})