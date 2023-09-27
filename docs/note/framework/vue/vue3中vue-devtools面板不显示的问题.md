# vue3中vue-devtools面板不显示的问题

```javascript
// vite.config.js
export default defineConfig({
  ...
  define: {
    __VUE_PROD_DEVTOOLS__: true
  }
})
```