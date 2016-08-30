# 辅助弧线

----

辅助弧线

----

## code

```html
<div id="c1"></div>
<div id="c2"></div>

```

```js
  var $ = require('jquery');
  var G2 = require('g2');
	var data = [
	  {name: '转速',value: 1000, length: 8}
	];
	var chart = new G2.Chart({
	  id : 'c1',
	  width : 384,
	  height : 384
	});
	chart.coord('gauge',{
    startAngle: -1.25 * Math.PI,
    endAngle: -0.25 * Math.PI
  });
  chart.source(data, {
    'value': {type: 'linear',min: 0,max: 3000, tickCount:8, nice: false},
    'length': {type: 'linear',min: 0,max: 10}
  });
  chart.legend('length',false);
  chart.axis('value',{subTick: 5});
	chart.point().position('value').size('length').color('name');

  chart.guide().arc([0, 1],[500,1],{ // 低
    stroke: '#71AEEA',
    'stroke-width':12,
    'stroke-opacity': 0.7
  });

	chart.guide().arc([500,1],[2500,1],{ // 中
    stroke: '#F0D06F',
    'stroke-width':12,
    'stroke-opacity': 0.7
  });

	chart.guide().arc([2500,1],[3000,1],{ // 高
    stroke: '#E47668',
    'stroke-width':12,
    'stroke-opacity': 0.7
  });

	chart.render();
```
