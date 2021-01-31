#!/usr/bin/python

class Robot:
    def set_motor(self, duty1: int, duty2: int, duty3: int, duty4: int):
        return True

    def set_servo(self, channel: str, angle: int):
        return True

    def get_ultrasonic_distance(self):
        return True
