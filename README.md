# Starships 

How to start the app
How to run the tests ?

## install  dependencies

```shell
pip install -r requirements.txt
```

## Resources

- [Technical Specifications: Spacecraft of the Imperium and the Rebel Alliance](https://starwars.fandom.com/wiki/Technical_Specifications:_Spacecraft_of_the_Imperium_and_the_Rebel_Alliance)


## init data...

https://groups.google.com/g/django-users/c/N-JwDABvr94

`cat file.sql | ./manage.py dbshell`

http://flecox.github.io/django/2015/05/28/django-execute-sql-file-inside-a-migration-step.html


how to run api test along with cypress tests
move user rest view to site folder


to evaluate :
- gauge instead of cucumber (allows to embed images and other stuff in doc, plus the can be embedded in a docusaurus)
- babel to generate md doc from tests
- jmeter



The application exposes rest endpoints. You must be authenticated to use these endpoints, either with a token or a basic auth.
The application ships with basic web pages, that use the django session.
Alternatively, you can use an angular front-end, which uses only the rest endpoints.

## Authentication

The `api/users` is restricted to admin users.

```shell
# basic auth
curl http://localhost:8000/api/users/ --user admin:admin
# token auth
curl 'http://localhost:8000/api/authorize' \
  --header 'content-type: application/json' \
  --data '{"username": "admin", "password": "admin"}'
curl http://localhost:8000/api/users/ \
  --header 'Authorization: Token e8541dd3c25c2bbdca29368243a162c715158dc8'
```

## Create a user account

```shell
curl http://localhost:8000/api/users/ \
  --header 'content-type: application/json' \
  --data '{"username": "test", "password": "test"}' \
  --user admin:admin
```




