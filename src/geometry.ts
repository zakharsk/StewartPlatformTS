import {BufferGeometry, Quaternion, Vector3} from 'three'

import { getPoints } from './points'

function getGeometry(move: Vector3, rotation: Quaternion){
    const points = getPoints(move, rotation)
    return {
        bottom: new BufferGeometry().setFromPoints(points.bottom),
        top: new BufferGeometry().setFromPoints(points.top),
        aActuator: new BufferGeometry().setFromPoints([points.bottom[0], points.top[0]]),
        bActuator: new BufferGeometry().setFromPoints([points.bottom[1], points.top[1]]),
        cActuator: new BufferGeometry().setFromPoints([points.bottom[2], points.top[2]]),
        dActuator: new BufferGeometry().setFromPoints([points.bottom[3], points.top[3]]),
        eActuator: new BufferGeometry().setFromPoints([points.bottom[4], points.top[4]]),
        fActuator: new BufferGeometry().setFromPoints([points.bottom[5], points.top[5]])
    }
}

export { getGeometry }
