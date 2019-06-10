const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParser = require('body-parser')
const USER = require('./model')
const mongoose = require('mongoose')
const DB_SETTING = require('./dbsetting')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
app.use(bodyParser.json())
async function start () {
  // Init Nuxt.js
  mongoose.connect(
    DB_SETTING,
    { useNewUrlParser: true }
  )
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
app.post('/userInfo/', (req, res) => {
  const userData = req.body
  USER.findOne({ user_id: userData.Eea }, (err, userInfo) => {
    if (!userInfo) {
      const addUser = new USER({
        user_id: userData.Eea,
        user_name: userData.ig,
        email: userData.U3
      })
      addUser.save(err => err || 'success')
    } else {
      res.send('login success')
    }
  })
})
app.get('/interest/:id', (req, res) => {
  const id = req.params.id
  USER.findOne({ user_id: id }, (err, data) => {
    data.interest ? res.send(data.interest) : res.send(null)
  })
})
start()
