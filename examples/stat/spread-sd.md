# Stat.spread.sd() 

G2.Stat.region.spread.sd('x*y')，计算列y的标准差的上下范围，构成一个数组，按照x进行分组。

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
  chart.interval().position(Stat.region.spread.sd('cut*price')).color('cut');
  chart.render();
```
