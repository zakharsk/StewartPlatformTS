import { Scene, Color, AxesHelper, Quaternion, Vector3 } from 'three'
import { getMeshes } from "./mesh";

const scene = new Scene();
scene.background = new Color(0x2b2b2b)

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

function insertMeshes(move: Vector3, rotation: Quaternion): void {
    const meshes = getMeshes(move, rotation)
    for (let mesh of meshes) {
        scene.add(mesh)
    }
}

function updateScene(move: Vector3, rotation: Quaternion) {
    clearScene()
    insertAxesHelper()
    insertMeshes(move, rotation)
}

export { scene, updateScene }
