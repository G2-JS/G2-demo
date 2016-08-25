# Stat.density.normal()

G2.Stat.density.normal('x', 0.01)，正态分布估计概率密度。

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
  chart.line().position(Stat.density.normal('depth',0.01));
  chart.render();
```
