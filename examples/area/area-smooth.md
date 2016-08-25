# 平滑的区域图


----

## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
  
var data = [
  {"month":0,"tem":20,"city":"tokyo"},
  {"month":1,"tem":6.9,"city":"tokyo"},
  {"month":2,"tem":15,"city":"tokyo"},
  {"month":3,"tem":3,"city":"tokyo"},
  {"month":4,"tem":18.2,"city":"tokyo"},
  {"month":5,"tem":4,"city":"tokyo"},
  {"month":6,"tem":25.2,"city":"tokyo"},
  {"month":7,"tem":6,"city":"tokyo"},
  {"month":8,"tem":23.3,"city":"tokyo"},
  {"month":9,"tem":8,"city":"tokyo"},
  {"month":10,"tem":13.9,"city":"tokyo"},
  {"month":11,"tem":9.6,"city":"tokyo"},
  {"month":0,"tem":0,"city":"newYork"},
  {"month":1,"tem":16,"city":"newYork"},
  {"month":2,"tem":5.7,"city":"newYork"},
  {"month":3,"tem":21.3,"city":"newYork"},
  {"month":4,"tem":7,"city":"newYork"},
  {"month":5,"tem":22,"city":"newYork"},
  {"month":6,"tem":4.8,"city":"newYork"},
  {"month":7,"tem":24.1,"city":"newYork"},
  {"month":8,"tem":7.1,"city":"newYork"},
  {"month":9,"tem":14.1,"city":"newYork"},
  {"month":10,"tem":8.6,"city":"newYork"},
  {"month":11,"tem":12.5,"city":"newYork"}
];

var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(data);
//chart.axis('tem',{title: null,labels: null});
// area 支持的图形类型：'area','smooth','line','dotLine','smoothLine','dotSmoothLine'
chart.area().position('month*tem').color('city').shape('smooth');
chart.render();
```
