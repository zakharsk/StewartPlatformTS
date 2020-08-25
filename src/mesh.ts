import { Points, LineLoop } from 'three'

import { bottomGeometry, topGeometry } from './geometry'
import { pointMaterial, plateMaterial } from './materials'

export const
    bottomPoints = new Points(bottomGeometry, pointMaterial),
    bottomPlate = new LineLoop(bottomGeometry, plateMaterial),
    topPoints = new Points(topGeometry, pointMaterial),
    topPlate = new LineLoop(topGeometry, plateMaterial)
