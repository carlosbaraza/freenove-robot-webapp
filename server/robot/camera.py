import cv2
import numpy as np
import time
import picamera


def get_camera_feed():
    with picamera.PiCamera() as camera:
        camera.resolution = (416, 304)
        camera.framerate = 15
        time.sleep(2)
        while True:
            image = np.empty((304, 416, 3), dtype=np.uint8)
            camera.capture(image, 'bgr')
            ret, jpeg = cv2.imencode('.jpg', image)
            frame = jpeg.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
