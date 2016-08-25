# 极坐标系-翻转

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
  height: 500,
  plotCfg: {
    margin: [20, 90, 60, 80]
  }
});
chart.source(data);
chart.coord('polar').reflect(); // 默认翻转y，默认情形，从圆心到圆环从小到大，翻转成从大到小
chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
chart.render();
```
