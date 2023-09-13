# react项目兼容ie浏览器

## 使用create-react-app生成的项目

1. 安装`react-app-polyfill`和`core-js`

```shell
npm install react-app-polyfill core-js
```

2. 在`index.js`中引入

```typescript jsx
import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
```

3. 修改`package.json`的配置

```json
"browserslist": {
    "production": [
        ">0.2%",
        "not dead",
        "not op_mini all",
        "ie > 9"
    ],
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version",
        "ie > 9"
    ]
}
```

4. 如果没有效果删除`node_modules`文件夹重新下载
5. 如果还不行，可能是没有设置ie文档模式的原因，在`index.html`中添加

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

## 不是使用create-react-app创建的项目
无需配置`react-app-polyfill`和`package.json`，其他的同上