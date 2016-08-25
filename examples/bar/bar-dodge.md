# 横向分组柱状图


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
      margin: [20, 80, 80]
    }
  });
  // 配置列定义,设置y轴的最小值
  var colDefs = {
    price: {
      min: 0
    }
  };
  chart.source(data, colDefs);
  chart.on('plotclick',function(ev){
    console.log(ev);
  });
  chart.coord('rect').transpose(); // 旋转，缩放坐标轴
  chart.intervalDodge().position(Stat.summary.mean('cut*price')).color('color');
  chart.render();
```
