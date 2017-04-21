# 双 Y 轴

- template: demo-detail
- type: 其他图表
- index: 7
- description: 当两个图层的横轴数据维度相同，纵轴维度不同时，即可绘制双 Y 轴。  

----
<script>
var data = [
  {'time': '10:10', 'call': 4, 'waiting': 2, 'people': 2},
  {'time': '10:15', 'call': 2, 'waiting': 6, 'people': 3},
  {'time': '10:20', 'call': 13, 'waiting': 2, 'people': 5},
  {'time': '10:25', 'call': 9, 'waiting': 9, 'people': 1},
  {'time': '10:30', 'call': 5, 'waiting': 2, 'people': 3},
  {'time': '10:35', 'call': 8, 'waiting': 2, 'people': 1},
  {'time': '10:40', 'call': 13, 'waiting': 1, 'people': 2}
];

var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame, ['call','waiting'],'count','type',['time', 'people']);

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(frame, {
  'count': {alias: '话务量（通）', min: 0},
  'people': {alias: '人数（人）', min: 0}
});
// 去除 X 轴标题
chart.axis('time', {
  title: null
});

chart.legend(false);// 不显示图例
chart.intervalStack().position('time*count').color('type', ['#348cd1', '#43b5d8']); // 绘制层叠柱状图
chart.line().position('time*people').color('#5ed470').size(2).shape('smooth'); // 绘制曲线图
chart.point().position('time*people').color('#5ed470'); // 绘制点图
chart.render();
</script>
