# 自定义文本饼图

----


## code

```html
<div id="c1">
</div>
```

```js
  import data from '../data/diamond.json';
  var G2 = require('g2');
  // 格式化饼图文本
  function formatter(text,item){
    var point = item.point; // 每个弧度对应的点
    var proportion = point['..proportion']; // ..proportion 字段由Stat.summary.proportion统计函数生成
    proportion = (proportion * 100).toFixed(2) + '%';
    return '<span class="title">' + text + '</span><br><span style="color:' + point.color + '">' + proportion + '</span>';
  }

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [20, 90, 80, 80]
      }
    });
    chart.source(data);
    chart.coord('theta', {
      radius: 0.8
    });
    // Stat.summary.proportion 计算按照不同cut（切割工艺）个数占总数的比例
    chart.intervalStack().position(Stat.summary.proportion()).color('cut').label('cut', {
        custom: true, // 表示使用自定义文本
        renderer: formatter,
        labelLine: false, 
        offset: 50});
    chart.render();
```
