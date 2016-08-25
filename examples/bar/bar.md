# 横向柱状图

典型的柱状图（又名条形图），使用垂直或水平的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。

- antVLink: https://antv.alipay.com/chart/details/bar.html

----

## code

```html
<div id="c1">
</div>
```

```js
var G2 = require('g2');
var data = [
  {"province":"北京市","population":19612368},
  {"province":"天津市","population":12938693},
  {"province":"河北省","population":71854210},
  {"province":"山西省","population":27500000},
  {"province":"内蒙古自治区","population":24706291},
  {"province":"辽宁省","population":43746323},
  {"province":"吉林省","population":27452815},
  {"province":"黑龙江省","population":38313991},
  {"province":"上海市","population":23019196},
  {"province":"江苏省","population":78660941},
  {"province":"浙江省","population":54426891},
  {"province":"安徽省","population":59500468},
  {"province":"福建省","population":36894217},
  {"province":"江西省","population":44567797},
  {"province":"山东省","population":95792719},
  {"province":"河南省","population":94029939},
  {"province":"湖北省","population":57237727},
  {"province":"湖南省","population":65700762},
  {"province":"广东省","population":104320459},
  {"province":"广西壮族自治区","population":46023761},
  {"province":"海南省","population":8671485},
  {"province":"重庆市","population":28846170},
  {"province":"四川省","population":80417528},
  {"province":"贵州省","population":34748556},
  {"province":"云南省","population":45966766},
  {"province":"西藏自治区","population":3002165},
  {"province":"陕西省","population":37327379},
  {"province":"甘肃省","population":25575263},
  {"province":"青海省","population":5626723}
];

var Stat = G2.Stat;
var Frame = G2.Frame;
var frame = new Frame(data);

frame = Frame.sort(frame, 'population'); // 将数据按照population 进行排序，由大到小

var chart = new G2.Chart({
  id : 'c1',
  width : 1000,
  height : 500,
  plotCfg: {
    margin: [20, 60, 80, 120]
  }
});

chart.source(frame);
chart.axis('province',{
  title: null
});
chart.coord('rect').transpose();
chart.interval().position('province*population');
chart.render();
```
