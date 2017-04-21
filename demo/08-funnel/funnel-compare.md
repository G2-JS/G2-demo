# 对比漏斗图

- template: demo-detail
- product: G2
- type: 漏斗图
- index: 2
- description: 漏斗图适用于业务流程比较规范、周期长、环节多的单流程单向分析，通过漏斗各环节业务数据的比较能够直观地发现和说明问题所在的环节，进而做出决策。
- antVLink: https://antv.alipay.com/chart/details/funnel.html
----

<script>
var expectData = [
  {value: 100, name: '展现'},
  {value: 80, name: '点击'},
  {value: 60, name: '访问'},
  {value: 40, name: '咨询'},
  {value: 20, name: '订单'}
];
var actualData = [
  {value: 80, name: '展现'},
  {value: 50, name: '点击'},
  {value: 30, name: '访问'},
  {value: 10, name: '咨询'},
  {value: 5, name: '订单'}
];
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [0, 200]
  }
});

chart.source(expectData, {
  name: {
    formatter: function(val) {
      return '预期' + val;
    }
  }
});
chart.coord('rect').transpose().scale(1,-1);
chart.axis(false);
chart.legend(false);
chart.tooltip({
  title: null
});
chart.intervalSymmetric()
  .position('name*value')
  .color('name')
  .shape('pyramid')
  .label('name')
  .opacity(0.65);
var view = chart.createView();
view.source(actualData, {
  name: {
    formatter: function(val) {
      return '实际' + val;
    }
  }
});
view.coord('rect').transpose().scale(1,-1);
view.axis(false);
view.intervalSymmetric()
  .position('name*value')
  .color('name')
  .shape('pyramid')
  .style({
    lineWidth: 2,
    stroke: '#fff'
  });
chart.render();
</script>
