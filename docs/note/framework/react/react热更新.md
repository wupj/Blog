# react热更新

## react-hot-loader

```shell
// 安装依赖
yarn add -D react-hot-loader
yarn add @hot-loader/react-dom
```

```typescript jsx
// craco.config.js
module.exports = {
    babel: {
        plugins: ['react-hot-loader/babel']
    },
    webpack: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
}
```

```typescript jsx
// 给root节点App套上一层热更新函数
import { hot } from 'react-hot-loader/root'
function App {
	return (
  	    <div>App</div>
 	)
}
export default hot(App)
```

## craco-plugin-react-hot-reload

```shell
// 安装依赖
yarn add -D craco-plugin-react-hot-reload
```

```typescript jsx
// craco.config.js
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload')
module.exports = {
  plugins: [{
    plugin: reactHotReloadPlugin
  }]
}
```

```typescript jsx
import { hot } from 'react-hot-loader'
function App {
	return (
  	    <div>App</div>
 	)
}
export default hot(App)
```

## craco-fast-refresh

```shell
// 安装依赖
yarn add -D craco-fast-refresh
```

```typescript jsx
// craco.config.js
const FastRefreshCracoPlugin = require('craco-fast-refresh')
module.exports = () => {
  return {
    plugins: [{
      plugin: FastRefreshCracoPlugin
    }]
  }
}
```

```typescript jsx
import { hot } from 'react-hot-loader'
function App {
	return (
  	    <div>App</div>
 	)
}
export default hot(App)
```
