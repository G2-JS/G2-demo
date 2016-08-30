# 嵌套的饼图

-----

## code

```html
<div id="c1"></div>
```

```js
var G2 = require('g2');  
var total = [
  {value:335, name:'直达'},
  {value:679, name:'营销广告'},
  {value:1548, name:'搜索引擎'}
];

var detail = [
  {value:335, name:'直达'},
  {value:310, name:'邮件营销'},
  {value:234, name:'联盟广告'},
  {value:135, name:'视频广告'},
  {value:1048, name:'百度'},
  {value:251, name:'谷歌'},
  {value:147, name:'必应'},
  {value:102, name:'其他'}
];

var Stat = G2.Stat;

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [60, 80, 60, 80]
  }
});
chart.source(total);
chart.coord('theta', {
  radius: 0.5 // 设置饼图的大小
});

chart.intervalStack()
  .position(Stat.summary.percent('value'))
  .color('name', ['#B22425', '#243543', '#518F98'])
  .label('name', {
    offset: -20,
    label: {
      'font-size': 14
    }
  });

var view = chart.createView();
view.source(detail);
view.coord('theta', {
  inner: 0.75
});
view.intervalStack()
  .position(Stat.summary.percent('value'))
  .color('name', ['#B22425', '#C86D51', '#81BB9D', '#63906E', '#BD7212', '#AE9088', '#5B5D61', '#43525D'])
  .label('name');
chart.render();
```
