# antd的craco.config.js高级配置

安装`craco`并修改`package.json`里的`scripts`属性

```shell
yarn add @craco/craco
```

```json
/* package.json */
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
}
```

## 自定义主题

```shell
yarn add craco-less
```

## 装饰器语法

```shell
yarn add @babel/plugin-proposal-decorators --dev
```

## less按需加载

```shell
yarn add babel-plugin-import
```

```shell
yarn add antd @craco/craco craco-less @babel/plugin-proposal-decorators babel-plugin-import -D
```

```typescript
/* craco.config.js */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const CracoLessPlugin = require('craco-less')  // 使用less插件

module.exports = {
    webpack: {
        alias: {
          '@': resolve('src'),
        }
    },
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                  modifyVars: { '@primary-color': '#1DA57A' },  // 修改主题色
                  javascriptEnabled: true,
              },
            },
          },
        },
    ],
    babel:{
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],  // 支持装饰器模式语法
          [
            "import",
            {
              "libraryName": "antd",
              "libraryDirectory": "es",
               "style": true    //设置为true即是less
             }
         ]
        ]
    }
}
```

