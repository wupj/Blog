# highcharts树形图dataLabels文字太长显示空白

```javascript
plotOptions: {
    treemap: {
      dataLabels: {
        style:  {
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        },
        formatter: function () {
          return _.escape(this.key) //含特殊字符被转译，文字不会显示
        }
      }
    }
}
```
