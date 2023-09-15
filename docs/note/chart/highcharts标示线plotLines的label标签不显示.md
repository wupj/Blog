# highcharts标示线plotLines的label标签不显示

低版本label标签配置了不显示

```javascript
Highcharts.wrap(Highcharts.Axis.prototype, 'getPlotLinePath', function (proceed) {
    const path = proceed.apply(this, Array.prototype.slice.call(arguments, 1))
    if (path) {
        path.flat = false
    }
    return path
})
```


