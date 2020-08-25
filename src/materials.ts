import { PointsMaterial, LineBasicMaterial } from 'three'

const pointColor = 0xff00ff
const plateColor = 0xC0392B
const actuatorColor = 0x7B7D7D

export const
    pointMaterial = new PointsMaterial({ color: pointColor, size: 5, alphaTest: 0.5 }),
    plateMaterial = new LineBasicMaterial({ color: plateColor }),
    actuatorMaterial = new LineBasicMaterial({ color: actuatorColor })
