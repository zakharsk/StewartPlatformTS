import { GUI } from 'dat.gui'

interface Controls {
    xMove: number,
    xRotation: number,
    yMove: number,
    yRotation: number,
    zMove: number,
    zRotation: number,
    reset(): void
}

function createGUI(controls: Controls, callback: () => void): GUI {
    const gui = new GUI({ autoPlace: false, closeOnTop: true })

    const xFolder = gui.addFolder('X')

    xFolder
        .add(controls, 'xMove', -50, 50, 1)
        .name('Move')
        .onChange(function () {
            callback()
        })
        .listen()

    xFolder
        .add(controls, 'xRotation', -45, 45, 1)
        .name('Rotation')
        .onChange(function () {
            callback()
        })
        .listen()

    const yFolder = gui.addFolder('Y')

    yFolder
        .add(controls, 'yMove', -50, 50, 1)
        .name('Move')
        .onChange(function () {
            callback()
        })
        .listen()

    yFolder
        .add(controls, 'yRotation', -45, 45, 1)
        .name('Rotation')
        .onChange(function () {
            callback()
        })
        .listen()

    const zFolder = gui.addFolder('Z')

    zFolder
        .add(controls, 'zMove', -50, 50, 1)
        .name('Move')
        .onChange(function () {
            callback()
        })
        .listen()

    zFolder
        .add(controls, 'zRotation', -45, 45, 1)
        .name('Rotation')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'reset')
        .name('Reset')

    return gui
}

export { Controls, createGUI }
