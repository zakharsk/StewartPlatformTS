import { OrthographicCamera, Vector3, Vector4 } from 'three'
import { winWidth, winHeight, H } from './sizes'

export interface ExtendedCamera {
    renderTarget: OrthographicCamera
    renderViewport: Vector4
}

function createCamera(posX: number, posY: number, posZ: number, look: Vector3, viewport: Vector4): ExtendedCamera {
    const camera = new OrthographicCamera(winWidth/-4, winWidth/4, winHeight/4, winHeight/-4, 1, 1000)
    camera.position.set(posX, posY, posZ)
    camera.lookAt(look)

    return {
        renderTarget: camera,
        renderViewport: viewport
    }
}
const camAxisDistance = 300;

const look = {
    home: new Vector3(0, -H/2, 0),
    front: new Vector3(0, -H/2, 0),
    right: new Vector3(0, -H/2, 0),
    top: new Vector3(0, -H/2, 0)
}

const viewport = {
    home: new Vector4(0, Math.floor(winHeight/2), Math.floor(winWidth/2), Math.floor(winHeight/2)),
    front: new Vector4(Math.floor(winWidth/2), Math.floor(winHeight/2), Math.floor(winWidth/2), Math.floor(winHeight/2)),
    right: new Vector4(0, 0, Math.floor(winWidth/2), Math.floor(winHeight/2)),
    top: new Vector4(Math.floor(winWidth/2), 0, Math.floor(winWidth/2), Math.floor(winHeight/2))
}

export const
    homeCamera = createCamera(camAxisDistance, camAxisDistance, camAxisDistance, look.home, viewport.home),
    frontCamera = createCamera(0, -H/2, camAxisDistance, look.front, viewport.front),
    rightCamera = createCamera(camAxisDistance, -H/2, 0, look.right, viewport.right),
    topCamera = createCamera(0, camAxisDistance, 0, look.top, viewport.top)
