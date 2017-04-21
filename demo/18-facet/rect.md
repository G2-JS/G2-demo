# 矩阵分面

- template: demo-detail
- type: 分面
- index: 0
----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500,
      plotCfg: {
        margin: [40, 80, 80, 80]
      }
    });
    chart.source(data);
    chart.facet(['cut','clarity']);
    chart.legend('cut', {
      position: 'bottom'
    }); // 设置底部图例
    chart.point().position('carat*price').color('cut');
    chart.render();
}); 

</script>
