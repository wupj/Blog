# echarts双Y轴左右刻度线一致

左边Y轴默认了分成6段，所以要把右边Y轴也分成6段

```javascript
yAxis: {
    min: 0,
    max: max * 1.2,
    splitNumber: 6,
    interval: max * 1.2 / 6
}
```

> max: 右侧数据的最大值