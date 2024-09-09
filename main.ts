input.onButtonPressed(Button.AB, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
    etoile = 1
})
let etoile_move = 0
let etoile = 0
basic.showIcon(IconNames.Happy)
let fain = 0
loops.everyInterval(1000, function () {
    fain += 1
})
basic.forever(function () {
    if (etoile == 1) {
        while (true) {
            led.plot(etoile_move, 0)
            basic.pause(500)
            led.unplot(etoile_move, 0)
            etoile_move += 1
            if (etoile_move == 5) {
                etoile_move = 0
            }
        }
    }
})
