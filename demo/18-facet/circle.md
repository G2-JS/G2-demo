# 圆型分面

- template: demo-detail
- type: 分面
- index: 1

----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;

    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [20, 90, 60, 80]
      }
    });
    chart.source(data);
    chart.facet(['clarity'],{type: 'circle'}); // 分面设置
    chart.coord('polar');
    chart.axis(false);
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut');

    chart.render();
}); 

</script>
