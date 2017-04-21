# 扰动点图

- template: demo-detail
- product: G2
- type: 点图
- index: 3

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.pointJitter().position('clarity').color('clarity');
  chart.render();
});
</script>