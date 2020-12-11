// build your `Resource` model here
const db = require('../../data/dbConfig')


function getAll(){
return db('resources')
}
function create(resource){
    return db('resources')
    .insert(resource)
}

module.exports = {
    getAll,
    create
}