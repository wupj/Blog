# echarts获取坐标轴的最大值

```javascript
myChart.setOption(option)
//获取Y轴的刻度范围
const rangeY = myChart.getModel().getComponent('yAxis').axis.scale._extent
//获取X轴的刻度范围
const rangeX = myChart.getModel().getComponent('xAxis').axis.scale._extent
```