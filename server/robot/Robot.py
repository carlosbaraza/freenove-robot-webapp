#!/usr/bin/python

from .Motor import *
from .servo import *
# from .Led import *
from .Buzzer import *
from .ADC import *
from .Thread import *
from .Light import *
from .Ultrasonic import *
from .Line_Tracking import *
from threading import Timer
from threading import Thread
from .Command import COMMAND as cmd


class Robot:
    def __init__(self):
        self.PWM = Motor()
        self.servo = Servo()
        # self.led = Led()
        self.ultrasonic = Ultrasonic()
        self.buzzer = Buzzer()
        self.adc = Adc()
        self.light = Light()
        self.infrared = Line_Tracking()

    def set_motor(self, duty1: int, duty2: int, duty3: int, duty4: int):
        self.PWM.setMotorModel(duty1, duty2, duty3, duty4)

    def set_servo(self, channel: str, angle: int):
        self.servo.setServoPwm(channel, angle)

    def get_ultrasonic_distance(self):
        return self.ultrasonic.get_distance()
