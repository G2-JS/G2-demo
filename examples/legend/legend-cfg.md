# 自定义图例配置项

---

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
        margin: [10,100,50,50]
      }
    });
    chart.source(data);

    // 隐藏对应的图例
    chart.legend({
      position: 'right',
      spacingY: 40 // 增加间距，具体的配置信息参考： http://spmjs.io/package/g-legend#legend
    });
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
    chart.render();
```
