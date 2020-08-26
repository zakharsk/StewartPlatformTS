import { WebGLRenderer } from 'three'
import { winWidth, winHeight } from './sizes'
import { ExtendedCamera, frontCamera, homeCamera, rightCamera, topCamera } from "./cameras";
import { scene } from "./scene";

const renderer = new WebGLRenderer({ antialias: true, alpha: true})
renderer.setSize(winWidth, winHeight)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setScissorTest(true);

function render() {
    const cameras: ExtendedCamera[] = [homeCamera, frontCamera, rightCamera, topCamera]
    for (let camera of cameras) {
        renderer.setViewport(camera.renderViewport)
        renderer.setScissor(camera.renderViewport)
        renderer.render(scene, camera.renderTarget)
    }
}

export { renderer, render }
