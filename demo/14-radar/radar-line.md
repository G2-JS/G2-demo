# 雷达图（线）

- template: demo-detail
- product: G2
- type: 雷达图
- index: 2
- description: 雷达又叫戴布拉图、蜘蛛网图。
- antVLink: https://antv.alipay.com/chart/details/radar-chart.html
----

<script>
// 重定义 G2 的全局样式
G2.Global.axis.circle.grid = {
  line: {
    stroke: '#d9d9d9',
    lineWidth: 1,
    lineDash: [0, 0]
  }
};
var data = [
  {name: 'Allocated Budget', Sales: 43000, Marketing: 19000, Development: 60000, 'Customer Support': 35000, 'Information Technology': 17000, Administration: 10000},
  {name: 'Actual Spending', Sales: 50000, Marketing: 39000, Development: 42000, 'Customer Support': 31000, 'Information Technology': 26000, Administration: 14000}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 140, 80, 80]
  }
});

var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame, ['Sales', 'Marketing', 'Development', 'Customer Support',
                    'Information Technology', 'Administration'], 'value', 'categories', 'name');
chart.source(frame, {
  'value': {
    min: 0,
    max: 65000,
    nice: false,
    tickInterval: 15000
  }
});
chart.coord('polar');
chart.legend('name', {
  position: 'bottom'
});
chart.axis('categories', { // 设置坐标系栅格样式
  line: null
});
chart.axis('value',{
  line: {
    lineWidth: 2
  },
  grid: {
    line: {
      lineDash: [0, 0],
      lineWidth: 2
    }
  }// 设置坐标系栅格样式
});
chart.line().position('categories*value').color('name').size(3);
chart.point().position('categories*value').color('name').shape('name', ['square', 'triangle']).size(6);
chart.render();
</script>
