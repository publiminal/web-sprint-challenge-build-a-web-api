// add middlewares here related to actions
const dbActions = require('./actions-model')

/* 
this middleware will be used for all project endpoints that include an id parameter in the url 
(ex: /api/projects/:id and it should check the database to make sure there is a user with that id.
if the id parameter is valid, store the project object as req.project and allow the request to continue
if the id parameter does not match any user id in the database, 
respond with status 404 and { message: "user not found" }
*/

function validateActionId(req, res, next) {
    dbActions.get(req.params.id)
    .then(action => {
      const isValid = action != null && action 
      if(isValid){
        req.action = action
        next()
      }else{
        console.log('ation(s) not valid')
        res.status(404).json({ message: "action(s) not found" })
        return 
      }
    })
    .catch(err => {
        console.error('ValidatedbActions error ::', err )
        res.status(500).json({message:'The action(s) information could not be retrieved'})
    })
  
    // console.log('isValidUser', isValidUser)
  }

  /*
  validatePost validates the body on a request to create a new project
  if the request body lacks the required ''project_id' and 'description' (128 chars) and 'notes' fields, respond with status 400 and { message: "missing required text field" }
*/
function validateAction(req, res, next) {
    const action = req.body
    const hasDescription = 'description' in action  
    const isWellFormed = 'project_id' in action && hasDescription && 'notes' in action
    const isLongDescriptionOk = hasDescription && action.description.length <= 128
    const isValid = isWellFormed && isLongDescriptionOk
    
        
    if(isValid){ next() }
    else if(!isLongDescriptionOk) { res.status(400).json({ message: "description field is up to 128 chars" })}
    else{
        console.warn('\n ValidateAction ::')
        console.log('project_id ', action.projec_id)
        console.log('description ', action.description)
        console.log('notes ', action.notes)
        console.log('description.length ', action.description.length)
        console.log('ValidateAction :: \n ject')
        res.status(400).json({ message: "missing required project_id or action or notes field  " })
    }
  }

module.exports = {validateActionId, validateAction}
