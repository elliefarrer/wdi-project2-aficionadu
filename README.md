# Aficionadu
[Heroku](https://aficionadu.herokuapp.com/)

[GitHub Repo](https://github.com/platypotomus/wdi-project2-aficionadu)

## Brief
To create a RESTful restaurant review app, like a mini TripAdvisor. The app had to had to meet the following criteria:
* Has a User model and user authentication
* Has models for Restaurants and reviews
* Allows users to add, edit, and delete restaurants and reviews.
* Users can only delete the reviews and restaurants that they added.
* Is styled with Bulma, but doesn't look like Bulma

## App Description
Aficionadu is a restaurant review app, currently featuring a range of restaurants in London and Manchester. Users can sign up as either a restaurant and reviewer. This allows restaurants to have more control over their restaurant profiles. Meanwhile, reviewers can read and upload time-stamped reviews and photos.

## Technologies Used
* JavaScript (ECMAScript 6)
* SCSS with Bulma and CSS animation
* Node.js
* MongoDB
* bcrypt: v3.0.0
* bluebird: v3.5.1
* body-parser: v1.18.3
* ejs: v2.6.1
* express: v4.16.3
* express-ejs-layouts: 2.4.0
* express-flash: v0.0.2
* express-session: v1.15.6
* method-override: v3.0.0
* mongoose: v5.2.5
* morgan: v1.9.0
* Git
* GitHub
* Heroku
* Google Fonts
* Fontawesome
* PhotoShop

## Approach Taken

### Wireframes
GA's UXDI students kindly provided us with some very helpful wireframes. I stuck to them quite closely, and also looked at TripAdvisor and Yelp for inspiration. These were drawn in PhotoShop. Naturally these changed as I built the app.

#### Home Page
![Home Wireframe](wireframes/home.png)


#### Index Page
![Index Wireframe](wireframes/index.png)


#### Restaurant Show Page
![Restaurant Show Wireframe](wireframes/restaurant-show.png)


#### New Restaurant Page
![New Restaurant Wireframe](wireframes/new-restaurant.png)

#### Profile Show Page
![Profile Page Wireframe](wireframes/profile-page.png)


### Functionality
I hit MVP after one day of coding. This met the brief (minus the Bulma styling), and also included the two different types of account.

#### Home Page
![Home Page](screenshots/home-page1.png)

#### Index Page
![Index Page](screenshots/index-page1.png)

#### Show Page
![Show Page](screenshots/show-page1.png)

#### Reviewer Sign Up Page
![Reviewer Sign Up Page](screenshots/reviewer-sign-up1.png)

The next thing to do was to build the users profile and give them the option of editing their details

#### Profile Page
![Profile Page](screenshots/profile-page1.png)

I then improved the reviewing experience, by allowing users to add a headline, a rating, and a photo with their review. Looking at TripAdvisor and Booking.com really inspired me to add more detail to this section. I also added a timestamp feature to the reviews.

Finally, I added review and photo moderation. I created an account with a "moderator" type (all the others are set to "user".) Then I created a page that only the moderator can see, where unmoderated reviews go. All reviews are given an isModerated key set to "false," and the moderator has to set them to "true" for them to appear on the site. They can also delete reviews.

### Styling
I found a colour scheme on Canva which I felt captured the essence of my app, especially with its cutesy messages. I used two Google Fonts: Oxygen for the main text, and Gochi Hand for the app name. Fonteawesome was great to add extra detail to the app.

I designed the default profile pictures and badges in PhotoShop. For these, I used blue for reviewer accounts, and peach for restaurant accounts.

#### Default Profile Pictures
![Default Profile Picture](public/images/restaurant-default-dp.png)
![Default Profile Picture](public/images/reviewer-default-dp.png)

#### Badges for Reviewers
![Review Badge](public/images/badge-chatty.png)
![Photo Badge](public/images/badge-photographer.png)

#### Badges for Restaurants
![Review Badge](public/images/badge-popular.png)
![Photo Badge](public/images/badge-photogenic.png)

## Finished Product
#### Home Page
![Home Page](screenshots/home-final1.png)

#### Index Page
![Index Page](screenshots/index-page-final.png)

#### Show Page
![Show Page](screenshots/show-page-final.png)

![Show Page](screenshots/comments-final.png)

#### Reviewer Sign Up
![Reviewer Sign Up Page](screenshots/reviewer-sign-up-final.png)

#### Profile Page
![Profile Page](screenshots/profile-page-final.png)

#### Comment Moderation Page
![Comment Moderation Page](screenshots/comment-moderation-final.png)



## Wins and Blockers
A big win was the basic functionality of the app, including the RESTful routes. I was surprised with how quickly I managed to build this, along with how few problems I ran into.

User moderation was a blocker. I found it easy to add the DELETE comment feature, but less to so add the moderate comment button. I eventually fixed this by attaching a PATCH request, so only the isModerated field is updated.

Bulma was also somewhat of a challenge, since I hadn't used it much before. I wanted to design something that looked good and not like Bulma's defaults, but I felt that a lot of my design decisions were blocked or made more difficult by Bulma. But after some customisation, I managed to design an app I was happy with.

## Future Features
There are several features I want to add, such as review upvotes, review replies (perhaps only for restaurant accounts to reply to reviewers,) a search feature, and a filter function - so users can filter by location, cuisine, price etc.

I would also like the user's activity to appear on their profiles, and for the badge feature to work. This would enable users to receive a badge when they have uploaded/received five reviews and/or photos.

I would also like to add a user photo show page/model, so users can click on the photos and see the reviewer name, review, rating, and timestamp.

Finally, I would like to work on the mobile responsiveness. Thanks to Bulma's column layout, the pages don't look too bad. However I need to fix the navbar and wireframe and edit the mobile layout of some of the pages.
