#### Features of NetflixGPT Application

1. Authentication
2. Protected route
3. Form Handling
4. Integrate GPT to search for movies

#### Steps taken to build the application

1. Create React App
2. Configured TailwindCSS
3. Header
4. Routing of App
5. Login Form
6. Sign Up Form
7. Form Validation
8. useRef hook
9. Firebase setup
10. Create signup and signin 
11. Implement Sign In User API
12. Created Redux store with user slice
13. Implemented Singout feature
14. Updated User profile 
15. Protected Route
16. BugFix: sign up user display name
17. BugFix: if the user is not logged in, then redirect user to "Login" page.


#### Validation

1. Validating email and password when user tries to login.

2. Validating name, email and password when user tries to sign up.

## UI features

- Login/Sign Up
  - SignIn and Sign up form
  - Redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main movie
    - Trailor in background
    - Title and description
    * Movie Suggestions
      - Movie Lists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions


If you have a lot of form fields, then it becomes a tedious task to validate every single field data. To solve this problem, you can use Formik library to create your form and do form validation.

As soon as user signs up or login, firebase sends us user object, and i will save that user object into redux store, or cookie.

Login => Save user data to redux store => Access user data from redux store whererver you need it.