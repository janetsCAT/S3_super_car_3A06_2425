"""

可能问题：

1.电池电力不够

"""
"""

2：左右方向没校准

重要！！！！

使旋转角度小于90度

"""
"""

4：等来生

"""
def right():
    robotbit.motor_run_dual(robotbit.Motors.M2A, -150, robotbit.Motors.M2B, 118.5)
    basic.pause(202)
    robotbit.motor_stop_all()
def back():
    global distance
    robotbit.motor_run_dual(robotbit.Motors.M2A, -150, robotbit.Motors.M2B, -118.5)
    basic.pause(150)
    distance = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
    robotbit.motor_stop_all()
def movement():
    detect()
    basic.pause(5)
    logic()
def left():
    robotbit.motor_run_dual(robotbit.Motors.M2A, 168, robotbit.Motors.M2B, -118.5)
    basic.pause(202)
    robotbit.motor_stop_all()

def on_button_pressed_a():
    while True:
        movement()
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

3：已修改

"""
def logic():
    global distance
    distance = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
    detect()
    if distance > 15:
        robotbit.motor_run_dual(robotbit.Motors.M2A, 150, robotbit.Motors.M2B, 118.5)
        basic.pause(500)
        robotbit.motor_stop_all()
        basic.pause(10)
        logic()
    elif (right_dis and left_dis or distance) <= 8:
        robotbit.motor_stop_all()
        distance = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
        if distance <= 5:
            basic.pause(10)
            for index in range(3):
                back()
        else:
            pass
        if right_dis < left_dis:
            for index2 in range(3):
                left()
        elif left_dis < right_dis:
            for index3 in range(3):
                right()
        else:
            for index4 in range(3):
                right()
def straight():
    global distance
    robotbit.motor_run_dual(robotbit.Motors.M2A, 150, robotbit.Motors.M2B, 118.5)
    basic.pause(5000)
    distance = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
    robotbit.motor_stop_all()
def detect():
    global left_dis, right_dis
    for index5 in range(1):
        left()
        basic.pause(10)
        left_dis = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
        right()
        right()
        basic.pause(10)
        right_dis = sonar.ping(DigitalPin.P13, DigitalPin.P12, PingUnit.CENTIMETERS)
        left()
left_dis = 0
right_dis = 0
distance = 0
i = 0