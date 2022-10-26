import { defineConfig } from 'cypress'

const got = require('got');  // got-v11 is the last version compatible with CommonJS

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    setupNodeEvents(on, config) {
      on('task', {

        // a task must return a value, null, or a promise that resolves to a value or null to indicate that the task was handled.

        log(message) {
          console.log(message)
          return null
        },

        deleteUser(username) {
          console.log(`removing user '${username}'`)

          let options = { username: 'admin', password: 'admin' }
          return got(`http://localhost:8000/api/users/?username=${username}`, options).json()
            .then(body => {
              if (Array.isArray(body) && body.length) {
                console.log(`delete user: '${username}'`)
                return got.delete(`http://localhost:8000/api/users/${body[0].id}/`, options).json()
              } else {
                console.log(`no user found with username '${username}'`)
                return Promise.resolve(`no user found with username '${username}'`);
              }
            })
        },

      })
    },
  }
})
