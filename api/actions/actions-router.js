const express = require('express')
const dbActions = require('./actions-model')
// const {  } = require('./actions-middlware')

const router = express.Router()


// Write your "actions" router here!

/* 
    [ ] 
    [GET] /api/actions
    Returns an array of actions (or an empty array) as the body of the response.
 */
    router.get('/', (req, res) => {
        dbActions.get()
        .then((actions) => res.status(200).json(actions))
        .catch((err) => {
            console.error({err})
            res.status(500).json({message:'The actions information could not be retrieved'})
        })
    })


/*     
    [ ] 
    [GET] /api/actions/:id
    Returns an action with the given id as the body of the response.
    If there is no action with the given id it responds with a status code 404.
*/
router.get('/:id', (req, res) => {
    dbActions.get(id)
    .then(() => res.status().json())
    .catch(() => res.status().json())
})


/*         
    [ ] 
    [POST] /api/actions
    Returns the newly created action as the body of the response.
    If the request body is missing any of the required fields it responds with a status code 400.
    When adding an action make sure the project_id provided belongs to an existing project.
 */
    router.post('/', (req, res) => {
        dbActions.insert(action)
        .then(() => res.status().json())
        .catch(() => res.status().json())
    })


/*     
    [ ] 
    [PUT] /api/actions/:id
    Returns the updated action as the body of the response.
    If there is no action with the given id it responds with a status code 404.
    If the request body is missing any of the required fields it responds with a status code 400.
 */
    router.put('/:id', (req, res) => {
        dbActions.update(id, changes)
        .then(() => res.status().json())
        .catch(() => res.status().json())
    })



/*     
    [ ] 
    [DELETE] /api/actions/:id
    Returns no response body.
    If there is no action with the given id it responds with a status code 404.
 */
    router.delete('/:id', (req, res) => {
        dbActions.remove(id)
        .then(() => res.status().json())
        .catch(() => res.status().json())
    })


module.exports = router
