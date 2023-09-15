# echarts以某个中心自动放大

```javascript
const opt = myChart.getOption()
opt.series[0].center = [84.90, 41.74]  //视角的中心点，地区维度
opt.series[0].zoom = 2
setTimeout(() => {
    myChart.setOption(opt, true)
}, 3000)
```
