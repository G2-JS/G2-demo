# 分类-连续 马赛克图

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
    chart.polygon().position(Stat.bin.rect('cut*carat')).color(Stat.summary.count(),'lightness');
    chart.render();
```
