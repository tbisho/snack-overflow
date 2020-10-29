'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'moxie@snack.it',
        name: 'Moxie',
        password: bcrypt.hashSync('saltsalt', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
          email: 'piper@snack.it',
          name: 'Piper',
          password: bcrypt.hashSync('saltsalt', 12),
          createdAt: new Date(),
          updatedAt: new Date()
      }, {
          email: 'fiona@snack.it',
          name: 'Fiona',
          password: bcrypt.hashSync('saltsalt', 12),
          createdAt: new Date(),
          updatedAt: new Date()
      }, {
          email: 'rex@snack.it',
          name: 'Rex',
          password: bcrypt.hashSync('saltsalt', 12),
          createdAt: new Date(),
          updatedAt: new Date()
      },{
        email: "mac@snack.it",
        name: 'Mac',
        password: bcrypt.hashSync('saltsalt', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], { returning: true });
    console.log('bulk insert: ', bulkUsers);

    await queryInterface.bulkDelete('snacks', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkSnacks = await queryInterface.bulkInsert('snacks', [
      {
        name: 'Paleta Payaso',
        description: 'chocolate covered marshmellow with gummies',
        imgUrl: 'https://i.imgur.com/UlcCeEC.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Sponge Bob Popsicle',
        description: 'cold, yellow, and deliciously cursed',
        imgUrl: 'https://i.imgur.com/SOUw3jZ.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Doritos Nacho Cheese',
        description: 'Extreme nacho cheese flavor (we are looking for sponships)',
        imgUrl: 'https://i.imgur.com/Waf38Gs.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Doritos Cool Ranch',
        description: 'Packed with cool ranch flavor (seriously, whatup Frito Lay, we are looking for investors)',
        imgUrl: 'https://i.imgur.com/Z18mbrb.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Granola', 
        description: 'healthy, crunchy, sweet',
        imgUrl: 'https://i.imgur.com/ZMBWuXy.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Takis Fuego',
        description: 'Better than hot cheetos',
        imgUrl: 'https://i.imgur.com/KdJbzzL.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Peppermint Brownie Bites',
        description: 'gluten-free! (WOW, want to collab? Looking for investors)',
        imgUrl: 'https://i.imgur.com/Y7WrxoU.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Pretzels',
        description: 'The standard, the classic, the pretzel (hey Snyders wanna invest? We can drop your name here)',
        imgUrl: 'https://i.imgur.com/BgrUQq9.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {returning: true});
    console.log('snacks: ', bulkSnacks);

    await queryInterface.bulkDelete('user_snacks', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkuserSnacks = await queryInterface.bulkInsert('user_snacks', [
      {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        snackId: bulkSnacks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        snackId: bulkSnacks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
    console.log('mapping: ', bulkuserSnacks);
    
    await queryInterface.bulkDelete('comments', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkComments = await queryInterface.bulkInsert('comments', [
      {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[0].id,
        text: 'Danish jelly-o bonbon. Gummies pastry souffle tootsie roll caramels caramels sweet roll. Halvah fruitcake jelly-o sweet roll caramels tootsie roll. Apple lollipop muffin jelly beans biscuit chocolate.' ,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[6].id,
        text: 'Chocolate bar cotton candy liquorice. Tart chupa chups jelly-o gummi bears cake marzipan ice cream. Candy marshmallow jelly beans cotton candy.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[0].id,
        snackId: bulkSnacks[4].id,
        text: 'Cupcake icing chocolate. Halvah brownie sweet roll. Lemon drops wafer pudding bonbon powder donut tart gingerbread.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        snackId: bulkSnacks[1].id,
        text: 'Bonbon jujubes cake lemon drops. Marshmallow marshmallow brownie dessert. Chocolate tart apple pie sesame snaps sesame snaps. Wafer macaroon candy ice cream cheesecake pie gummi bears.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[1].id,
        snackId: bulkSnacks[2].id,
        text: 'Cheesecake pastry tart cupcake halvah oat cake fruitcake bear claw. Cookie candy canes cookie. Cookie pudding sesame snaps. Jelly pastry topping.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[3].id,
        text: 'Pudding oat cake pastry croissant. Jelly-o chocolate bar sweet roll gummies. Brownie muffin topping wafer marshmallow.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[2].id,
        text: 'Chocolate bar muffin dessert fruitcake pudding soufflé cotton candy. Jelly chupa chups pudding dessert cake sweet croissant soufflé. Danish lemon drops brownie jelly-o. Sesame snaps chocolate bar gummies caramels.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[2].id,
        snackId: bulkSnacks[4].id,
        text: 'Icing caramels fruitcake halvah tiramisu. Chocolate ice cream halvah icing jujubes chupa chups tiramisu cotton candy. Gingerbread brownie jelly-o gummies ice cream dessert ice cream jujubes toffee. Marzipan chocolate brownie.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[5].id,
        text: 'Jelly brownie marshmallow caramels candy canes chocolate. Danish chupa chups macaroon tootsie roll danish liquorice chocolate.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[0].id,
        text: 'Oat cake gummi bears gummi bears chocolate bar halvah. Ice cream cake marzipan pie. Chocolate pastry macaroon cheesecake jelly icing bear claw ice cream bear claw.',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: bulkUsers[3].id,
        snackId: bulkSnacks[1].id,
        text: 'Chocolate bar pastry cheesecake liquorice. Cupcake lemon drops tiramisu lollipop bear claw caramels toffee bonbon.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
    console.log('mapping: ', bulkComments);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
