# Stat.bin.quantile.letter() 

G2.Stat.bin.quantile.letter('x*y',binWidth)，计算y 的四分位值，一般用于形成箱须图。

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
      margin: [20, 90, 60, 80]
    }
  });
  chart.source(data);
  chart.schema().position(Stat.bin.quantile.letter('price')).shape('box'); // 构建箱型图
  chart.render();
```
