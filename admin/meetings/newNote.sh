#!/bin/zsh

# DESCRIPTION: Create meeting notes with properly formatted file names
#
# USAGE: ./newNote "meeting-topic"

# If meeting-topic is empty, return error and help message 
if [ -z $1 ]
then

  echo "ERROR: missing \"meeting-topic\" argument"
  echo "USAGE: ./newNote \"meeting-topic\""

else
  MEETING_TOPIC=$1
  CURRENT_DATE=`date +%m%d%y`

# regex to check if there are any spaces, tabs, or newlines in meeting_topic
  re="[[:space:]]+"

  if [[ $MEETING_TOPIC =~ $re ]]; then
  
    echo "ERROR: meeting_topic contains one or more spaces"
    echo "USAGE: ./newNote \"meeting-topic\""

  else

    cp template.md "${CURRENT_DATE}-${MEETING_TOPIC}.md"

  fi


fi
