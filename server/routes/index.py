from . import routes


@routes.route('/')
def index():
    return "Robot API"
