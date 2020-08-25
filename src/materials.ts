import { PointsMaterial, LineBasicMaterial } from 'three'

const pointColor = 0x196F3D
const plateColor = 0x196F3D
const actuatorColor = 0x52B080

export const
    pointMaterial = new PointsMaterial({ color: pointColor, size: 5, alphaTest: 0.5 }),
    plateMaterial = new LineBasicMaterial({ color: plateColor }),
    actuatorMaterial = new LineBasicMaterial({ color: actuatorColor })
