# toFixed重写

```javascript
function toFixed(num, s) {
  const times = Math.pow(10, s)
  let result = num * times + 0.5
  result = parseInt(result, 10) / times
  return result
}

```

