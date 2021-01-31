from flask import Flask
import routes
import routes.camera
import routes.commands
import routes.index


app = Flask(__name__)


@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Headers'] = '*'
    header['Access-Control-Allow-Origin'] = '*'
    return response


app.register_blueprint(routes.routes)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2204, threaded=True)
