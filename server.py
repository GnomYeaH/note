from flask import Flask, render_template, url_for, request
import os
import sqlite3


DATABASE = '/flsite.db'
DEBUG = True
SECRET_KEY = 'awdasdads12949%3$#56//dgf'


app = Flask(__name__)
app.config.from_object(__name__)

app.config.update(dict(DATABASE=os.path.join(app.root_path, 'users_data.db')))


@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template("index.html")


@app.errorhandler(404)
def error_404(error):
    return render_template("error_404.html"), 404


def connect_db():
    conn = sqlite3.connect(app.config['DATABASE'])
    conn.row_factory = sqlite3.Row                          # Представляет данные с БД в виде словарей вместо картежей 
    return conn


def create_db():   
    db = connect_db()                                          # Вспомогательная функция для БД
    with app.open_resource('./templates/sq_db.sql', mode='r') as f:
        db.cursor().executescript(f.read())
    db.commit()
    db.close()


if __name__ == "__main__":
    app.run(debug=True)
    #  create_db()
