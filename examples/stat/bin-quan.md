# Stat.bin.quantile.letter() 

G2.Stat.bin.quantile.letter('x*y',binWidth)，计算y 的四分位值，一般用于形成箱须图。

----

## code

```html
<div id="c1">
</div>
```

```js
import data from '../data/iris_flower_data.json';
import G2 from 'g2';
var Stat = G2.Stat;
var Util = G2.Util;
var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame,['萼片长度','萼片宽度','花瓣长度','花瓣宽度'],'value','type','品种');
var chart = new G2.Chart({
  id: 'c1',
  width : 1000,
  height : 500,
  plotCfg: {
    margin: [80, 120]
  }
});
chart.source(frame);
chart.tooltip({
  map:{
   title: "type"
  }
});
chart.schema().position(Stat.bin.quantile.letter('value')).shape('box').size(50);
chart.render();
```
