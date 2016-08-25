# 一维-多个箱型图

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
chart.schemaDodge().position(Stat.bin.quantile.letter('price')).color('cut').shape('box');
chart.render();
```
