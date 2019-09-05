# Briefing
This application has the objective to learn the principles of ReactJS, consuming API REST, learn about components, properties of componentes, manipulation of state and styled componentes. This README has the objective for future consults.

# Setting Configuration for new React Application

- To turn things easier, just run into your bash `yarn create react-app <application_name>`
Doing this, all the Babel and Webpack configurations are going to be installed and configured automatically.

- After the conclusion of creation(to start a application from scratch), delete the following files:
    - README.md;
    - Inside package.json, delete the Eslint configuration;
    - Inside public/index.html, delete comments, manifest link and manifest.json;
    - Inside src, delete App.css, App.test.js, index.css, logo.svg, serviceWorker.js;
    - Inside src/index.html, delete serviceWorker, importation of serviceWorker and .css;
    - Inside src/App.js, delete importation of logo, .css and header.
- Uff!! Now we have brand new application to begin!!!

### Setting EditorConfig
This extention of Visual Studio Code are really helpful when developing with more than one developer. Follow the next steps to configure it:
- Right-mouse-click > generate .editorconfig
  - Inside .editorconfig insert:
    ```json
    end_of_line = lf
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```
- Install Eslint as devDependencie `yarn add eslint -D`
  - Initialize the Eslint `yarn eslint --init`
    - Choose:
      - `To check syntax, find problems, and enforce code style`
      - `JavaScript modules (import/export)`
      - `React`
      - `No`
      - `Browser`
      - `Use a popular style guide`
      - `Airbnb`
      - `JavaScript`
      - `Y`
      - Eslint use npm as default, so we have to delete the package-lock.json and run `yarn` to update the yarn.lock.
- Install Prettier and plugins as devDependencie
`yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`
- Inside .eslintrc.js use the following configurations:
  [.eslintrc.js](https://gist.github.com/richardyamamoto/bf72b72bfb5806c0a55bc8d5aeb0b0fc)
- Create .prettierrc and add insert the following configurations:
  [.prettierrc](https://gist.github.com/richardyamamoto/bf72b72bfb5806c0a55bc8d5aeb0b0fc)

### SPA - Single Page Application
As we can see, the single page application is commonly used nowdays, so we are going to use _react-router-dom_ library to navigate between pages without having to reaload them. Follow the steps to create the right structure.
- Install using `yarn add react-router-dom`
- Create file src/`routes.js`
- Create folder src/`pages`
- Create inside src/pages/`Main/index.js`
- Create inside src/pages/`Repository/index.js`
**Each page is going to have a self folder and a self index.js**
Exemple:

```bash
|--- src
      |--- routes.js
      |--- pages
            |--- Main
            |     |--- index.js
            |--- Repository
                  |--- index.js
```

### Styled-Components
First of all we have to install the extension on VSCode for him undestand the syntax of CSS inside JavaScript. [Link to Download](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- After installing the extension, let's add styled-components as our dependencie running on bash `yarn add styled-components`
- As we saw in [SPA](https://github.com/richardyamamoto/bootcamp-reactjs#spa---single-page-application), every page has a unique folder, so the style.js is going to be created inside the page's folder
  - Doing this way, the stylization going to be specific for the page itself, but is common to have a global style.
- As well to create **Global Style** follow my lead:
  - Create folder src/`styles`
    - Inside the `styles` folder create a file `gobal.js`
    - We have to import the `createGlobalStyle` module from `styled-components` as we see next:
      ```js
        Import { createGlobalStyle } from 'styled-components'`
        export default createGlobalStyle`<here_goes_css>`;
      ```
    Example: [global.js](https://gist.github.com/richardyamamoto/8cdc6312d28fcf718b66c93959aa6cc5), _Don't forget to import the global style into the src/App.js and put the elemente imported inside the return_

### React Icons
Icons are very common in application, to turn things easier, there is a library with the most famous packages of icons, we are going to use it. To install just run on bash: `yarn add react-icons`

The icon is imported as a component, so don't forget to `import {<name_of_icon>} from 'react-icons/<icons_family>'`

### Axios
The consuming of API's is a good way to practice the principles of ReactJS and learn how to manipulate and show data. To facilitate our lives there is a library for this porpose. It is called Axios.t
- To run on bash to add as dependencie `yarn add axios` and be happy!

We use to consume an API as a service, so let's create a folder inside _src_ named _services_ and inside her create a file _api.js_.
```bash
|--- src
      |--- services
            |--- api.js
```
Example: [api.js](https://gist.github.com/richardyamamoto/e13c0cc1f0277e487f67625de67b7302), _on this example we are using the api from GitHub_

# Building the Application
After all this steps, let's start building our application.

### Routes

As we saw in SPA (Single Page Application), React uses a library called _react-router-dom_. After following the steps [above](https://github.com/richardyamamoto/bootcamp-reactjs#spa---single-page-application), let's start configuring the routes:

1.  On this example of application, we have two pages, Main and Repository. The first one going to be located at '/' and the second '/repository'.
2.  Inside the file routes.js, import the `import React from 'react'`.
3.  After this, import three modules from react-router-dom `import { BrowserRouter, Switcher, Route } from 'react-router-dom'`
  - BrowserRouter: This one is responsible for the directory that we know in browser, using bars like _api.github.com/repos/richardyamamoto/bootcamp-reactjs_
  - Switcher: The react-router-dom has the capacity for router more than one route a time, so switcher break it and just allow one route a time
  - Route: Responsible for the path and the component thats going to be loaded
     Exemple: `<Route path='/' exact component={Main}/>` in this case we use `exact` because Route always stop searching as it find the first one that matchs.
4.  After created the routes (_remember that this steps are not linear_), go to your `src/App.js` than `import Routes from './routes'` and put the element `<Routes />` inside the return.

### Page Main

The page main is the first thing that the user going to see, so let's start with `import React,{ Component } from 'react'` and create a class Main extending form Component.

 > _Use the Component modulo when the component is a class_

Create the `render(){}` method and inside it the `return`


