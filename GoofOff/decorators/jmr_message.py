MESSAGE = "This is a problem"

# Class to handle terminal color manipulation

class bcolors:
	WARNING = '\033[93m'
	ENDC = '\033[0m'
	OKGREEN = '\033[92m'

#Decorator functions

def error_message_decorator(func):
	def print_formatted_error_message(message):
		print bcolors.WARNING + "*********\nWARNING:\n*********"
		func(message)
		print bcolors.ENDC
	return print_formatted_error_message

def success_message_decorator(func):
	def print_formatted_error_message(message):
		print bcolors.OKGREEN + "$$$$$$$$\nSUCCESS:\n$$$$$$$$"
		func(message)
		print bcolors.ENDC
	return print_formatted_error_message

def uppercase_message_decorator(func):
	def print_formatted_error_message(message):
		func(message.upper())
	return print_formatted_error_message

# Operational functions decorated by decorators

def print_message(message):
	print message

print_message = error_message_decorator(print_message)

print_message(MESSAGE)

@success_message_decorator
@uppercase_message_decorator
def print_basic(message):
	for i in range(10,50,10): 
		print str(i) + ' ' + message

print_basic(MESSAGE)