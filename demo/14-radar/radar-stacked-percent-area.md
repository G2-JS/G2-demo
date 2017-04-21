# 雷达图(百分比层叠区域)

- template: demo-detail
- product: G2
- type: 雷达图
- index: 1
- description: 雷达又叫戴布拉图、蜘蛛网图。
- antVLink: https://antv.alipay.com/chart/details/radar-chart.html
----

<script>
var data = [
  {"name": "Argentina", "year": "2007", "value": 1368763},
  {"name": "Argentina", "year": "2008", "value": 799873},
  {"name": "Argentina", "year": "2009", "value": 1497653},
  {"name": "Argentina", "year": "2010", "value": 1351874},
  {"name": "Argentina", "year": "2011", "value": 1582987},
  {"name": "Brasil", "year": "2007", "value": 1991297},
  {"name": "Brasil", "year": "2008", "value": 1254823},
  {"name": "Brasil", "year": "2009", "value": 1732987},
  {"name": "Brasil", "year": "2010", "value": 332871},
  {"name": "Brasil", "year": "2011", "value": 649853},
  {"name": "Chile", "year": "2007", "value": 431097},
  {"name": "Chile", "year": "2008", "value": 561983},
  {"name": "Chile", "year": "2009", "value": 1019874},
  {"name": "Chile", "year": "2010", "value": 2027634},
  {"name": "Chile", "year": "2011", "value": 1961085},
  {"name": "Columbia", "year": "2007", "value": 431097},
  {"name": "Columbia", "year": "2008", "value": 799873},
  {"name": "Columbia", "year": "2009", "value": 332871},
  {"name": "Columbia", "year": "2010", "value": 799873},
  {"name": "Columbia", "year": "2011", "value": 649853}
];

var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 140, 80, 80]
  }
});

chart.source(data, {
  'value': {
    min: 0,
    max: 100,
    tickCount: 5
  }
});
chart.coord('polar');
chart.legend('name', {
  position: 'bottom'
});
chart.axis('year', { // 设置坐标系栅格样式
  line: null
});
chart.axis('..percent', { // 设置坐标系栅格样式
  grid: {
    type: 'polygon' //圆形栅格，可以改成
  }
});

chart.areaStack().position(Stat.summary.percent('year*value')).color('name', ['#64b5f6', '#1976d2', '#ef6c00', '#ffd54f']);
chart.render();
</script>
