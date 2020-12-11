// build your `Task` model here
const db = require('../../data/dbConfig')


function getAll(){
return db('tasks as t')
.join('projects as p', 'p.id', '=', 't.project_id')
.select('p.name', 'p.description', 't.completed', 't.description')




    // .join('projects as p', 'p.id', 't.project_id')
    // .select('p.name', 'p.description')
}
function create(task){
    return db('tasks')
    .insert(task)
    //.where({id})
    
}

module.exports = {
    getAll,
    create
}