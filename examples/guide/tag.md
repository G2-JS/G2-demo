# 辅助标记

----

## code

```html
<div id="c1"></div>
```

```js
    import data from '../data/diamond.json';
    var G2 = require('g2');
    var Stat = G2.Stat;
    var frame = new G2.Frame(data);
    var caratAvg = G2.Frame.mean(frame,'carat'); // 计算克拉数均值
    var priceAvg = G2.Frame.mean(frame,'price'); // 计算价格均值

    var chart = new G2.Chart({ // 创建图表
      id : 'c1',
      width: 1000,
      height: 500
    });

    chart.source(frame); // 设置数据源
    chart.point().position('carat*price');
    chart.point().position('carat*price');
    chart.guide().tag([caratAvg,0],[caratAvg,20000],'钻石均值:'+caratAvg.toFixed(2))
    chart.guide().tag([0,priceAvg],[4,priceAvg],'价格均值' + priceAvg.toFixed(2))
    chart.guide().tag([3.65,11688],[4,16000],'异常值',{text: {fill: 'red'}})
    chart.render(); // 图表渲染
```
