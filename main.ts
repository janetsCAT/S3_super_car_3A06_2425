function right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    118.5
    )
    basic.pause(202)
    robotbit.MotorStopAll()
}
function back () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    -150,
    robotbit.Motors.M2B,
    -118.5
    )
    basic.pause(150)
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    robotbit.MotorStopAll()
}
function movement () {
    detect()
    basic.pause(5)
    logic()
}
function left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    168,
    robotbit.Motors.M2B,
    -118.5
    )
    basic.pause(202)
    robotbit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        movement()
    }
})
function logic () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    detect()
    if (distance > 15) {
        robotbit.MotorRunDual(
        robotbit.Motors.M2A,
        150,
        robotbit.Motors.M2B,
        118.5
        )
        basic.pause(500)
        robotbit.MotorStopAll()
        basic.pause(10)
        logic()
    } else if ((right_dis && left_dis || distance) <= 8) {
        robotbit.MotorStopAll()
        distance = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
        if (right_dis < left_dis) {
            for (let index = 0; index < 3; index++) {
                left()
            }
        } else if (left_dis < right_dis) {
            for (let index = 0; index < 3; index++) {
                right()
            }
        } else {
            for (let index = 0; index < 3; index++) {
                right()
            }
        }
        if (distance <= 5) {
            basic.pause(10)
            for (let index = 0; index < 3; index++) {
                back()
            }
        }
    }
}
function straight () {
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    118.5
    )
    basic.pause(5000)
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    robotbit.MotorStopAll()
}
function detect () {
    for (let index = 0; index < 1; index++) {
        left()
        basic.pause(10)
        left_dis = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
        right()
        right()
        basic.pause(10)
        right_dis = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P12,
        PingUnit.Centimeters
        )
        left()
    }
}
let left_dis = 0
let right_dis = 0
let distance = 0
let i = 0
