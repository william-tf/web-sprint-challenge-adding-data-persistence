// build your `Project` model here

const db = require('../../data/dbConfig')


function getAll(){
return db('projects')
}

function create(project){
    console.log(project)
    return db('projects')
    .insert(project)
}

module.exports = {
    getAll,
    create
}