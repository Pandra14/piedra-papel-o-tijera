let tool = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.A) && receivedNumber == 1) {
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B) && receivedNumber == 2) {
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . . #
        # # . # .
        . . # . .
        # # . # .
        # # . . #
        `)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendNumber(2)
})
basic.forever(function () {
    radio.setGroup(10203040506070808)
})
