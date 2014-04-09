###
    <%= pkg.name %> <%= pkg.version %>
    - Restify documentation available at: http://mcavage.me/node-restify/
###

restify = require("restify")

ping = (req, res, next) ->
  res.json 200,
    code: 200
    action: '/ping'
    response: 'Hello'
  next()

server = restify.createServer()
server.get "/ping", ping

server.listen <%= options.serverport %>, ->
  console.log "%s listening at %s", server.name, server.url
