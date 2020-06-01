#!/bin/bash

filePath="index.html"

# to get all href and src attribute value that are not starts with #(no need to change) or start with https
allpath=$(cat $filePath |grep -o 'src=\".*\"\|href=\".*\"' |sed 's/[^"]*"\([^"]*\)".*/\1/' | grep -v '^#\|^https:')

# convert to array of path
arr=($allpath)
# echo ${#arr[@]}


# to iterate over array of path then select one path and replace it with appropriate django path
dot="."
for i in ${arr[@]}; do
    replace="{% static '$i' %}"  
    if [ $i != $dot ]
    then
        sed -i "s|$i|$replace|g" $filePath
    fi
    
done
