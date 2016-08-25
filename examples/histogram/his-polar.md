# 直方图-极坐标

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
    chart.coord('polar');
    chart.interval().position(Stat.summary.count(Stat.bin.rect('depth',0.01))).color('red');
    chart.render();
```
