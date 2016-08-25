# Stat.bin.hex()

G2.Stat.bin.hex('x*y', binWidth)，将x, y按照一定的比例进行划分多个区域，默认 0.03，将落到这个区域内的点的x，y变成统一的值,可以通过这个统计函数获取出一个六边形范围。

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
    height: 500
  });
  chart.source(data);
  chart.tooltip({
    title: null
  });
  chart.polygon().position(Stat.bin.hex('carat*price',0.03)).color(Stat.summary.count(),'blue');
  chart.render();
```
