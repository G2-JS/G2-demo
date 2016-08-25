# Stat.bin.dot()

G2.Stat.bin.dot('x*y', binWidth)，将 x,y 按照一定的比例进行划分多个区域，默认 0.03，将落到这个区域内的点的 x，y 变成统一的值。

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
  chart.pointStack().position(Stat.bin.dot('carat')).color('red').size(1);
  chart.render();
```
