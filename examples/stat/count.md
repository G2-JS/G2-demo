# Stat.summary.count

G2.Stat.summary.count('x')，计算按照 x 分组后，各个分组的个数。

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
  chart.interval().position(Stat.summary.count('cut')).color('cut');
  chart.render();
```
