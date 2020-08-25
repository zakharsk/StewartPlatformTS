import { PointsMaterial, LineBasicMaterial } from 'three'

export const
    pointMaterial = new PointsMaterial({ color: 0x0080ff, size: 5, alphaTest: 0.5 }),
    plateMaterial = new LineBasicMaterial({ color: 0x0000ff }),
    actuatorMaterial = new LineBasicMaterial({ color: 0xffffff })
