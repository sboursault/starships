# django_tuto

## useful commands

create and activate python virtual env
    
    python3 -m venv env_django_tuto
    source env_django_tuto/bin/activate
 
Install django

    pip install django

Create project

    django-admin startproject django_tuto_site

Create db schema (Sqlite by default)

    python manage.py migrate
 
Start server

    cd django_tuto_site/
    python manage.py runserver

Rename root directory 

    mv django_tuto_site/ django_tuto_root

Create django app

    cd django_tuto_root/
    python manage.py startapp starships
 
Migrate db (after model changes)

    python manage.py makemigrations
    python manage.py migrate

Install and run sqlitebrowser

    sudo apt install sqlitebrowser
    sqlitebrowser 

Create admin user (admin:admin)

    python manage.py createsuperuser
    
## Resources

- [Build a REST API in 30 minutes with Django REST Framework](https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c)

- [Technical Specifications: Spacecraft of the Imperium and the Rebel Alliance](https://starwars.fandom.com/wiki/Technical_Specifications:_Spacecraft_of_the_Imperium_and_the_Rebel_Alliance)

