radio.onReceivedValue(function (name, value) {
    if (name == "Y") {
        VELOCITAT = value / 6
    }
    if (name == "X") {
        if (value < 0) {
            GIR_DRETA = value / 6
            GIR_ESQUERRA = 0
        }
        if (value > 0) {
            GIR_ESQUERRA = value / 6
            GIR_DRETA = 0
        }
    }
    cuteBot.motors(VELOCITAT + GIR_DRETA, VELOCITAT - GIR_ESQUERRA)
})
let GIR_ESQUERRA = 0
let GIR_DRETA = 0
let VELOCITAT = 0
radio.setGroup(1)
