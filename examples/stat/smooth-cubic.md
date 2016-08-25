# Stat.smooth.cubic()

G2.Stat.smooth.cubic('x*y')，三阶回归曲线。

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
  chart.point().position('carat*price');
  chart.line().position(Stat.smooth.cubic('carat*price'));
  chart.render();
```
