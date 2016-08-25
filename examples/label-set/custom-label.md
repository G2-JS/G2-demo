# 自定义文本

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
    // 格式化饼图文本
    function formatter(text,item){
      var point = item.point; // 每个弧度对应的点
      var percent = point['..proportion']; // ..proportion 字段由Stat.summary.proportion统计函数生成
      percent = (percent * 100).toFixed(2) + '%';
      return '<span class="title">' + text + '</span><br><span style="color:' + point.color + '">' + percent + '</span>';
    }

    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [20, 90, 60, 80]
      }
    });
    chart.source(data);
    chart.coord('theta',{radius: 0.6});
    // 不同cut（切割工艺）所占的比例
    chart.intervalStack()
         .position(Stat.summary.proportion())
         .color('cut')
         .label('cut',{custom: true,renderer: formatter,labelLine: false,offset: 100});
    chart.render();
```
