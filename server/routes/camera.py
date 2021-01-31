from robot import get_camera_feed
from flask import Response

from . import routes


@routes.route('/camera')
def video_feed():
    return Response(get_camera_feed(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
