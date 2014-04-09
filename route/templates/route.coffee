###
    Routes for <%= name %>
###

module.exports =

  ping: (res, req, next) ->
    {
      code: 200
      action: '/ping'
      response: 'Hello there.'
    }
