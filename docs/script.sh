# !/bin/sh

# Make a shell script

# done 1. install mkdocs pip package/any pip package you need for generating auto doc
# done 2. assuming we are at the base folder level i.e. dp
# done 3. generate mkdocs in smartonfhir/tmp folder
# 4. Chnage the index/search.html pages import structure to "{% static 'img/favicon.ico' %}"
# 5. Change action in index.html for search.html to {% url 'documentation_smartonfhir_search' %}
# 6. Now copy *.html pages from smartonfhir/tmp to portal/pagees/templates folder
# 7. Now copy all relvant folder CONTENTS like content of js folder to portal/pages/static/js/ folder, DONOT over-write the dest folder
# 8. For new folders like img folder, you can copy the whole folder itself to portal/pages/static folder

# To install mkdocs package 
pip install mkdocs

#To make Directory for static file 
mkdir portal/pages/static/sof
#To change dir to markdown file folder
cd smartonfhir/

#generate static files
mkdocs build

cd tmp

cp -R css fonts img js search flowchartCode.txt ../../portal/pages/static/sof

cp -R *.html ../../portal/pages/templates
# pwd

cd ../../portal/pages/static/sof/search

sed -i "s/importScripts ? '.'/importScripts ? 'static'/g" worker.js


cd ../../../templates


filePath[0]="index.html"
filePath[1]="search.html"
#echo ${#filePath[@]}


for fileName in ${filePath[@]}; do
    # # to get all href and src attribute value that are not starts with #(no need to change) or start with https
    allpath=$(cat $fileName |grep -o 'src=\".*\"\|href=\".*\"' |sed 's/[^"]*"\([^"]*\)".*/\1/' | grep -v '^#\|^https:')

    # # echo $allpath
    # # convert to array of path
    arr=($allpath)
    # # echo $arr
    # # echo ${#arr[@]}


    # to iterate over array of path then select one path and replace it with appropriate django path
    dot="."
    for i in ${arr[@]}; do
        
        path=$i
        if [[ $i == ./* ]]
        then 
            path="${i:2}"
        fi

        #echo $i
        replace="{% static 'sof/$path' %}"  
        #echo $replace
        if [ $path != $dot ]
        then
            sed -i "s|$i|$replace|g" $fileName
        fi

    done

done
sed -i "s|base_url = '.'|base_url = 'static/'|g" index.html

sed -i "s/href=\".\"/href=\"{% url 'index' %}\"/g" index.html
sed -i "s/href=\".\/.\"/href=\"{% url 'index' %}\"/g" search.html

sed  -i '1 a {% load static %}' index.html search.html

sed -i "s/action=\"search.html\"/action=\"{% url 'search' %}\"/g" search.html
sed -i "s/action=\".\/search.html\"/action=\"{% url 'search' %}\"/g" search.html index.html
