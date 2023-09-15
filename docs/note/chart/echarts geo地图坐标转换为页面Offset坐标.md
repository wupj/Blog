# echarts geo地图坐标转换为页面Offset坐标

```javascript
// 获取系列
const seriesModel = chart.getModel().getSeriesByIndex(idx)
// 获取地理坐标系实例
const coordSys = seriesModel.coordinateSystem
// dataToPoint 相当于 getPosByGeo
const point = coordSys.dataToPoint([lng, lat])
// pointToData 相当于 getGeoByPos
const coord = coordSys.dataToPoint(point)
```