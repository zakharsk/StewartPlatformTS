import { WebGLRenderer } from 'three'
import { winWidth, winHeight } from './sizes'

const renderer = new WebGLRenderer({ antialias: true, alpha: true})
renderer.setSize(winWidth, winHeight)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setScissorTest(true);

export { renderer }
