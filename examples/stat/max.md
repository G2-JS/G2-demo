# Stat.summary.max()

G2.Stat.summary.max('x*y')| 计算列 y 的最大值，按照 x 进行分组。

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
  chart.interval().position(Stat.summary.max('cut*price')).color('cut');
  chart.render();
```
