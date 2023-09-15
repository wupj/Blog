# echarts getDataURL导出png

```javascript
const chart = echarts.getInstanceByDom(document.getElementById(this.chartId))
this.imgUrl = chart.getDataURL({
  type: 'png',
  backgroundColor: '#fff',
  animation: false
})
```
