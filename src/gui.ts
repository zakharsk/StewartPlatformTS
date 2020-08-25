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

    gui
        .add(controls, 'xMove', -50, 50, 1)
        .name('Move X')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'xRotation', -45, 45, 1)
        .name('Rotation X')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'yMove', -50, 50, 1)
        .name('Move Y')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'yRotation', -45, 45, 1)
        .name('Rotation Y')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'zMove', -50, 50, 1)
        .name('Move Z')
        .onChange(function () {
            callback()
        })
        .listen()

    gui
        .add(controls, 'zRotation', -45, 45, 1)
        .name('Rotation Z')
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
