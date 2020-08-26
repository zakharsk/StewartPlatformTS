import { renderer, render } from './renderer'
import { updateScene } from './scene'
import { createGUI } from './gui'
import { calculateMoveVector, calculateRotationQuaternion } from './transformation'

const root = document.body
const transformationLabelSpan = document.createElement('span')

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
        updateTransformation()
    }
}

let moveVector = calculateMoveVector(controls)
let rotationQuaternion = calculateRotationQuaternion(controls)

function updateTransformation() {
    moveVector = calculateMoveVector(controls)
    rotationQuaternion = calculateRotationQuaternion(controls)

    transformationLabelSpan.innerHTML = `
    Move V = [
    ${moveVector.x.toString()},
    ${moveVector.y.toString()},
    ${moveVector.z.toString()}
    ]
    <br/>
    Rotation Q = 
    ${rotationQuaternion.x.toString()}x + 
    ${rotationQuaternion.y.toString()}y + 
    ${rotationQuaternion.z.toString()}z +
    ${rotationQuaternion.w.toString()}w
    `
}

function init() {
    function insertGUI(): void {
        const gui = createGUI(controls, updateTransformation)
        const guiDiv = document.createElement('div')
        guiDiv.id = 'gui'
        guiDiv.appendChild(gui.domElement)
        root.appendChild(guiDiv)

        gui.open()
    }

    function insertTransformationLabel(): void {
        const transformationLabelDiv = document.createElement('div')
        transformationLabelDiv.id = 'q'

        transformationLabelDiv.append(transformationLabelSpan)
        root.appendChild(transformationLabelDiv)
    }

    insertGUI()
    insertTransformationLabel()
    updateTransformation()
    root.appendChild(renderer.domElement)
}

function animate() {
    updateScene(moveVector, rotationQuaternion)
    render()
    requestAnimationFrame(animate)
}

init()
animate()

