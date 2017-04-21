# 圆内点图

- template: demo-detail
- product: G2
- type: 极坐标
- index: 7
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [40, 100, 80, 80]
    }
  });

  chart.source(data);
  chart.coord('polar');
  chart.axis('clarity', {
    gridAlign: 'middle',
    grid: {
      line: {
        lineDash: [0, 0]
      }
    }
  });
  chart.pointJitter().position('clarity').color('clarity').shape('circle').opacity(0.6);
  chart.render();
}); 
</script>
