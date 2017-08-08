#!/usr/bin/python

import time

def print_char(arr) :
	print arr.pop(0)
	time.sleep(1)
	if len(arr) > 0 :
		print_char(arr)
	else :
		return;

array=[1,2,3,4,5,6,7,8,9,10]
print_char(array)
