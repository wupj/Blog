# vue项目中 favicon.ico不显示

## 方法一：修改index.html文件

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
```

## 方法二：修改webpack配置文件

#### 1、找到build下的webpack.dev.conf.js文件

```javascript
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'index.html',
  inject: true,
  favicon: path.resolve('favicon.ico') // 增加
})
```

#### 2、找到build下的webpack.prod.conf.js文件

```javascript
new HtmlWebpackPlugin({
  filename: config.build.index,
  template: 'index.html',
  inject: true,
  favicon: path.resolve('favicon.ico'), //新增
  minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      ...
  }
})
```
