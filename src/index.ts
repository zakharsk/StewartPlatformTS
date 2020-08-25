import {AxesHelper } from 'three'

import { renderer } from './renderer'
import { scene } from './scene'
import { ExtendedCamera, homeCamera, frontCamera, rightCamera, topCamera } from './cameras'
import { bottomPoints, bottomPlate, topPoints, topPlate } from './mesh'

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

    function insertMeshes(): void {
        scene
            .add(bottomPoints)
            .add(bottomPlate)
            .add(topPoints)
            .add(topPlate)

    }

    clearScene()
    insertAxesHelper()
    insertMeshes()

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

