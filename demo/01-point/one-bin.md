# 封箱层叠点图（一维）

- template: demo-detail
- product: G2
- type: 点图
- index: 3

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  data = data.slice(0, 400);
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.pointStack()
    .position(Stat.bin.dot('depth'))
    .color('cut')
  chart.render();
});
</script>