const express = require('express')
const dbProjects = require('./projects-model')
// const {  } = require('./projects-middleware')

const router = express.Router()

// Write your "projects" router here!

/* 
[ ] 
    [GET] /api/projects
    Returns an array of projects as the body of the response.
    If there are no projects it responds with an empty array.
 */
router.get('/', (req, res) => {
    dbProjects.get()
    .then((projects) => res.status(200).json(projects))
    .catch((err) => {
        console.error({err})
        res.status(500).json({message:'The projects information could not be retrieved'})
    })
})


/* 
[ ] 
    [GET] /api/projects/:id
    Returns a project with the given id as the body of the response.
    If there is no project with the given id it responds with a status code 404.
 */
router.get('/:id', (req, res) => {
    dbProjects.get(id)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})

/* 
[ ] [POST] /api/projects
Returns the newly created project as the body of the response.
If the request body is missing any of the required fields it responds with a status code 400.
 */
router.post('/', (req, res) => {
    dbProjects.insert(project)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})

/* 
[ ] 
    [PUT] /api/projects/:id
    Returns the updated project as the body of the response.
    If there is no project with the given id it responds with a status code 404.
    If the request body is missing any of the required fields it responds with a status code 400.
 */
router.put('/:id', (req, res) => {
    dbProjects.update(id, changes)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})

/*     
[ ] 
    [DELETE] /api/projects/:id
    Returns no response body.
    If there is no project with the given id it responds with a status code 404.
 */
router.delete('/:id', (req, res) => {
    dbProjects.remove(id)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})

/* 
[ ] 
    [GET] /api/projects/:id/actions
    Returns an array of actions (could be empty) belonging to a project with the given id.
    If there is no project with the given id it responds with a status code 404. 
*/
router.get('/:id/actions', (req, res) => {
    dbProjects.getProjectActions(projectId)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})


module.exports = router
