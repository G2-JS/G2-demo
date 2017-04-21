# 行分面

- template: demo-detail
- type: 分面
- index: 2
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
    chart.legend('clarity', {
      position: 'bottom'
    }); // 设置底部图例
    chart.facet([,'clarity']);
    chart.point().position('carat*price').color('clarity');
    chart.render();
}); 

</script>
