# 分组柱状图

分组柱状图，又叫聚合柱状图。当使用者需要在同一个轴上显示各个分类下不同的分组时，需要用到分组柱状图。

- antVLink: https://antv.alipay.com/chart/details/multi-set-bar.html

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
  // 配置列定义,设置y轴的最小值
  var colDefs = {
    price: {
      min: 0
    }
  };
  chart.source(data, colDefs);
  chart.intervalDodge().position(Stat.summary.mean('cut*price')).color('color');
  chart.render();
```
