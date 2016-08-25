# 热力图-配置叠加范围

----

## code

```html
<div id="c1">
</div>
```

```js
	var G2 = require('g2');
	var data = [];
	var extremas = [(Math.random() * 1000) >> 0,(Math.random() * 1000) >> 0];
	var max = Math.max.apply(Math, extremas);
	var min = Math.min.apply(Math,extremas);
	for (var i = 0; i < 300; i++) {
		var x = ((Math.random()* 950) >> 0) + 50;
		var y = (Math.random()* 460) >> 0;
		var c = ((Math.random()* max-min) >> 0) + min;

		data.push({g:x,l:y,tmp:c});
	}
	var chart = new G2.Chart({
		id: 'c1',
		width: 1000,
		height: 500
	});
	chart.source(data);
	chart.heatmap().position('g*l').color('tmp').size(50);//非统计数据的默认叠加范围是50，统计数据支持自动计算无需配置
	chart.render();
```
