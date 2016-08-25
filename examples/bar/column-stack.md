# 层叠柱状图

层叠柱状图将每个柱子进行分割以显示相同类型下各个数据的大小情况。它可以形象得展示一个大分类包含的每个小分类的数据，以及各个小分类的占比，显示的是单个项目与整体之间的关系。

- antVLink: https://antv.alipay.com/chart/details/stacked-bar.html

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
  chart.intervalStack().position(Stat.summary.mean('cut*price')).color('color').size(45);
  chart.render();
```
