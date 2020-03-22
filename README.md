# next-navigation-boilerplate
next.js navigation boilerplate that supports multiple languages (using [next-i18next](https://github.com/isaachinman/next-i18next)) and themes

# Live Demo
Visit [https://vast-harbor-93695.herokuapp.com](https://vast-harbor-93695.herokuapp.com)

This app is running on a free dynos of heroku. Thus, it can take some time on the first load.

# Features
- Server side rendering with [next.js](https://nextjs.org/)
- Powerful CSS with [SASS](https://sass-lang.com/)
- Themes! Take a look at the setup [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/master/src/common/style/_themes.scss) and the usage [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/style.sass#L43)
- Multi-language support with [next-i18next](https://github.com/isaachinman/next-i18next)
- Multilingual aria-labels, see [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/index.js#L85)
- Code inspection with [ESLint](https://eslint.org/)
- A navigation that scrolls down when the <code>&lt;main&gt;</code>-container is surpassed (you can use another container or fixed number, just change [this line](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/index.js#L52))
- Active Links! The active link gets the class <code>nav-link-active</code>. See [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/fc56c9b2e2c930a88c2009a96b5bba12cc9c72c5/src/components/Nav/helpers/ActiveLink.js#L13) (note: the brand-icon does not posess this class, because it's not wrapped into the <code>ActiveLink</code> component)

## Get started
- Clone the project, enter the root directory and run <code>npm install</code>
- For development mode, run <code>npm run dev</code>
- For production mode, run <code>npm run build</code> and then <code>npm run start</code>

## Troubleshooting
- next-i18next does [not yet support the serverless mode](https://github.com/isaachinman/next-i18next/issues/274). Deploying the project to Zeit NOW is thus not possible. You can deploy on heroku as an alternative, or wait for serverless support.
- Changing the language while being on the [_error.js page](https://github.com/borispoehland/next-navigation-boilerplate/blob/master/pages/_error.js) caused errors (the statusCode was overwritten with null, because getInitialProps was called twice). To fix, I only save the statusCode when it is not null. This works, but is no optimal solution. If you have any idea on how to make this better, please contact me!


