const express = require('express')
const dbActions = require('./actions-model')
const { validateActionId , validateAction} = require('./actions-middlware')

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
    ValidateProjectId attach an action to req.action if valid Id, otherwise handle errors
    If there is no action with the given id it responds with a status code 404.

*/
router.get('/:id', validateActionId , (req, res) => {
    dbActions.get(req.params.id)
    .then( action =>{ if (action) res.status(200).json(req.action) })
})


/*         
    [ ] 
    [POST] /api/actions
    Returns the newly created action as the body of the response.
    If the request body is missing any of the required fields it responds with a status code 400.
    When adding an action make sure the project_id provided belongs to an existing project.
 */
    router.post('/', validateAction,  (req, res) => {
        dbActions.insert(req.body)
            .then((newAction) => res.status(200).json(newAction))
            .catch((err) => {
            console.error({err})
            res.status(500).json({message:'The action(s) information could not be saved'})
        })
    })


/*     
    [ ] 
    [PUT] /api/actions/:id
    Returns the updated action as the body of the response.
    If there is no action with the given id it responds with a status code 404.
    If the request body is missing any of the required fields it responds with a status code 400.
 */
    router.put('/:id', validateAction, validateActionId, (req, res) => {
        dbActions.update(req.action.id, req.body)
            .then( (newAction) => { res.status(200).json(newAction) })
    })



/*     
    [ ] 
    [DELETE] /api/actions/:id
    Returns no response body.
    If there is no action with the given id it responds with a status code 404.
 */
    router.delete('/:id', validateActionId, (req, res) => {
        dbActions.remove(req.action.id) 
        .then(() => res.status(200).json())
    })


module.exports = router
