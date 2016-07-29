## code

```html
<div id="c1">
</div>
```

```js
var $ = require('jquery');
var G2 = require('g2');
var Stat = G2.Stat;

$.getJSON('./diamond.json?nowrap', function(data) {
  var chart = new G2.Chart({
    id : 'c1',
    width : 800,
    height : 500,
    plotCfg: {
      margin: [50,80,50,60]
    }
  });

  chart.source(data);
  chart.interval().position(Stat.summary.mean('cut*price')).color('cut'); // 绘制柱状图
  // chart.interval().position(Stat.summary.mean('cut*price')).color('cut').shape('tick'); // 不同的 shape
  // chart.coord('polar'); // 改变坐标系

  // chart.coord('rect'); // 恢复至笛卡尔坐标系
  // chart.intervalDodge().position(Stat.summary.mean('cut*price')).color('color'); // 分组柱状图
  // chart.facet(['clarity'],{type: 'tree',line: {stroke: '#c0d0e0'},smooth:true,margin: 30}); // 添加分面
  chart.render();
});

```


## R 语言包中的钻石数据
