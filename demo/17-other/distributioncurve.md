# 分布曲线图

- template: demo-detail
- type: 其他图表
- index: 5
- description: 分布曲线图展示的是一种概率分布，也是一种同统计学紧密结合的图表。
- antVLink: https://antv.alipay.com/chart/details/distributioncurve.html
----

<script>
var kernelMethods = ['uniform', 'triangular', 'epanechnikov', 'quartic', 'triweight', 'tricube', 'gaussian', 'cosine'];
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [40, 120, 80]
      }
    });
    chart.source(data);
    chart.legend(false);
    var x = 0;
    var y = 0;
    for (var v = 0; v < 2; v++) {
      for (var h = 0; h < 4; h++) {
        var view = chart.createView({
          index: h + v,
          start: {
            x: x,
            y: y
          },
          end: {
            x: x + 0.175,
            y: y + 0.4
          }
        });
        view.source(data);
        view.line().position(Stat.density.kernel[kernelMethods[h + v]]('depth',0.03))
          .color(G2.Global.colors['intervalStack'][h + v])
          .size(2);
        x += 0.275;
      }
      x = 0;
      y += 0.5;
    }

    chart.render();
});
</script>
