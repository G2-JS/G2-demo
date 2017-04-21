# 分类-连续点图


- template: demo-detail
- product: G2
- type: 点图
- index: 6

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);

  chart.axis('cut',{
    grid: {
      line: {
        stroke: '#d9d9d9',
        'stroke-width': 2,
        'stroke-dasharray': [2, 6]
      }
    },
    gridAlign: 'middle'
  });

  chart.axis('clarity',{
    gridAlign: 'middle'
  });
  chart.pointJitter().position('cut*clarity').color('clarity');
  chart.render();
});
</script>
