# echarts图表实例是否存在

```javascript
if (
  document.getElementById(this.chartId) &&
  echarts.getInstanceByDom(document.getElementById(this.chartId))
) {
  // 存在则销毁
  this.chart.dispose(echarts.getInstanceByDom(document.getElementById(this.chartId)))
}
```