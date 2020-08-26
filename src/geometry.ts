import {BufferGeometry, Quaternion, Vector3} from 'three'

import { getPoints } from './points'

function getGeometry(move: Vector3, rotation: Quaternion){
    const points = getPoints(move, rotation)
    const bottom = new BufferGeometry().setFromPoints(points.bottom)
    const top = new BufferGeometry().setFromPoints(points.top)
    const aActuator = new BufferGeometry().setFromPoints([points.bottom[0], points.top[0]])
    const bActuator = new BufferGeometry().setFromPoints([points.bottom[1], points.top[1]])
    const cActuator = new BufferGeometry().setFromPoints([points.bottom[2], points.top[2]])
    const dActuator = new BufferGeometry().setFromPoints([points.bottom[3], points.top[3]])
    const eActuator = new BufferGeometry().setFromPoints([points.bottom[4], points.top[4]])
    const fActuator = new BufferGeometry().setFromPoints([points.bottom[5], points.top[5]])

    return {
        bottom,
        top,
        aActuator,
        bActuator,
        cActuator,
        dActuator,
        eActuator,
        fActuator
    }
}

export { getGeometry }
