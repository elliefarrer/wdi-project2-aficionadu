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
      photo: 'https://leeds-list.com/wp-content/uploads/2015/01/akbars_leeds_lamb_curry-web-800x450.jpg',
      url: 'https://www.akbars.co.uk/manchester',
      comments: [
        {
          name: 'sammanchester',
          headline: 'Fabulous Restaurant',
          content: 'I go here a lot, really love the food here. Almost as much as I love the big portion sizes! I recommend the Chef\'s Challenge 😜',
          rating: 5,
          date: 'Mon Jul 30 2018 08:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://www.weekendnotes.co.uk/im/004/09/phone-6661.jpg'
        }
      ],
      addedBy: 'akbars'
    },
    {
      name: 'Archipelago',
      address: '53 Cleveland Street',
      city: 'London',
      postcode: 'W1T 4JJ',
      description: 'Exotic meats and insect sides in flamboyant restaurant with Buddhas, palms and peacock feathers.',
      price: '£££',
      cuisine: 'Fusion',
      photo: 'http://www.archipelago-restaurant.co.uk/wp-content/uploads/2013/12/Archipelago_Food_Shots_malaysian_grain.jpg',
      url: 'http://www.archipelago-restaurant.co.uk/',
      comments: [
        {
          name: 'peterlondon',
          headline: 'Only For The Brave!',
          content: 'I love Archipelago for their exotic meats and interesting flavours. There is always something new to try if you\'re brave enough to try zebra or locust!',
          rating: 5,
          date: 'Sun Jul 29 2018 12:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'http://thingstodo.org.uk/wp-content/uploads/2016/06/archipelago-3.jpg'
        },
        {
          name: 'mollylondon',
          headline: 'Tasty But Expensive Food',
          content: 'The restaurant is really beautiful and the food is so interesting. However it is a little expensive 😣',
          rating: 4,
          date: 'Wed Aug 1 2018 20:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/02/3b/df/e9/zebra-entree.jpg'
        }
      ],
      addedBy: 'archipelago'
    },
    {
      name: 'DF/Mexico',
      address: '15 Hanbury Street',
      city: 'London',
      postcode: 'E1 6QR',
      description: 'Burritos and bottomless aguas frescas round out the menu at this industrial-chic Mexican operation.',
      price: '££',
      cuisine: 'Mexican',
      photo: 'https://i.pinimg.com/originals/4c/4c/da/4c4cda901a0feb55a5b520ba45dca1b5.jpg',
      url: 'https://www.dfmexico.co.uk/old-truman-brewery-1/',
      comments: [
        {
          name: 'mollylondon',
          headline: 'Comfort Food',
          content: 'I love DF/Mexico, I come here all the time. It\'s great comfort food and the staff are so friendly! 😆',
          rating: 5,
          date: 'Wed Jul 25 2018 18:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://media.timeout.com/images/101679963/630/472/image.jpg'
        }
      ],
      addedBy: 'dfmexico'
    },
    {
      name: 'DF/Mexico',
      address: '28-29 Tottenham Court Road',
      city: 'London',
      postcode: 'W1T 1BL',
      description: 'Burritos and bottomless aguas frescas round out the menu at this industrial-chic Mexican operation.',
      price: '££',
      cuisine: 'Mexican',
      photo: 'http://whateveryourdose.com/wp-content/uploads/2017/03/DF-Mexico.jpeg',
      url: 'https://www.dfmexico.co.uk/tottenham-court-rd/',
      comments: [
        {
          name: 'jasminelondon',
          headline: 'Not Spicy Enough For Me!',
          content: 'The food is very reasonably priced and the decoration of the restaurant is really cool. I love spicy food and I was hoping the burrito would have more heat than it did. Disappointing. Sorry 😣',
          rating: 3,
          date: 'Wed Aug 1 2018 09:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'http://mextrade.co.uk/wp-content/uploads/2015/11/DF-Mexico-Cochinita-Tacos.jpg'
        }
      ],
      addedBy: 'dfmexico'
    },
    {
      name: 'Red\'s True Barbecue',
      address: '22 Lloyd Street',
      city: 'Manchester',
      postcode: 'M2 5WA',
      description: 'Stripped-back diner with exposed bricks and pipework, serving US-style barbecued burgers and steaks.',
      price: '£££',
      cuisine: 'American',
      photo: 'http://truebarbecue.com/uploads/2015/09/P10268-0501-Final-Web-Res-JPG.png',
      url: 'https://truebarbecue.com/manchester/',
      comments: [
        {
          name: 'brianaltrincham',
          headline: 'Proper American Barbecue!!',
          content: 'This place is so cool! We ordered the sharing platter and there was so much perfectly-cooked meat to share, we were all so full! It\'s perfect for an evening out with the lads!! We will definitely be coming back!',
          rating: 5,
          date: 'Mon Jul 30 2018 13:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article6990745.ece/ALTERNATES/s615/JS35057571.jpg'
        }
      ],
      addedBy: 'redstruebarbecue'
    },
    {
      name: 'Poppies Fish & Chips',
      address: '6-8 Hanbury Street',
      city: 'London',
      postcode: 'E1 6QR',
      description: 'Traditional fish-and-chip shop decorated with 1950s memorabilia, offering table service or takeaway.',
      price: '££',
      cuisine: 'British',
      photo: 'http://halalgems.com/wp-content/uploads/2016/10/Screen-Shot-2016-10-14-at-11.10.14.png',
      url: 'http://poppiesfishandchips.co.uk/',
      comments: [
        {
          name: 'peterlondon',
          headline: 'Leave This One To Tourists',
          content: 'Good service in a pleasant setting for ridiculously overpriced fish and chip supper. If you are British, stick to your local chippy.',
          rating: 3,
          date: 'Tue Jul 31 2018 18:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'http://cdn.ltstatic.com/2016/May/YF662310_942long.jpg'
        }
      ],
      addedBy: 'poppiesfishandchips'
    },
    {
      name: 'Bad Egg',
      address: 'Citypoint 1 Ropemaker Street',
      city: 'London',
      postcode: 'EC2Y 9AW',
      description: 'Hip, informal eatery & bar featuring eggs in eclectic dishes from burgers to tacos, hash and more.',
      price: '££',
      cuisine: 'American',
      photo: 'https://www.badegg.london/wp-content/uploads/2018/05/Bad-Egg-Moorgate-food-big-macanchini.jpg',
      url: 'https://www.badegg.london/',
      comments: [
        {
          name: 'paulinerichmond',
          headline: 'Not As Good As Other Restaurants Nearby',
          content: 'I came here for a bite to eat before seeing a play nearby. What a shame the food is not as good as the restaurants in the Barbican Centre, however Bad Egg was the only one nearby that\'s open on a Saturday. I\'m not a fan of American food.',
          rating: 3,
          date: 'Mon Jul 30 2018 07:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://media.timeout.com/images/101845825/630/472/image.jpg'
        }
      ],
      addedBy: 'badegg'
    },
    {
      name: 'My Old Dutch',
      address: '131-132 High Holborn',
      city: 'London',
      postcode: 'WC1V 6PS',
      description: 'Traditional Dutch snacks and pancakes in narrow cafe with hanging delft plates and wooden tables.',
      price: '££',
      cuisine: 'Dutch',
      photo: 'https://media-cdn.tripadvisor.com/media/photo-s/08/3e/42/cf/my-old-dutch-holborn.jpg',
      url: 'http://www.myolddutch.com/restaurants-home/#holborn',
      comments: [
        {
          name: 'benlondon',
          headline: 'Real Dutch Pancakes and Great Gluten Free Options',
          content: 'I was so impressed by the wide range of choice on here. Both sweet and savoury pancakes, waffles, poffertjes, and plenty of gluten free options! I highly recommend it 😆',
          rating: 5,
          date: 'Wed Aug 1 2018 17:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://resizer.otstatic.com/v2/photos/large/23362963.jpg'
        },
        {
          name: 'jasminelondon',
          headline: 'Guilty Pleasure!',
          content: 'I came here with my friends last week and we all loved the sweet pancakes and huge milkshakes. Only complaint is that the service was a little slow, but we loved it otherwise!',
          rating: 4,
          date: 'Sun Jul 29 2018 15:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'http://www.galuxsee.com/wp-content/uploads/2016/04/My-Old-Dutch-in-Holborn-20160228-Instagram-User-jonathancheban-Map.jpg'
        },
        {
          name: 'sammanchester',
          headline: 'What a Treat',
          content: 'Visited here whilst on a trip to London last week, and I wish we had one here in Manchester! There must be a million calories in every sweet pancake, but it tasted amazing!',
          rating: 5,
          date: 'Sun Jul 29 2018 22:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://writeasiseeit.files.wordpress.com/2014/09/my-old-dutch-blog.jpg'
        },
        {
          name: 'mollylondon',
          headline: 'Pancake Day Treat!',
          content: 'I discovered this place on Pancake Day and the pancakes were so yummy that I had to come again! Omg there is such a wide range of food on the menu, and such great value for money 😋',
          rating: 5,
          date: 'Fri Jul 27 2018 20:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://i2.wp.com/www.todott.com/wp-content/uploads/2016/10/my-old-dutch-5.jpg?fit=800%2C800&ssl=1'
        }
      ],
      addedBy: 'myolddutch'
    },
    {
      name: 'La Bandera',
      address: '2 Ridgefield',
      city: 'Manchester',
      postcode: 'M2 6EQ',
      description: 'Market-fresh, classic Spanish cuisine in airy, contemporary space with yellow booths and banquettes.',
      price: '£££',
      cuisine: 'Spanish',
      photo: 'https://img.static-bookatable.com/la-bandera-restaurante-bar-stockport-greater-manchester-1.jpg?id=0638f718-1987-4ed7-8ecf-100df12f6e99.jpg&404=bat2/404-restaurant.jpg',
      url: 'https://labandera.co.uk/',
      comments: [
        {
          name: 'lisasalford',
          headline: 'Fantastic Restaurant',
          content: 'We had a great time yesterday at this restaurant for my friends birthday. All 6 of us loved the tapas - every dish tasted amazing! They also do great cocktails! Staff were friendly and helpful and we can’t wait to return 😎',
          rating: 5,
          date: 'Sat Jul 28 2018 11:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://www.restaurantsofmanchester.com/photos/spanish/labandera-food600.jpg'
        }
      ],
      addedBy: 'labandera'
    },
    {
      name: 'Le Gavroche',
      address: '43 Upper Brook Street',
      city: 'London',
      postcode: 'W1K 7QR',
      description: 'Michel Roux Jr.\'s famous fine-dining restaurant offering luxe French food and impeccable service.',
      price: '££££',
      cuisine: 'French',
      photo: 'http://www.le-gavroche.co.uk/images/1.jpg',
      url: 'http://www.le-gavroche.co.uk/index.html',
      comments: [
        {
          name: 'paulinerichmond',
          headline: 'Outstanding!',
          content: 'Michelin starred experience all round. Fantastic service and amazing food. Well done and definitely a must visit.',
          rating: 5,
          date: 'Tue Jul 31 2018 12:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/02/87/10/d8/filename-le-gavroche.jpg'
        }
      ],
      addedBy: 'legavroche'
    },
    {
      name: 'Pizza Union',
      address: '29 Leman Street',
      city: 'London',
      postcode: 'E1 8PT',
      description: 'Communal wood tables line this industrial-style canteen for gourmet pizzas fire baked in 3 minutes.',
      price: '£',
      cuisine: 'Italian',
      photo: 'https://londontheinside.com/wp-content/uploads/2017/11/pizzaunion-LOTI.jpg',
      url: 'https://www.pizzaunion.com/',
      comments: [
        {
          name: 'mollylondon',
          headline: 'Best Pizza in the East End',
          content: 'Omg I love Pizza Union! You can get a margherita pizza for £4, which is stone baked in three minutes. Can\'t argue with that 😍',
          rating: 5,
          date: 'Sat Jul 28 2018 23:00:00 GMT+0100 (British Summer Time)',
          imgUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/Qa3F1WHeWkbGSR9jqxuh0g/348s.jpg'
        }
      ],
      addedBy: 'pizzaunion'
    }
  ])
  .then(restaurants => console.log(`Added ${restaurants.length} yummy restaurants`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());


const User = require('../models/user');
User.collection.drop();

User
  .create([
    {
      fullName: 'Ellie Farrer',
      username: 'elliefarrer',
      email: 'elliefarrermusic@gmail.com',
      password: 'pass',
      passwordConfirmation: 'pass',
      type: 'reviewer',
      city: 'London',
      gender: 'Female',
      dateOfBirth: '1995-02-22',
      personality: [ 'Fine dining fan', 'Adventurous eater', 'Will eat anything and everything'],
      profilePic: 'https://media.licdn.com/dms/image/C5603AQEhna5-6Fb-4g/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=LVVkfe_HXwYQnmBtS6S9kDxdqjNqJjKqS55zkXXE4iI',
      role: 'moderator'
    },
    {
      fullName: 'Jasmine',
      username: 'jasminelondon',
      email: 'jasmine@aficionadu.com',
      password: 'j',
      passwordConfirmation: 'j',
      type: 'reviewer',
      city: 'London',
      gender: 'Female',
      dateOfBirth: '1993-04-01',
      personality: ['Adventurous eater', 'Spicy food lover', 'Comfort food fan'],
      profilePic: 'http://thysistas.com/wp-content/uploads/2014/10/2014-SmilingBlackWoman.jpeg',
      role: 'user'
    }
  ])
  .then(users => console.log(`Added ${users.length} users`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
