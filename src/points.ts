import {Quaternion, Vector3} from 'three'

import { l, R, h, L, r0, H } from './sizes'

const bottomCoords = [
    [-l/2, -H, -R + h],      // A
    [l/2, -H, -R + h],       // B
    [L/2 - l/2, -H, r0 - h], // C
    [L/2 - l, -H, r0],       // D
    [-L/2 + l, -H, r0],      // E
    [-L/2 + l/2, -H, r0 - h] // F
]
const topCoords = [
    [-L/2 + l, 0, -r0],         // A
    [L/2 - l, 0, -r0],          // B
    [L/2 - l/2, 0, -r0 + h],    // C
    [l/2, 0, R - h],            // D
    [-l/2, 0, R - h],           // E
    [-L/2 + l/2, 0, -r0 + h]    // F
]

function getPoints(move: Vector3, rotation: Quaternion) {
    let bottom: Vector3[] = []
    for (let cs of bottomCoords) {
        let pointVector = new Vector3().fromArray(cs)
        bottom.push(pointVector)
    }

    let top: Vector3[] = []
    for (let cs of topCoords) {
        let pointVector = new Vector3().fromArray(cs)
        pointVector.add(move)
        pointVector.applyQuaternion(rotation)
        top.push(pointVector)
    }

    return {
        bottom,
        top
    }
}

export { getPoints }
