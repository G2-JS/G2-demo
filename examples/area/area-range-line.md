# 范围区域图与线图

- template: demo-detail


----
## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {time: 1246406400000, Temperature: [14.3, 27.7], averageTem: 21.5},
  {time: 1246492800000, Temperature: [14.5, 27.8], averageTem: 22.1},
  {time: 1246579200000, Temperature: [15.5, 29.6], averageTem: 23},
  {time: 1246665600000, Temperature: [16.7, 30.7], averageTem: 23.8},
  {time: 1246752000000, Temperature: [16.5, 25.0], averageTem: 21.4},
  {time: 1246838400000, Temperature: [17.8, 25.7], averageTem: 21.},
  {time: 1246924800000, Temperature: [13.5, 24.8], averageTem: 18.3},
  {time: 1247011200000, Temperature: [10.5, 21.4], averageTem: 15.4},
  {time: 1247097600000, Temperature: [9.2, 23.8], averageTem: 16.4},
  {time: 1247184000000, Temperature: [11.6, 21.8], averageTem: 17.7},
  {time: 1247270400000, Temperature: [10.7, 23.7], averageTem: 17.5},
  {time: 1247356800000, Temperature: [11.0, 23.3], averageTem: 17.6},
  {time: 1247443200000, Temperature: [11.6, 23.7], averageTem: 17.7},
  {time: 1247529600000, Temperature: [11.8, 20.7], averageTem: 16.8},
  {time: 1247616000000, Temperature: [12.6, 22.4], averageTem: 17.7},
  {time: 1247702400000, Temperature: [13.6, 19.6], averageTem: 16.3},
  {time: 1247788800000, Temperature: [11.4, 22.6], averageTem: 17.8},
  {time: 1247875200000, Temperature: [13.2, 25.0], averageTem: 18.1},
  {time: 1247961600000, Temperature: [14.2, 21.6], averageTem: 17.2},
  {time: 1248048000000, Temperature: [13.1, 17.1], averageTem: 14.4},
  {time: 1248134400000, Temperature: [12.2, 15.5], averageTem: 13.7},
  {time: 1248220800000, Temperature: [12.0, 20.8], averageTem: 15.7},
  {time: 1248307200000, Temperature: [12.0, 17.1], averageTem: 14.6},
  {time: 1248393600000, Temperature: [12.7, 18.3], averageTem: 15.3},
  {time: 1248480000000, Temperature: [12.4, 19.4], averageTem: 15.3},
  {time: 1248566400000, Temperature: [12.6, 19.9], averageTem: 15.8},
  {time: 1248652800000, Temperature: [11.9, 20.2], averageTem: 15.2},
  {time: 1248739200000, Temperature: [11.0, 19.3], averageTem: 14.8},
  {time: 1248825600000, Temperature: [10.8, 17.8], averageTem: 14.4},
  {time: 1248912000000, Temperature: [11.8, 18.5], averageTem: 15},
  {time: 1248998400000, Temperature: [10.8, 16.1], averageTem: 13.6}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(data, {
  time: {
    type: 'timeCat',
    mask: 'dd/mm',
    tickCount: 16
  },
  Temperature: {
    min: 5,
    max: 35,
    nice: false
  },
  averageTem: {
    min: 5,
    max: 35,
    nice: false 
  }
});
chart.axis('averageTem', false);
chart.legend(false);
chart.tooltip({
  crosshairs: true
});
chart.area().position('time*Temperature').opacity(0.25);
chart.line().position('time*averageTem').size(2);
chart.render();
```
