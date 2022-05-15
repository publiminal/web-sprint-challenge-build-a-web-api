// add middlewares here related to projects
const dbProjects = require('./projects-model')

/* 
this middleware will be used for all project endpoints that include an id parameter in the url 
(ex: /api/projects/:id and it should check the database to make sure there is a user with that id.
if the id parameter is valid, store the project object as req.project and allow the request to continue
if the id parameter does not match any user id in the database, 
respond with status 404 and { message: "user not found" }
*/

function validateProjectId(req, res, next) {
    dbProjects.get(req.params.id)
    .then(project => {
      const isValid = project != null && project 
      if(isValid){
        req.project = project
        next()
      }else{
        console.log('project not valid')
        res.status(404).json({ message: "project not found" })
        return 
      }
    })
    .catch(err => {
        console.error('ValidateProject error ::', err )
        res.status(500).json({message:'The project information could not be retrieved'})
    })
  
    // console.log('isValidUser', isValidUser)
  }

/*
  validatePost validates the body on a request to create a new project
  if the request body lacks the required ''name' and 'description' field, respond with status 400 and { message: "missing required text field" }
*/
function validateProject(req, res, next) {
  const project = req.body
  const isValid = 'name' in project && 'description' in project
  if(!isValid) {
    res.status(400).json({ message: "missing required name or project field  " })
    return
  }else{
      next()
  }
}


module.exports = {validateProjectId, validateProject}

