#!/bin/bash
# Print a random word

wordsfile_path='/usr/share/dict/words'
num_words=$( cat $wordsfile_path | wc -w ) # total number of words in the file
#make 32-bit random number by appending two 16-bit rands - HOW THE HECK DOES THIS WORK? WHAT VOODOO IS GOING ON WITH THE PRINTF? FIGURE THIS OUT!
random_as_string=$( printf '16#%04x%04x' $RANDOM $RANDOM ) # combine as string in some hex format?
random=$(($random_as_string)) # evaluate the string as an (ostensibly 32-bit) int value
#use modulus to be sure our index is within bounds
let "random_index = $random % $num_words +1" # should generate a pseudorandom number between 1 and $num_words
#combine head and tail commands to get just the word we want
word=$( head -n $random_index $wordsfile_path | tail -n 1 )

echo $wordsfile_path
echo $num_words
echo $random_index
echo $word
echo $random_as_string
echo $random
