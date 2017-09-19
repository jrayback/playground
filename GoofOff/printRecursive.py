#!/usr/bin/python

# need the time package for sleep
import time

# recursive function to call
def print_char(arr) :
	print arr.pop(0)
	time.sleep(1)
	if len(arr) > 0 :
		print_char(arr)
	else :
		return;

# the array to use
array=[1,2,3,4,5,6,7,8,9,10]

#now call the function
print_char(array)
