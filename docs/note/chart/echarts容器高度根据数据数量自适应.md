# echarts容器高度根据数据数量自适应

在echarts中，需要设置固定高度，当柱状图数据过多时会出现数据相互挤压，给用户的体验十分糟糕，可以通过给容器设置自适应高度，然后通过getDom()的方法解决此问题。

```html
<div id="chart" style="width: 90%; min-height:400px;"></div>
```

```javascript
myChart.setOption(option)
//解决高度不能自适应问题，yAxisList.length为柱状图的条数，即数据长度
const autoHeight = yAxisList.length * 50 + 50
myChart.getDom().style.height = `${autoHeight}px`
myChart.resize()
```
