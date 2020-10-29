const db = require('./models')
const methodOverride = require('method-override')

// db.user.findOne().then(function(user){
//   user.createCommentReal({
//     content: "This is the best snack ever"
//   }).then(function(comment){
//     console.log(commentReal.content)
//   })
// })

db.comment.create({
  userId: 1,
  content: "This is the best snack"
}).then(function(comment){
  console.log(comment.get())
}).catch((error)=>{
  console.log(error)
})