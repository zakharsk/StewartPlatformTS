import { BufferGeometry } from 'three'

import { bottomPoints, topPoints } from './points'

export const
    bottomGeometry = new BufferGeometry().setFromPoints(bottomPoints),
    topGeometry = new BufferGeometry().setFromPoints(topPoints)
