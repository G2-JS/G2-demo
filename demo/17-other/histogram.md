# 直方图

- template: demo-detail
- type: 其他图表
- index: 0
- description: 直方图，形状类似柱状图却有着与柱状图完全不同的含义，直方图用于展示数据的分布。
- antVLink: https://antv.alipay.com/chart/details/histogram.html
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    chart.source(data, {
      depth: {
        tickInterval: 2
      }
    });
    chart.axis('..count', false);
    chart.interval().position(Stat.summary.count(Stat.bin.rect('depth')))
      .style({
        stroke: '#fff',
        'stroke-width': 1
      });
    chart.render();
});
</script>
