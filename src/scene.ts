import {Scene, Color, AxesHelper} from 'three'
import {
    aActuator,
    bActuator,
    bottomPlate,
    bottomPoints,
    cActuator,
    dActuator,
    eActuator, fActuator,
    topPlate,
    topPoints
} from "./mesh";

const scene = new Scene();
scene.background = new Color(0x2b2b2b)

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
            .add(aActuator)
            .add(bActuator)
            .add(cActuator)
            .add(dActuator)
            .add(eActuator)
            .add(fActuator)
    }

    clearScene()
    insertAxesHelper()
    insertMeshes()
}

export { scene, updateScene }
