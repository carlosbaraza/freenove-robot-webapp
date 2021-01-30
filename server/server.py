from flask import Flask, Response
import cv2
import numpy as np
import time
import picamera

app = Flask(__name__)
# video = cv2.VideoCapture(0)


@app.route('/')
def index():
    return "Default Message"


def gen():
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


@app.route('/video_feed')
def video_feed():
    return Response(gen(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2204, threaded=True)
