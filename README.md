# webpack_starter
webpack starter
https://www.youtube.com/watch?v=IZGNcSuwBZs

# Dependencies
-  npm init -y   (-y  skip the questions )
- npm i -D webpack webpack-cli  (dev dependencies only )
- npm i -D sass style-loader css-loader sass-loader

# Discriptor
- "build": "webpack --mode production"  || "build": "webpack" + webpack.config.js  前者优先级高，例如 前者设置 production, .js里面设置 development,  结果输出 process.env.NODE_ENV = production