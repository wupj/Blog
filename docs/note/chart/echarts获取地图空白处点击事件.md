# echarts获取地图空白处点击事件

```javascript
myChart.getZr().on('click', function(e) {
   if (!e.target) {
      // clicked empty area
   }
})
```