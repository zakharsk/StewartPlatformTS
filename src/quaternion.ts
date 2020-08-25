import { Quaternion, Vector3 } from 'three'

import { Controls } from './gui'

function deg2rad(deg: number): number {
    return Math.PI/180 * deg
}

function calculateQuaternion(controls: Controls): Quaternion {
    const xMoveVector = new Vector3(controls.xMove, 0,0)
    const xAngle = deg2rad(controls.xRotation)
    const xQ = new Quaternion().setFromAxisAngle(xMoveVector, xAngle)
    return xQ
}

export { calculateQuaternion }
