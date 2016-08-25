# 百分比层叠柱状图

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
        margin: [20, 100, 60, 80]
      }
    });
    // 配置列定义,设置y轴的最小值
    var colDefs = {
      price: {
        min: 0
      }
    };
    chart.source(data, colDefs);
    chart.intervalStack().position(Stat.summary.percent(Stat.summary.count('clarity'))).color('cut');
    chart.render();
```
