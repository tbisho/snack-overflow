const db = require('./models')

// create a user for us to use
// db.user.create({
//   name: "Susan Doolittle",
//   email: "heythere@aol.com",
//   password: "erjwklejr"
// }).then( function(createdUser) {
//   console.log(createdUser.dataValues)
//   console.log('Successfully created ' + createdUser.dataValues.firstName)
// })

db.user.findOrCreate({
  // constraint
  where: {
    name: "Susan",
    email: "heythere@aol.com"
  }
}).then(function([returnedUser, created]) {
  // Second step: findOrCreate a snack to associate with Susan
  db.snack.findOrCreate({
<<<<<<< HEAD
    // be mindful of casing and spelling because SQL is picky! 
=======
>>>>>>> submain
    where: { name: "Doritas", description: "Wasabi" }
  }).then(function([returnedSnack, created]) {
    // Last Step: associating the user to the snack - addSnack()
    // addSnack() is a method generated by Sequelize that uses the name of the model
    returnedUser.addSnack(returnedSnack).then( function(relationInfo) {
      console.log(relationInfo)
      console.log('-----------------------------')
      console.log(`${returnedSnack.name} added to ${returnedUser.name}`)
    })
  })
})