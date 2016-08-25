# Stat.summary.cumulative()

G2.Stat.summary.accumulate('x*y')，计算累积值。

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
chart.line().position(Stat.summary.cumulative(Stat.summary.percent(Stat.summary.count(Stat.bin.dot('depth',0.03))))).color('red').shape('smooth'); // 密度曲线
chart.render(); 
```
