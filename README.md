# Exam Registration React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is essentially a demo to document the best practices when developing a React app with firebase.

Below are some of the best practices implemented,

1. Basic template with create react app
2. Added firebase using  `firebase init`
3. Using vanilla bootstrap dependency
4. `React datepicker`
5. `React hook form`
6. `React router dom`
7. .env file to manage firebase keys
8. StateProvider to manage state using context
9. Custom hook to see user auth status `useAuthStatus`
10. `reducer.js` to manage the actions
11. Login using google signin
12. Private routes to make sure user can't just navigate 



## How to run locally:

Create a firebase app and add a .env file in the root of the project.

Set the keys as below

REACT_APP_FIREBASE_API_KEY = `<your key>`\
REACT_APP_FIREBASE_AUTH_DOMAIN=`<your key>`\
REACT_APP_FIREBASE_DATABASE_URL=`<your key>`\
REACT_APP_FIREBASE_PROJECT_ID=`<your key>`\
REACT_APP_FIREBASE_STORAGE_BUCKET=`<your key>`\
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= `<your key>`\
REACT_APP_FIREBASE_APP_ID= `<your key>`

Next, do `npm install`\
and then `npm start`

## How to deploy to firebase:

To deploy to firebase,\
do `npm run build`\
and then `firebase deploy --only hosting` 
