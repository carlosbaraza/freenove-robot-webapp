from .camera import get_camera_feed
from .config import is_rpi

if (is_rpi):
    from robot.Robot import Robot
else:
    from .test_utils.RobotMock import Robot

robot = Robot()
