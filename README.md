# Briefing
This application has the objective to learn the principles of ReactJS, consuming API REST, learn about components, properties of componentes, manipulation of state and styled componentes. This README has the objective for future consults.

# Setting Configuration for new React Application

- To turn things easier, just run into your bash `yarn create react-app <application_name>`
Doing this, all the Babel and Webpack configurations are going to run automatically.

- After the conclusion of creation, for this application, delete the following files:
    - README.md;
    - Inside package.json, delete the Eslint configuration;
    - Inside public/index.html, delete comments, manifest link and manifest.json;
    - Inside src, delete App.css, App.test.js, index.css, logo.svg, serviceWorker.js;
    - Inside src/index.html, delete serviceWorker, importation of serviceWorker and .css;
    - Inside src/App.js, delete importation of logo, .css and header.

### Setting EditorConfig

- Right-mouse-click > generate .editorconfig
    - Inside .editorconfig edit:
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
        - Delete the package-lock.json and run `yarn` update the yarn.lock
- Install Prettier and plugins as devDependencie 
`yarn add prettier eslint-config-prettier eslint-plugin-prettier -D` 
- Inside .eslintrc.js:
    - Add the following configurations
    [.eslintrc.js](https://gist.github.com/richardyamamoto/bf72b72bfb5806c0a55bc8d5aeb0b0fc)
- Create .prettierrc
    - Add the following configurations
    [.prettierrc](https://gist.github.com/richardyamamoto/bf72b72bfb5806c0a55bc8d5aeb0b0fc)    
    
### SPA - Single Page Application
- We use react-router-dom, to navigate among the pages without having to reaload them
    - Install using `yarn add react-router-dom`
    - Create file src/`routes.js`
    - Create folder src/`pages`
    - Create inside src/pages/`Main/index.js`
    - Create inside src/pages/`Repository/index.js`
```bash
|--- src
        |--- routes.js
        |--- pages
                |--- Main
                |       |--- index.js
                |--- Repository
                        |--- index.js
```

### Styled-Components
- Syled-componentes allow to use CSS syntax inside JavaScript
- Run `yarn add styled-components` to install
- Create styles.js inside the same page of the component
- For global Styles, create folder src/`styles`
    - Inside create a file `gobal.js`
        - ```
            Import { createGlobalStyle } from 'styled-components'`
            export default createGlobalStyle`<here_goes_css>`;
            ```
### React Icons
- Lib that contents the most famous packages of icons
- Run `yarn add react-icons` to install

### Axios
Lib reponsible for consume API's rest
-   To install run `yarn add axios` and be happy!

- Create a folder named services inside src
- Create a file named `api.js` inside services
```bash
|--- src
        |--- services
                |--- api.js 
```
# Building the Application

### Routes

As we saw in SPA (Single Page Application), React uses a library called _react-router-dom_. After following the steps [above](https://github.com/richardyamamoto/bootcamp-reactjs#spa---single-page-application), let's start configuring the routes:

1.  On this example of application, we have two pages, Main and Repository. The first one going to be located at '/' and the second '/repository'.
2.  Inside the file routes.js, import the `import React from 'react'`.
3.  After this, import three modules from react-router-dom `import { BrowserRouter, Switcher, Route } from 'react-router-dom'`
    - BrowserRouter: This one is responsible for the directory that we know in browser, using bars like api.github.com/repos/richardyamamoto/bootcamp-reactjs
    - Switcher: The react-router-dom has the capacity for router more than one route a time, so switcher break it and just allow one route a time
    - Route: Responsible for the path and the component thats going to be loaded
        - Exemple: `<Route path='/' exact component={Main}/>` in this case we use `exact` because Route always stop searching as it find the first one that matchs.

