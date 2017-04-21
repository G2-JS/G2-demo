# 漏斗图

- template: demo-detail
- product: G2
- type: 漏斗图
- index: 0
- description: 漏斗图适用于业务流程比较规范、周期长、环节多的单流程单向分析，通过漏斗各环节业务数据的比较能够直观地发现和说明问题所在的环节，进而做出决策。
- antVLink: https://antv.alipay.com/chart/details/funnel.html
----

<script>
var data = [
  {"action": "Website visits", "value": 5654},
  {"action": "Downloads", "value": 4064},
  {"action": "Requested price list", "value": 1987},
  {"action": "Invoice sent", "value": 976},
  {"action": "Finalized", "value": 484}
];
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [80, 200]
  }
});

chart.source(data);
chart.coord('rect').transpose().scale(1,-1);
chart.axis(false);
chart.legend('action', {
  position: 'bottom'
});
chart.intervalSymmetric()
  .position('action*value')
  .color('action', ['#C82B3D', '#EB4456', '#F9815C', '#F8AB60', '#EDCC72'])
  .shape('funnel')
  .label('action', {offset: 10, label: {fontSize: 14}});
chart.render();
</script>
