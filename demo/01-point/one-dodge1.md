# 分组层叠点图（一维）

- template: demo-detail
- product: G2
- type: 点图
- index: 3

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  data = data.slice(0, 800);
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  // 先分组，再层叠
  chart.point(['dodge','stack'])
    .position('clarity')
    .color('cut');
    
  chart.render();
});
</script>