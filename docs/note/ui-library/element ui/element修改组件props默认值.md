# element修改组件props默认值.md

```javascript
import ElementUI from 'element-ui'

Object.defineProperties(ElementUI.Input.props, {
  clearable: {
    value: { type: Boolean, default: true }
  }
});
```
