# 南丁格尔玫瑰图

南丁格尔玫瑰图又名鸡冠花图、极坐标区域图，是南丁格尔在克里米亚战争期间提交的一份关于士兵死伤的报告时发明的一种图表,是在极坐标下绘制的柱状图，使用圆弧的半径长短表示数据的大小（数量的多少）。

- antVLink: https://antv.alipay.com/chart/details/rose.html

----


## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {year: '2000',internally:21.0 ,refugees:16 ,seekers: 0.8},
    {year: '2001',internally:25.0 ,refugees:16 ,seekers: 0.8},
    {year: '2002',internally:25.0 ,refugees:15 ,seekers: 0.8},
    {year: '2003',internally:25.0 ,refugees:14 ,seekers: 0.7},
    {year: '2004',internally:25.0 ,refugees:14 ,seekers: 0.7},
    {year: '2005',internally:24.0 ,refugees:13 ,seekers: 0.8},
    {year: '2006',internally:24.0 ,refugees:14 ,seekers: 0.7},
    {year: '2007',internally:26.0 ,refugees:16 ,seekers: 0.7},
    {year: '2008',internally:26.0 ,refugees:15.2 ,seekers: 0.8},
    {year: '2009',internally:27.1 ,refugees:15.2 ,seekers: 1.0},
    {year: '2010',internally:27.5 ,refugees:15.4 ,seekers: 0.8},
    {year: '2011',internally:26.4 ,refugees:15.2 ,seekers: 0.9},
    {year: '2012',internally:28.8 ,refugees:15.4 ,seekers: 0.9},
    {year: '2013',internally:33.3 ,refugees:16.7 ,seekers: 1.2},
    {year: '2014',internally:38.2 ,refugees:19.5 ,seekers: 1.8}
  ];

  var Stat = G2.Stat;
  var Frame = G2.Frame;
  var frame = new Frame(data); // 加工数据

  frame = Frame.combinColumns(frame, ['internally', 'refugees', 'seekers'], 'count', '难民类型', 'year');
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(frame);
  chart.coord('polar', {inner: 0.1});
  chart.legend('bottom');
  chart.intervalStack().position('year*count')
    .shape('stroke')
    .color('难民类型',['rgb(136,186,174)','rgb(184,189,61)','rgb(107,136,138)']);
  chart.render();
```
