#!/bin/bash

# echo the input string into tr (translate) to make it all lower case grep, matching only alphanumeric and printing one match per line, 
#pipe to sort to alphabetize, 
#then pipe to tr (tanslate) to strip out newlines which, is to say, reconstitute the newly sorted string, then print a newline for 
#looks.
echo $1 | tr '[:upper:]' '[:lower:]' | grep -o [a-zA-Z0-9] | sort | tr -d "\n"; printf "\n"