from flask import Flask, request
from flask_jsonpify import jsonify
from flask_api import status
from checkAnagram import checkAnagram

app = Flask(__name__)

def check(str1, str2):
	"""Check two strings and return true if they are anagrams"""
	return checkAnagram(str1, str2)

@app.route('/comparison', methods=['GET'])
def check_anagram():
	first_string = request.args.get('first')
	second_string = request.args.get('second')
	status_code = status.HTTP_400_BAD_REQUEST

	# As long as both values were passed in the query string, check the anagram and return 200
	if first_string is not None and second_string is not None:
		result = {'First String': first_string, 
					'Second String': second_string, 
					'isAnagram': str(check(first_string, second_string))}
		status_code = status.HTTP_200_OK
	# otherwise return a message in the response and a 400 code
	else:
		result = {'Error': 'Need values for first and second to be passed in the query string.'}
	
	return jsonify(result), status_code