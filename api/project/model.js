// build your `Project` model here

const db = require('../../data/dbConfig')

const boolean = 0
const transBoolean = boolean ? true: false


function getAll(){
        return db('projects')
}

function create(project){
    console.log(project)
    return db('projects')
    .insert(project)
}

function getById(id) {
    return db("projects").where({id});
  }


module.exports = {
    getAll,
    create,
    getById
}