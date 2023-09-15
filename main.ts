input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(0)
    }
})
basic.showString("123")
basic.showString("456")
basic.showString("Hello!")
basic.showString("hi")
basic.forever(function () {
    basic.showString("Hello!")
})
