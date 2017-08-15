from flask import Flask
import checkAnagram

app = Flask(__name__)

string1 = 'iceman'
string2 = 'cinema'

@app.route("/")
def check():
	return str(checkAnagram.checkAnagram(string1,string2))