# 极坐标下的箱型图

- template: demo-detail
- product: G2
- type: 极坐标
- index: 6
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    chart.source(data);
    chart.coord('plus');
    chart.schemaDodge().position(Stat.bin.quantile.letter('cut*price')).color('clarity').shape('box');
    chart.render();
}); 
 
</script>
