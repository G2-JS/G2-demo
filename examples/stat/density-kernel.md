# Stat.density.kernel()

Stat.density.kernel.<kernelType>('x')，核密度估计概率密度曲线。

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
  chart.line().position(Stat.density.kernel.uniform('depth',0.03)).color(G2.Global.colors['intervalStack'][0]);
  chart.line().position(Stat.density.kernel.triangular('depth',0.03)).color(G2.Global.colors['intervalStack'][1]);
  chart.line().position(Stat.density.kernel.epanechnikov('depth',0.03)).color(G2.Global.colors['intervalStack'][2]);
  chart.line().position(Stat.density.kernel.quartic('depth',0.03)).color(G2.Global.colors['intervalStack'][3]);
  chart.line().position(Stat.density.kernel.triweight('depth',0.03)).color(G2.Global.colors['intervalStack'][4]);
  chart.line().position(Stat.density.kernel.tricube('depth',0.03)).color(G2.Global.colors['intervalStack'][5]);
  chart.line().position(Stat.density.kernel.gaussian('depth',0.03)).color(G2.Global.colors['intervalStack'][6]);
  chart.line().position(Stat.density.kernel.cosine('depth',0.03)).color(G2.Global.colors['intervalStack'][7]);
  chart.render();
```
