import { Points, LineLoop, Line } from 'three'

import { bottomGeometry, topGeometry, aActuatorGeometry, bActuatorGeometry, cActuatorGeometry, dActuatorGeometry, eActuatorGeometry, fActuatorGeometry } from './geometry'
import { pointMaterial, plateMaterial, actuatorMaterial } from './materials'

export const
    bottomPoints = new Points(bottomGeometry, pointMaterial),
    bottomPlate = new LineLoop(bottomGeometry, plateMaterial),
    topPoints = new Points(topGeometry, pointMaterial),
    topPlate = new LineLoop(topGeometry, plateMaterial),
    aActuator = new Line(aActuatorGeometry, actuatorMaterial),
    bActuator = new Line(bActuatorGeometry, actuatorMaterial),
    cActuator = new Line(cActuatorGeometry, actuatorMaterial),
    dActuator = new Line(dActuatorGeometry, actuatorMaterial),
    eActuator = new Line(eActuatorGeometry, actuatorMaterial),
    fActuator = new Line(fActuatorGeometry, actuatorMaterial)
