This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### npm run deploy error
> simple-todo-list-app@0.1.0 deploy D:\Programming\ReactJs\github\simple-todo-list-app
> gh-pages -d build

Failed to get remote.origin.url (task must either be run in a git repository with a configured origin remote or must be configured with the "repo" option).
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! simple-todo-list-app@0.1.0 deploy: `gh-pages -d build`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the simple-todo-list-app@0.1.0 deploy script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\PAUL\AppData\Roaming\npm-cache\_logs\2020-10-10T10_54_24_434Z-debug.log

### Solution for npm run deploy error
I just had the same issue and was able to resolve it. Here's what I did:


>In my terminal, run git remote -v,
  D:\Programming\ReactJs\github\simple-todo-list-app>git remote -v
  simple-todo-list-app    https://github.com/11611746/simple-todo-list-app.git (fetch)
  simple-todo-list-app    https://github.com/11611746/simple-todo-list-app.git (push)

>I did not see any remote's withe the name 'origin'. So, I added one with 
>git remote add origin <url>, with the URL of my repository on Github.
  D:\Programming\ReactJs\github\simple-todo-list-app>git remote -v
  origin  https://github.com/11611746/simple-todo-list-app.git (fetch)
  origin  https://github.com/11611746/simple-todo-list-app.git (push)
  simple-todo-list-app    https://github.com/11611746/simple-todo-list-app.git (fetch)
  simple-todo-list-app    https://github.com/11611746/simple-todo-list-app.git (push)

>My other remote pointed to the same url, it just wasn't called 'origin'.
>Then, when I ran 'npm run deploy' everything worked. I hope this helps, though it's a year after you last posting.
