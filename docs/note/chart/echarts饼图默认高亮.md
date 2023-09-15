# echarts饼图默认高亮

```javascript
const pieChart = echarts.getInstanceByDom(
document.getElementById('pie-chart')
)

// 默认高亮
pieChart.dispatchAction({
  type: 'highlight',
  seriesIndex: 0,
  dataIndex: 0
})

pieChart.on('mouseover', e => {
  pieChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: 0
  })
  pieChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: e.dataIndex
  })
})

pieChart.on('mouseout', () => {
  pieChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: 1
  })
  pieChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0
  })
})
```