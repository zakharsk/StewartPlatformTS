import { renderer, render } from './renderer'
import { updateScene } from './scene'
import { createGUI } from './gui'
import { calculateQuaternion } from './quaternion'

const root = document.body
const qSpan = document.createElement('span')

const controls = {
    xMove: 0,
    xRotation: 0,
    yMove: 0,
    yRotation: 0,
    zMove: 0,
    zRotation: 0,
    reset: function () {
        controls.xMove = 0
        controls.xRotation = 0
        controls.yMove = 0
        controls.yRotation = 0
        controls.zMove = 0
        controls.zRotation = 0
        updateQuaternion()
    }
}

function updateQuaternion() {
    const quaternion = calculateQuaternion(controls)
    qSpan.textContent = `Q = 
    ${quaternion.x.toString()}x + 
    ${quaternion.y.toString()}y + 
    ${quaternion.z.toString()}z +
    ${quaternion.w.toString()}w
    `
}

function init() {
    function insertGUI(): void {
        const gui = createGUI(controls, updateQuaternion)
        const guiDiv = document.createElement('div')
        guiDiv.id = 'gui'
        guiDiv.appendChild(gui.domElement)
        root.appendChild(guiDiv)

        gui.open()
    }

    function insertQuaternionLabel(): void {
        const qDiv = document.createElement('div')
        qDiv.id = 'q'

        qDiv.append(qSpan)
        root.appendChild(qDiv)
    }

    insertGUI()
    insertQuaternionLabel()
    updateQuaternion()
    root.appendChild(renderer.domElement)
}

function animate() {
    updateScene()
    render()
    requestAnimationFrame(animate)
}

init()
animate()

