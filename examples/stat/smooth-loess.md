# Stat.smooth.loess()

G2.Stat.smooth.loess.<kernelType>('x*y')，核函数局部回归曲线。


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
  chart.point().position('carat*price');
  chart.line().position(Stat.smooth.loess.uniform('carat*price',0.1)).color(G2.Global.colors['intervalStack'][0]);
  chart.line().position(Stat.smooth.loess.triangular('carat*price',0.1)).color(G2.Global.colors['intervalStack'][1]);
  chart.line().position(Stat.smooth.loess.epanechnikov('carat*price',0.1)).color(G2.Global.colors['intervalStack'][2]);
  chart.line().position(Stat.smooth.loess.quartic('carat*price',0.1)).color(G2.Global.colors['intervalStack'][3]);
  chart.line().position(Stat.smooth.loess.triweight('carat*price',0.1)).color(G2.Global.colors['intervalStack'][4]);
  chart.line().position(Stat.smooth.loess.tricube('carat*price',0.1)).color(G2.Global.colors['intervalStack'][5]);
  chart.line().position(Stat.smooth.loess.gaussian('carat*price',0.1)).color(G2.Global.colors['intervalStack'][6]);
  chart.line().position(Stat.smooth.loess.cosine('carat*price',0.1)).color(G2.Global.colors['intervalStack'][0]);
  chart.render();
```
