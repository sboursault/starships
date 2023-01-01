# Starships 


## Start postgres

```shell
docker compose -f infra/docker-compose.yml up postgres -d
```


## Start django back-end

```shell
source venv/bin/activate
pip install -r requirements.txt
cd starships-django/
./start.sh
```

## Start angular front-end

```shell
cd starships-angular/
ng serve
```


## Resources

- [Technical Specifications: Spacecraft of the Imperium and the Rebel Alliance](https://starwars.fandom.com/wiki/Technical_Specifications:_Spacecraft_of_the_Imperium_and_the_Rebel_Alliance)


## init data...

https://groups.google.com/g/django-users/c/N-JwDABvr94

`cat file.sql | ./manage.py dbshell`

http://flecox.github.io/django/2015/05/28/django-execute-sql-file-inside-a-migration-step.html


how to run api test along with cypress tests
move user rest view to site folder




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




https://www.positronx.io/angular-jwt-user-authentication-tutorial/



https://www.youtube.com/watch?v=k5E2AVpwsko
10:00 -> interesting, see how he binds his basket with other compenents

https://www.youtube.com/watch?v=3dHNOWTI7H8
this one is newer

https://www.twilio.com/blog/build-progressive-web-application-django-angular-part-2-frontend-interface

build an angular and create a container to run it with nginx
https://www.scaleway.com/en/docs/tutorials/deploy-angular-application/

# Resources
https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication
https://www.positronx.io/angular-jwt-user-authentication-tutorial/


