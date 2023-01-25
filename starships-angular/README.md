# Starships-angular

This is the angular front-end application for starships. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## To go further

The authentication part was based on this tutorial :
https://www.positronx.io/angular-jwt-user-authentication-tutorial/

Possible improvements:
- The authentication token should be stored in the local storage, to keep the user logged when the front-end restarts (or when the user comes back).
- We could have a service to provide user data based on this token
