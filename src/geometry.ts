import { BufferGeometry } from 'three'

import { bottomPoints, topPoints } from './points'

export const
    bottomGeometry = new BufferGeometry().setFromPoints(bottomPoints),
    topGeometry = new BufferGeometry().setFromPoints(topPoints),
    aActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[0], topPoints[0]]),
    bActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[1], topPoints[1]]),
    cActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[2], topPoints[2]]),
    dActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[3], topPoints[3]]),
    eActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[4], topPoints[4]]),
    fActuatorGeometry = new BufferGeometry().setFromPoints([bottomPoints[5], topPoints[5]])
