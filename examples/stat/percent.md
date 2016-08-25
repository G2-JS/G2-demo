# Stat.summary.percent()

G2.Stat.summary.percent('x*y')，计算每个 y 所有数据 sum(y) 的比例。

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
  chart.intervalStack().position(Stat.summary.percent(Stat.summary.count('cut')));
  chart.render();
```
