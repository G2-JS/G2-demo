# 自定义的饼图

- template: demo-detail
- product: G2
- type: 极坐标
- index: 1
- description: 这是在极坐标下绘制的柱状图。
- antVLink: https://antv.alipay.com/chart/details/rose.html
----

<script>
var data =[
  {value:335, name:'直接访问'},
  {value:310, name:'邮件营销'},
  {value:274, name:'联盟广告'},
  {value:235, name:'视频广告'},
  {value:400, name:'搜索引擎'}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.sort(frame, 'value');
chart.source(frame);
chart.coord('polar');
chart.legend('name', {
  position: 'bottom'
});
chart.axis(false);
chart.interval().position('name*value')
  .color('name', ['#CB5050', '#A72023', '#9D1F22', '#70171A', '#461012'])
  .label('name')
  .style({
    stroke: '#fff',
    lineWidth: 2
  });
chart.render();
</script>
