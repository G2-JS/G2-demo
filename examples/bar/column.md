# 柱状图

典型的柱状图（又名条形图），使用垂直或水平的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。

- antVLink: https://antv.alipay.com/chart/details/bar.html

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
  chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
  chart.render();
```
