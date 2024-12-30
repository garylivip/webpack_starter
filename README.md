# webpack_starter
webpack starter
https://webpack.js.org/
https://www.youtube.com/watch?v=IZGNcSuwBZs

# Dependencies
-  npm init -y   (-y  skip the questions )
- npm i -D webpack webpack-cli --registry=https://registry.npmmirror.com (dev dependencies only && local mirror to speed up the installation)
- npm i -D sass style-loader css-loader sass-loader
- npm i -D html-webpack-plugin
- npm install -D webpack-dev-server   =>  Add ("dev": "webpack serve") to package.json, and then npm run dev,  then got below message:
- - [webpack-cli] For using 'serve' command you need to install: 'webpack-dev-server' package.
- - [webpack-cli] Would you like to install 'webpack-dev-server' package? (That will run 'npm install -D webpack-dev-server') (Y/n)
- npm i -D babel-loader @babel/core @babel/preset-env 

# Discriptor
- "build": "webpack --mode production"  || "build": "webpack" + webpack.config.js  前者优先级高，例如 前者设置 production, .js里面设置 development,  结果输出 process.env.NODE_ENV = production