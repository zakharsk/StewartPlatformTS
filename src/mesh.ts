import { Points, LineLoop, Line, Vector3, Quaternion, Object3D } from 'three'

import { getGeometry } from './geometry'
import { pointMaterial, plateMaterial, actuatorMaterial } from './materials'

function getMeshes(move: Vector3, rotation: Quaternion): Object3D[] {
    const geometry = getGeometry(move, rotation)

    return [
        new Points(geometry.bottom, pointMaterial),
        new LineLoop(geometry.bottom, plateMaterial),
        new Points(geometry.top, pointMaterial),
        new LineLoop(geometry.top, plateMaterial),
        new Line(geometry.aActuator, actuatorMaterial),
        new Line(geometry.bActuator, actuatorMaterial),
        new Line(geometry.cActuator, actuatorMaterial),
        new Line(geometry.dActuator, actuatorMaterial),
        new Line(geometry.eActuator, actuatorMaterial),
        new Line(geometry.fActuator, actuatorMaterial)
    ]
}

export { getMeshes }
