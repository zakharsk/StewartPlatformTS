import { renderer, render } from './renderer'
import { updateScene } from './scene'
import { gui } from './controls'

const root = document.body

function init() {
    root.appendChild(renderer.domElement)
    gui.open()
}

function animate() {
    updateScene()
    render()
    requestAnimationFrame(animate)
}

init()
animate()

