# 不显示图例

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
    chart.source(data);
    // 隐藏对应的图例
    chart.legend(false); 
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
    chart.render();
```
