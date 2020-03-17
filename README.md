# next-navigation-boilerplate
next.js navigation boilerplate that supports multi-languages (using [next-i18next](https://github.com/isaachinman/next-i18next)) and themes
# next-i18next-boilerplate
 example config. Multilingual error page is included.

# Live Demo
Visit [https://enigmatic-woodland-62111.herokuapp.com/](https://enigmatic-woodland-62111.herokuapp.com/)

This app is running on a free dynos of heroku. Thus, it can take some time on the first load.

## Get started yourself
- Clone the project, enter the root directory and run <code>npm install</code>
- For development mode, run <code>npm run dev</code>
- For production mode, run <code>npm run build</code> and then <code>npm run start</code>

## Troubleshooting
- next-i18next does [not yet support the serverless mode](https://github.com/isaachinman/next-i18next/issues/274). Deploying the project to Zeit NOW is thus not possible. You can deploy on heroku as an alternative, or wait for serverless support.
- It seems that changing the language in the error component itself works flawless. In another project of mine, where I change the language in the nav component, unexpected errors have occured (the statusCode was overwritten with null, because getInitialProps was called twice). To fix, I only saved the statusCode when it was not null. This works, but is no optimal solution. See [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/master/pages/_error.js).

