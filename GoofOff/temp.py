#! /usr/bin/env python3

import random
word = 'superdupercalifragilicious'
numCharsToPrint = random.randint(0,len(word))

for i in range(numCharsToPrint):
	print(word[i],end='')
print()