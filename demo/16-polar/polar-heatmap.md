# 色块图

- template: demo-detail
- product: G2
- type: 极坐标
- index: 5
- description: 极坐标下的色块图。该图展示了一周七天每天24小时的数据变化。
----

<script>
$.getJSON('../../static/data/polar-heatmap.json',function (data) {
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [40, 100, 80, 80]
    }
  });

  chart.source(data);
  chart.tooltip({
    title: null
  });
  chart.coord('polar', {
    inner: 0.2
  });
  chart.legend(false);
  chart.axis('week', {
    grid: null
  });
  chart.axis('time', {
    line: null,
    labelOffset: -1,
    grid: null
  });
  chart.polygon().position('time*week')
    .color('value', '#ff1717-#ffffff')
    .opacity(0.5)
    .tooltip('week*time*value')
    .style({
      stroke: '#ccc',
      lineWidth: 1
    });
  chart.render();
}); 
</script>
