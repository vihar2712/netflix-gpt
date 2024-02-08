# Netflix GPT

- Create React App
- Configured Tailwind
- Created a Sign In form
- Created a Sign-Up form
- implemented routing
- form validation
- set up Firebase for authentication
    - npm install firebase
    - npm i -g firebase-tools
    - firebase login (connect to the Firebase account)
    - firebase init (firebase initialization and hosting configuration)
    - firebase deploy
- implemented authentication logic for sign-in/signup (inside login.js file)
- store user credentials inside the Firebase console after sign up 
- retrieve user credentials from Firebase after login
-    -used methods like onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile etc...
- show the user name on the header on ('/browse') after sign up/sign in using redux(created a store, slice, dispatch function, render function and component using a selector to subscribe to the store) 
- sign out working => on click, navigate back to login page
- started working on the browse page
- initialized TMDB API with the access token 
- created a slice for 'Now Playing Movies', got data from API and stored it in the store
- created a custom hook having the logic of fetching the 'Now Playing Movies' from the API.
- created a landing base with the movie title and its trailer playing in the background
- getting the trailer video from the TMDB API and storing it in the store
- embed the trailer video from YouTube and play it in the loop, autoplay, mute
- worked on the secondary container which shows the movie lists
- created different reducers for different movie categories
- created a central hook (useMovieCategory) which takes the API link and dispatch function as parameters and stores the data returned by API inside the redux store
- build a GPT Search Page
- Bonus feature - Made the GPT Search Page multi-lingual. It supports 4 languages - English , Hindi , French , Italian
- implemented the logic to use OPEN AI API but the limit to request the API is limited to very less.So, I took hardcoded data.
- took those movies and implemented the logic to search those movies inside TMDB API.
-made the web application responsive
    
## Features to be included:

### Login/Signup (if not authenticated)
### SignIn/signup form 
### After Authentication, route to /browse 

### Browse page(if authenticated)
### All Movies on the homepage
####    -One movie in large portion with a Trailer running in the background
####    -Carousel with all genre-related movies
### Netflix GPT page
####    -Search feature
####    -provide movie suggestions based on search