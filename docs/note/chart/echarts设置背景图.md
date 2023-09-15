# echarts设置背景图

## div添加background

```html
<div id="chart" style="width:100%;height:100%;background:url('imgurl')" />
```


## 使用backgroundcolor配置

```javascript
const img = new Image()
img.src = 'imgurl'
img.width = '100%'
img.height = '100%'

option = {
    backgroundcolor: {
        image: img,
        repeat: 'no-repeat'
    }
}
```


## 使用graphic配置

```javascript
option = {
    graphic: [
        {
            type: 'image',
            left: '0%',
            bottom: '0%',
            left: '0%',
            right: '0%',
            style: {
                image: 'imgUrl'
            }
        }
    ]
}
```
