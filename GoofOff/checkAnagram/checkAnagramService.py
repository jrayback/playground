from flask import Flask, request
from flask_restful import Resource, Api
from flask.ext.jsonpify import jsonify
from checkAnagram import checkAnagram

app = Flask(__name__)
api = Api(app)

class CheckAnagram(Resource):
	# Default values for 'GET'
	string1 = 'iceman'
	string2 = 'cinema'	

	def get(self): # Define the 'GET' verb for RESTful API
		result = {'First String': self.string1, 'Second String': self.string2, 'isAnagram': str(check(self.string1, self.string2))}
		return jsonify(result)
	
def check(str1, str2):
	return checkAnagram(str1, str2)

api.add_resource(CheckAnagram, '/comparison')


if __name__ == '__main__':
	app.run(port='5002')
