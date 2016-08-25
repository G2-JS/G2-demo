# 底部图例

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
        margin: [20, 20, 80, 80]
      }
    });
    chart.source(data);

    // 图例配置
    chart.legend({
      position: 'bottom'
    });
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
    chart.render();
```
