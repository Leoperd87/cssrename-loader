# cssrename-loader
CSS classes renamer for css-rename-webpack-plugin
```bash
npm install --save cssrename-loader
```

Usage example:

```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!cssrename-loader!less-loader?config=lessLoaderCustom"
      }
    ]
  }
};
```