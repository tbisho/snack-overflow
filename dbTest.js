const db = require('./models')
const methodOverride = require('method-override')

db.comment.create({
  userId: 1,
  content: "This is the best snack"
}).then(function(comment){
  console.log(comment.get())
}).catch((error)=>{
  console.log(error)
})