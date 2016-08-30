# 雷达图和玫瑰图

-----

雷达图和玫瑰图都是极坐标下的图表展示。

-----

## code

```html
<h2>雷达图</h2>
<div id="c1"></div>
<h2>玫瑰图</h2>
<div id="c2"></div>

<h2>使用南丁格尔玫瑰图展示各个省份的人口数据</h2>
<div id="c6"></div>

```

```js
var G2 = require('g2');
// 第一张
var data = [
  {type: "技术能力", value: 7.93 , level: 'P5'},
  {type: "沟通与协作", value: 7.63 , level: 'P5'},
  {type: "架构设计", value:7.06 , level: 'P5'},
  {type: "学习与创新", value: 7.8, level: 'P5'},
  {type: "计划与组织能力", value:7.25, level: 'P5'}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 400,
  height: 350
});

chart.source(data, {
  'value': {
    min: 0,
    max: 10,
    tickCount: 3
  }
});
chart.coord('polar')//,{startAngle: Math.PI,endAngle: Math.PI * 3/2});
chart.tooltip({
  map: {
    name: '能力评分',
    value: 'value'
  }
});
chart.axis('value',{ // 设置坐标系栅格样式
  grid: {
    type: 'polygon' //圆形栅格，可以改成
  }
});
chart.axis('type',{ // 设置坐标系栅格样式
  line: null
});
chart.line().position('type*value').color('#6AC96E');
chart.point().position('type*value').color('#6AC96E').shape('hollowCircle');
chart.render();


// 第二张
var data = [
  {country:'中国',cost:96},
  {country:'德国',cost:121},
  {country:'美国',cost:100},
  {country:'日本',cost:111},
  {country:'韩国',cost:102},
  {country:'法国',cost:124},
  {country:'意大利',cost:123},
  {country:'荷兰',cost:111},
  {country:'比利时',cost:123},
  {country:'英国',cost:109},
  {country:'加拿大',cost:115},
  {country:'俄罗斯',cost:99},
  {country:'墨西哥',cost:91},
  {country:'台湾',cost:97},
  {country:'印度',cost:87},
  {country:'瑞士',cost:125},
  {country:'澳大利亚',cost:130},
  {country:'西班牙',cost:109},
  {country:'巴西',cost:123},
  {country:'泰国',cost:91},
  {country:'印尼',cost:83},
  {country:'波兰',cost:101},
  {country:'瑞典',cost:116},
  {country:'奥地利',cost:111},
  {country:'捷克',cost:107}
];

var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c2',
  width : 600,
  height : 600,
  plotCfg: {
    margin: 50
  }
});

chart.source(data, {
  'cost': {min: 0}
});
chart.coord('polar')//,{startAngle: Math.PI * -1/2,endAngle:Math.PI/2});
chart.axis('cost',{
  labels: null
});

chart.axis('country',{
  gridAlign: 'middle'
});

chart.legend('country', false);
chart.interval().position('country*cost')
  .color('country','rgb(252,143,72)-rgb(255,215,135)')
  .label('cost',{offset: -15,label: {'text-anchor': 'middle',fontStyle:'bold'}})
  .style({
    stroke: '#fff',
    'stroke-width': 1
  });
chart.render();

// 第三张
var data = [
  {province:'北京市',population:19612368},
  {province:'天津市',population:12938693},
  {province:'河北省',population:71854210},
  {province:'山西省',population:27500000},
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
var chart2 = new G2.Chart({
  id : 'c2',
  width : 800,
  height : 800
});

chart2.source(data);
chart2.axis('province',{gridAlign: 'middle'});
chart2.coord('polar',{startAngle: Math.PI, endAngle: Math.PI * 3/2});
chart2.interval().position('province*population').style({
    stroke: '#fff',
    'stroke-width': 1
  });
chart2.render();
```
