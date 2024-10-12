# js解析token

```javascript
const token = ''
const string = `Bearer ${token}`.split('.')
const tokenObj = JSON.parse(decodeURIComponent(escape(window.atob(string[1].replace(/-/g, '+').replace(/_/g, '/')))))
```
