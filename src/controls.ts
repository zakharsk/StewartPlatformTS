import { GUI } from 'dat.gui'

const gui = new GUI({ autoPlace: false, closeOnTop: true })

const guiDiv = document.getElementById('gui')
if (guiDiv != null) {
    guiDiv.appendChild(gui.domElement)
} else {
    console.error('Can\'t insert GUI')
}

const controls = {
    xMove: 0,
    xRotation: 0,
    yMove: 0,
    yRotation: 0,
    zMove: 0,
    zRotation: 0,
    reset: function () { reset() }
}

function reset() {
    controls.xMove = controls.xRotation = controls.yMove = controls.yRotation = controls.zMove = controls.zRotation = 0
}


gui
    .add(controls, 'xMove', -50, 50, 1)
    .name('Move X')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'xRotation', -45, 45, 1)
    .name('Rotation X')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'yMove', -50, 50, 1)
    .name('Move Y')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'yRotation', -45, 45, 1)
    .name('Rotation Y')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'zMove', -50, 50, 1)
    .name('Move Z')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'zRotation', -45, 45, 1)
    .name('Rotation Z')
    .onChange(function () {
        // console.log(controls)
    })
    .listen()

gui
    .add(controls, 'reset')
    .name('Reset')

export { gui }
