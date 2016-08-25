# Stat.density.kernel.<kernelType>('x*y')

G2.Stat.density.kernel.<kernelType>('x*y')，核密度估计概率密度曲面。

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
	chart.heatmap().position(Stat.density.kernel.gaussian('carat*price')).color('..density');
	chart.render();
```
