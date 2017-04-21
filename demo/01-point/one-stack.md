# 层叠点图（一维）

- template: demo-detail
- product: G2
- type: 点图
- index: 3

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  data = data.slice(0, 200);
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.pointStack()
    .position('clarity')
    .color('cut')
  chart.render();
});
</script>