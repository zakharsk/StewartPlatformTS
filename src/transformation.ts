import { Quaternion, Vector3 } from 'three'

import { Controls } from './gui'

function deg2rad(deg: number): number {
    return Math.PI/180 * deg
}

function calculateMoveVector(controls: Controls): Vector3 {
    const xMove = controls.xMove
    const yMove = controls.yMove
    const zMove = controls.zMove
    return new Vector3(xMove, yMove, zMove)
}

function calculateRotationQuaternion(controls: Controls): Quaternion {
    const xNormalVector = new Vector3(1, 0,0)
    const yNormalVector = new Vector3(0, 1,0)
    const zNormalVector = new Vector3(0, 0,1)

    const xAngle = deg2rad(controls.xRotation)
    const yAngle = deg2rad(controls.yRotation)
    const zAngle = deg2rad(controls.zRotation)

    const xQuaternion = new Quaternion().setFromAxisAngle(xNormalVector, xAngle)
    const yQuaternion = new Quaternion().setFromAxisAngle(yNormalVector, yAngle)
    const zQuaternion = new Quaternion().setFromAxisAngle(zNormalVector, zAngle)

    let resultQuaternion = new Quaternion()
    resultQuaternion = resultQuaternion.multiply(xQuaternion)
    resultQuaternion = resultQuaternion.multiply(yQuaternion)
    resultQuaternion = resultQuaternion.multiply(zQuaternion)

    return resultQuaternion
}

export { calculateMoveVector, calculateRotationQuaternion }
