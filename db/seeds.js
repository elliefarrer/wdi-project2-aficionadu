const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/aficionadu');

const Restaurant = require('../models/restaurant');

Restaurant.collection.drop();

Restaurant
  .create([
    {
      name: 'Akbar\'s',
      address: '73-83 Liverpool Road',
      city: 'Manchester',
      postcode: 'M3 4NQ',
      description: 'Popular, buzzy restaurant serving South Indian cuisine as well as classic North Indian dishes.',
      price: '££',
      cuisine: 'Indian',
      photo: 'https://www.akbars.co.uk/sites/default/files/styles/gallery_landscape/public/gallery-images/Akbar%27s-Restaurant-Manchester-4.jpg',
      url: 'https://www.akbars.co.uk/manchester',
      comments: [
        { name: 'g', content: 'Fabulous restaurant! 😎', rating: 5 },
        { name: 'a', content: 'Loved it! 💖', rating: 5 }
      ]
    },
    {
      name: 'Archipelago',
      address: '53 Cleveland Street',
      city: 'London',
      postcode: 'W1T 4JJ',
      description: 'Exotic meats and insect sides in flamboyant restaurant with Buddhas, palms and peacock feathers.',
      price: '£££',
      cuisine: 'fusion',
      photo: 'http://www.archipelago-restaurant.co.uk/wp-content/uploads/2013/12/Archipelago_Venue1.jpg',
      url: 'http://www.archipelago-restaurant.co.uk/'
    },
    {
      name: 'DF/Mexico',
      address: '15 Hanbury Street',
      city: 'London',
      postcode: 'E1 6QR',
      description: 'Burritos and bottomless aguas frescas round out the menu at this industrial-chic Mexican operation.',
      price: '££',
      cuisine: 'Mexican',
      photo: 'https://static1.squarespace.com/static/59ad4e6abebafb5b86860dba/59ce23e903596e3c64d6014e/59ce314e12abd9ff08b4554d/1513849848851/JOS2014029D00001.jpg',
      url: 'https://www.dfmexico.co.uk/old-truman-brewery-1/'
    },
    {
      name: 'DF/Mexico',
      address: '28-29 Tottenham Court Road',
      city: 'London',
      postcode: 'W1T 1BL',
      description: 'Burritos and bottomless aguas frescas round out the menu at this industrial-chic Mexican operation.',
      price: '££',
      cuisine: 'Mexican',
      photo: 'https://static1.squarespace.com/static/59ad4e6abebafb5b86860dba/59ce21fcc534a53c74b19398/59ce45029f8dce25e184e7e4/1506690311052/SoftroomWahacaKateSam_DFMexicoTCR_AdamScott_05.jpg',
      url: 'https://www.dfmexico.co.uk/tottenham-court-rd/'
    },
    {
      name: 'Red\'s True Barbecue',
      address: '22 Lloyd Street',
      city: 'Manchester',
      postcode: 'M2 5WA',
      description: 'Stripped-back diner with exposed bricks and pipework, serving US-style barbecued burgers and steaks.',
      price: '£££',
      cuisine: 'American',
      photo: 'https://truebarbecue.com/wp-content/uploads/2016/09/Mainimage-414x350.jpg',
      url: 'https://truebarbecue.com/manchester/'
    },
    {
      name: 'Poppies Fish & Chips',
      address: '6-8 Hanbury Street',
      city: 'London',
      postcode: 'E1 6QR',
      description: 'Traditional fish-and-chip shop decorated with 1950s memorabilia, offering table service or takeaway.',
      price: '££',
      cuisine: 'British',
      photo: 'http://poppiesfishandchips.co.uk/wp-content/uploads/2015/09/popies_0003_Layer-11-742x550.jpg',
      url: 'http://poppiesfishandchips.co.uk/'
    }
  ])
  .then(restaurants => console.log(`Added ${restaurants.length} yummy restaurants`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
