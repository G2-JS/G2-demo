# 辅助文本

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
    var colors = G2.Global.colors['default'];

    var chart = new G2.Chart({ // 创建图表
      id : 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [20, 90, 60, 80]
      }
    });
    var defs = {
      'cut': {
        type: 'cat',
        values:['Ideal','Premium','Very-Good','Good','Fair']
      }
    };

    chart.source(data,defs); // 设置数据源

    chart.pointJitter().position('cut*depth').color('cut');

    chart.guide().text(['Ideal',67],'越完美的钻石切割工艺集中',{fill:colors[0], 'text-anchor':'middle'});
    chart.guide().text(['Fair',63],'越差的钻石切割工艺分散',{fill:colors[4], 'text-anchor':'middle'})

    chart.render(); // 图表渲染
```
