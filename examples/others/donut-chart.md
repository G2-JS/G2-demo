# 环图

----

## code

```html
<div id="c1"></div>

```

```js
var $ = require('jquery');
var G2 = require('g2');
var profit2007 = 7860;
var profit2011 = 7620;
var data = [
  {year:2007, area:'亚太地区', profit: 7860*0.189},
  {year:2007, area:'非洲及中东', profit: 7860*0.042},
  {year:2007, area:'拉丁美洲', profit: 7860*0.025},
  {year:2007, area:'中欧和东欧', profit: 7860*0.018},
  {year:2007, area:'西欧', profit: 7860*0.462},
  {year:2007, area:'北美', profit: 7860*0.265},
  {year:2011, area:'亚太地区', profit: 7620*0.539},
  {year:2011, area:'非洲及中东', profit: 7620*0.065},
  {year:2011, area:'拉丁美洲', profit: 7620*0.065},
  {year:2011, area:'中欧和东欧', profit: 7620*0.034},
  {year:2011, area:'西欧', profit: 7620*0.063},
  {year:2011, area:'北美', profit: 7620*0.234}
];

function formatter(text,item){
    var point = item.point; // 每个弧度对应的点
    var percent = point['..percent']; // ..proportion 字段由Stat.summary.proportion统计函数生成
    percent = (percent * 100).toFixed(2) + '%';
    return percent;
}
var Stat = G2.Stat;

var chart = new G2.Chart({
  id: 'c1',
  width: 800,
  height: 500
});
chart.source(data);
chart.legend({
  position: 'bottom'
});
chart.coord('theta',{radius: 0.8,inner: 0.65});

chart.intervalStack().position(Stat.summary.percent('profit')).color('area');
chart.render();
```
