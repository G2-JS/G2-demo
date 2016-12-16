# 等高线-填充图

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
    margin: [20, 100, 80, 80]
  }
});
chart.source(data);
chart.legend({
  selectedMode: false
});
chart.contour().position(Stat.density.kernel.gaussian('carat*price',0.03)).shape('fill').color('..density');
chart.render();
```
