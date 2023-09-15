# echarts地图按钮缩放大小

1. 执行缩放的方法

```javascript
const getZoom = (flag) => {
    // 当前配置
    let option = myChart.getOption()
    //放大/缩小 比例
    let scale = 1.2
    if (flag == 1) {
        scale = 0.8
    }
    option.series[0].zoom = option.series[0].zoom * scale
    myChart.setOption(option, true)
}
```

2. 富文本按钮

```javascript
graphic: [
    {
      type: 'group',
      left: 10,
      bottom: 38,
      width: 30,
      height: 30,
      children: [
        {
          type: 'rect',
          z: 100,
          left: 'center',
          top: 'middle',
          shape: {
            width: 28,
            height: 28
          },
          style: {
            fill: '#f7f7f7',
            stroke: '#ccc',
            lineWidth: 1
          }
        },
        {
          type: 'text',
          z: 100,
          left: 'center',
          top: 'middle',
          style: {
            text: '+',
            stroke: '#333',
            font: 'bolder 18px "Microsoft YaHei"'
          },
          onclick: () => {
            getZoom(false)
          }
        }
      ]
    },
    {
      type: 'group',
      left: 10,
      bottom: 10,
      width: 30,
      height: 30,
      children: [
        {
          type: 'rect',
          z: 100,
          left: 'center',
          top: 'middle',
          shape: {
            width: 28,
            height: 28
          },
          style: {
            fill: '#f7f7f7',
            stroke: '#ccc',
            lineWidth: 1
          }
        },
        {
          type: 'text',
          z: 100,
          left: 'center',
          top: 'middle',
          style: {
            text: '-',
            stroke: '#333',
            font: 'bolder 18px "Microsoft YaHei"'
          },
          onclick: () => {
            getZoom(true)
          }
        }
      ]
    }
]
```
