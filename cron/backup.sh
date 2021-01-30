#!/bin/bash
PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
cd /home/elton/heroku\ backups

HEROKU_API_KEY='placeholder'  heroku pg:backups:capture --app task-api-2021
HEROKU_API_KEY='placeholder'  heroku pg:backups:download --app task-api-2021

mv latest.dump  `date +"%Y%m%d%H%M"`-backup.dump
