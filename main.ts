input.onButtonPressed(Button.A, function () {
    ball += 1
    basic.showNumber(ball)
    basic.showString("b")
    if (ball == 4) {
        basic.clearScreen()
        basic.showString("ball")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(ball)
    basic.showNumber(strike)
    strike = 0
    ball = 0
})
input.onButtonPressed(Button.B, function () {
    strike += 1
    basic.showNumber(strike)
    basic.showString("s")
    if (strike == 3) {
        basic.clearScreen()
        basic.showString("strike")
    }
})
let ball = 0
let strike = 0
strike = 0
ball = 0
