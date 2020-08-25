import {AxesHelper, OrthographicCamera} from 'three'

import { renderer } from './renderer'
import { scene } from './scene'
import { ExtendedCamera, homeCamera, frontCamera, rightCamera, topCamera } from './cameras'

const root = document.body

function init() {
    root.appendChild(renderer.domElement)
}

function updateScene() {
    function clearScene(): void {
        while(scene.children.length > 0){
            scene.remove(scene.children[0]);
        }
    }

    function insertAxesHelper(): void {
        const axesSize = 500
        const axesHelper = new AxesHelper(axesSize)
        scene.add(axesHelper)
    }

    clearScene()
    insertAxesHelper()
}

function render() {
    const cameras: ExtendedCamera[] = [homeCamera, frontCamera, rightCamera, topCamera]
    for (let camera of cameras) {
        renderer.setViewport(camera.renderViewport)
        renderer.setScissor(camera.renderViewport)
        renderer.render(scene, camera.renderTarget)
    }

}

function animate() {
    updateScene()
    render()
    requestAnimationFrame(animate)
}

init()
animate()
