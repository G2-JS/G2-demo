# 半圆

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
    width: 800,
    height: 400,
    plotCfg: {
      margin: [20, 90, 80, 60]
    }
  });
  chart.source(data);
  chart.coord('theta', {
    startAngle: -1 * Math.PI,
    endAngle: 0,
    radius: 0.8
  });
  // 不同cut（切割工艺）所占的比例
  chart.intervalStack().position(Stat.summary.proportion()).color('cut');
  chart.render();
```
