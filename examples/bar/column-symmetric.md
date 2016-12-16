# 对称调整的流量对比

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
      {action:'访问',visitor:500},
      {action:'浏览',visitor:400},
      {action:'交互',visitor:300},
      {action:'下单',visitor:200},
      {action:'付款',visitor:100}
    ];
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    var defs = {
      'visitor': {
        type: 'linear',
        min: 0,
        nice: false
      }
    };

    chart.source(data,defs);
    chart.intervalSymmetric().position(Stat.summary.mean('action*visitor')).color('action');
    chart.render();
```
