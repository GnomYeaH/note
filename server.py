from flask import Flask, render_template, url_for, request

app = Flask(__name__)
app.config['SECRET_KEY'] = 'falsdaw123mfsnja1l21dsadf1'
 


@app.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        print(request.form)

    return render_template("index.html")

@app.errorhandler(404)
def error_404(error):
    return render_template("error_404.html")


if __name__ == "__main__":
    app.run(debug=True)