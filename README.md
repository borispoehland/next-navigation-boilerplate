# next-navigation-boilerplate
next.js navigation boilerplate that supports multiple languages (using [next-i18next](https://github.com/isaachinman/next-i18next)) and themes

# Live Demo
Visit [https://next-navigation-boilerplate.vercel.app](https://next-navigation-boilerplate.vercel.app)

# Features
- Server side rendering with [next.js](https://nextjs.org/)
- Powerful CSS with [SASS](https://sass-lang.com/)
- Themes! Take a look at the setup [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/master/src/common/style/_themes.scss) and the usage [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/style.sass#L43)
- Multi-language support with [next-i18next](https://github.com/isaachinman/next-i18next)
- Multilingual aria-labels, see [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/index.js#L85)
- Code inspection with [ESLint](https://eslint.org/)
- A navigation that scrolls down when the <code>&lt;main&gt;</code>-container is surpassed (you can use another container or fixed number, just change [this line](https://github.com/borispoehland/next-navigation-boilerplate/blob/7aeaa846f0ba2c9704e4c937c91e3dd70ce64d89/src/components/Nav/index.js#L52))
- Active links! The active link gets the class <code>nav-link-active</code>. See [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/fc56c9b2e2c930a88c2009a96b5bba12cc9c72c5/src/components/Nav/helpers/ActiveLink.js#L13) (note: the brand-icon does not posess this class, because it's not wrapped in the <code>ActiveLink</code> component)
- Mobile exclusive links! Create nav-items that are only visible in the mobile (hamburger) menu, but not in the expanded desktop menu. Therefore, just mark a link as <code>mobileOnly</code> [here](https://github.com/borispoehland/next-navigation-boilerplate/blob/197d0a659c9679989433403e55e91a32e786fee3/src/components/Nav/links.js#L5)

## Get started
- Clone the project, enter the root directory and run <code>npm install</code>
- For development mode, run <code>npm run dev</code>
- For production mode, run <code>npm run build</code> and then <code>npm run start</code>


