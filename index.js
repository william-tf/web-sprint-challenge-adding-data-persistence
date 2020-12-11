// start your server here
const server = require('./api/server')
const PORT = 6000

server.listen(PORT, () => {
    console.log(`this server is listening on ${PORT}`)
})