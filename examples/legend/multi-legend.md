# 多个图例

----

## code

```html
<div id="c1">
</div>
```

```js
    import data from '../data/diamond.json';
    var G2 = require('g2');
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [20, 90, 60, 80]
      }
    });
    chart.source(data); // chart.legend(dim,false);// 隐藏单个图例
    chart.point().position('carat*price').color('clarity').shape('cut');
    chart.render();
```
