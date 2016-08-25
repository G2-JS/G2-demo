# 雷达图

----

## code

```html
<div id="c1">
</div>
```

```js
import data from '../data/diamond.json';
var G2 = require('g2');
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(data);
chart.coord('polar');
chart.axis('price',{ // 设置坐标系栅格样式
  grid: {
    type: 'polygon' //圆形栅格，可以改成
  }
});

chart.axis('cut',{ // 设置坐标系栅格样式
  line: null
});
chart.line().position(Stat.summary.mean('cut*price')).color('red');
chart.render();
```
