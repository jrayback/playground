from flask import Flask, request
from flask_restful import Resource, Api
from flask_jsonpify import jsonify
from checkAnagram import checkAnagram

app = Flask(__name__)
api = Api(app)

class CheckAnagram(Resource):
	
	#TODO - need error handling in case either(?)/both(?) strings are missing from the query string

	# Set up strings to compare
	#string1 = request.args.get('first')
	#string2 = request.args.get('second')

	def get(self): # Define the 'GET' verb for RESTful API
		result = {'First String': request.args.get('first'), 
					'Second String': request.args.get('second'), 
					'isAnagram': str(check(request.args.get('first'), request.args.get('second')))}
		return jsonify(result)
	
def check(str1, str2):
	return checkAnagram(str1, str2)

api.add_resource(CheckAnagram, '/comparison')


if __name__ == '__main__':
	app.run(port='5002')
