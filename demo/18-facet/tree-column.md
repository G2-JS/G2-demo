# 树形分面-柱状图

- template: demo-detail
- type: 分面
- index: 4
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [80, 20, 80, 80]
      }
    });
    chart.source(data);
    chart.legend('cut', {
      position: 'top'
    }); // 设置顶部图例
    chart.facet(['clarity'], {
      type: 'tree',
      line: {
        stroke: '#c0d0e0'
      },
      smooth:true,
      margin: 30
    }); 
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut');
    chart.render();
}); 

</script>
