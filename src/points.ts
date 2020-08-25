import { Vector3 } from 'three'

import { l, R, h, L, r0, H } from './sizes'

const bottomCoords = [
    [-l/2, 0, -R + h],      // A
    [l/2, 0, -R + h],       // B
    [L/2 - l/2, 0, r0 - h], // C
    [L/2 - l, 0, r0],       // D
    [-L/2 + l, 0, r0],      // E
    [-L/2 + l/2, 0, r0 - h]  // F
]
const topCoords = [
    [-L/2 + l, H, -r0],         // A
    [L/2 - l, H, -r0],          // B
    [L/2 - l/2, H, -r0 + h],    // C
    [l/2, H, R - h],            // D
    [-l/2, H, R - h],           // E
    [-L/2 + l/2, H, -r0 + h]     // F
]

let bottomPoints: Vector3[] = []
for (let cs of bottomCoords) {
    let pointVector = new Vector3().fromArray(cs)
    bottomPoints.push(pointVector)
}

let topPoints: Vector3[] = []
for (let cs of topCoords) {
    let pointVector = new Vector3().fromArray(cs)
    topPoints.push(pointVector)
}

export { bottomPoints, topPoints }
