# Patient Zero Front-end

This is the front-end for my [Patient Zero API](https://github.com/jaimeluong/patient-zero-api) built using React and Bootstrap styling components. It allows for interfacing with the back-end by initiating HTTP requests using the built-in [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), allowing for asynchronous requests.

React is used to render custom front-end views, with hooks such as useState and useEffect to manage HTTP requests and component state. React Router (react-router-dom) is used for routing to all relevant pages. Lastly, I am using Bootstrap stylesheets and components to make features such as a Navbar and Footer.

- **React/react-router-dom version:** 18.2.0

- **Bootstrap version:** 5.2.3


## Run application

Clone this repo after cloning and starting the back-end API. This app will be hosted on port 3001, intended for use alongside the API which runs on port 3000.

```
$ git clone git@github.com:jaimeluong/patient-zero-frontend.git
$ cd patient-zero-frontend
$ npm start
```

## Notes

- Work on adding POST request feature through form submissions for all back-end models.
- Integrate more Bootstrap styling and move away from any vanilla HTML/CSS in the code.
- Refactor components to maximize reusability; keep code DRY.
