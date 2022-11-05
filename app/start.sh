#!/bin/sh

set -e # stop script on error
set -x # print trace

python manage.py migrate                 # apply migration files
python manage.py runserver 0.0.0.0:8000  # run server (0.0.0.0:8000 is require when running in docker)
