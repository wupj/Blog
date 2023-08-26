# vue 项目打包后，element的icon没显示


```javascript
// 找到build/utils.js 配置文件
return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../', //新增
})
```
