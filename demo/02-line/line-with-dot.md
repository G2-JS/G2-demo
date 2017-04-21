# 线跟虚线混合

- template: demo-detail
- product: G2
- type: 线图
- index: 4

----

<script>
var data = [
  { time: '10:01', value: 20, status: '切换前' },
  { time: '10:02', value: 20, status: '切换前' },
  { time: '10:03', value: 20, status: '切换前' },

  { time: '10:03', value: 20, status: '切换后' },  // 重复临界点时的数据
  { time: '10:04', value: 10,  status: '切换后' },
  { time: '10:05', value: 10,  status: '切换后' },
  { time: '10:06', value: 10, status: '切换后' }
];

// Step 1: 创建 Chart 对象
var chart = new G2.Chart({
  id: 'c1',  // 指定图表容器 ID
  height: 500,     // 指定图表高度
  forceFit: true,
});

// Step 2: 载入数据源
chart.source(data, {
  time: {
    alias: '时间', // 列定义，定义该属性显示的别名
  },
  value: {
    alias: '分流占比（%）',
    min: 0,
  },
});

// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
chart.line()
     .position('time*value')
     .shape('status', ['line', 'dash'])
     .color('blue')
     .tooltip('value');

// Step 4: 渲染图表
chart.render();

</script>
