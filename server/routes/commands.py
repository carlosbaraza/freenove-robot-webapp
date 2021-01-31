from flask import request, jsonify

from . import routes
from robot import robot


@routes.route('/commands', methods=['POST'])
def route_commands():
    commands = request.get_json()

    for command in commands:
        print('Executing command', command)
        if command['command'] == 'move-head':
            robot.set_servo('0', command['angle0'])
            robot.set_servo('1', command['angle1'])

    return jsonify({'message': 'OK', 'commands': commands})
