cd ~/faker_cli

if [ $# = '0' ]
then
    node logo.js
elif [ $1 = '-v' ] 
then
    node logo.js
elif [ $1 = '--version' ] 
then
    node logo.js
elif [ $1 = '--help' ] 
then
    node help.js
elif [ $1 = '-h' ] 
then
    node help.js
else
    node faker.js $@
fi
