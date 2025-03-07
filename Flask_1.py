from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def home():
    # Rather than place all of the html in the 'return'
    # statement, you can render an entire html page stored
    # in the templates folder.
    # render_template will render the specified html file
    # Posts argument passes in posts data
    return render_template("index.html")

@app.route("/authors")
def authors():
    return render_template("authors.html")

@app.route("/procedure")
def procedure():
    return render_template("procedure.html")

@app.route("/results")
def results():
    return render_template("results.html")


# Run server on local IP address on port 5000
if __name__ == "__main__":
    app.run(debug=True)