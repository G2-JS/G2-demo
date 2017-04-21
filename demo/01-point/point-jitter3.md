# 分类-连续点图


- template: demo-detail
- product: G2
- type: 点图
- index: 6

----

<script>
$.getJSON('../../static/data/diamond.json',function(data){
  G2.Global.shape.hollowPoint['fill-opacity'] = 0; //圆心透明度设置0
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [60, 90, 100]
    }
  });
  chart.source(data);
  chart.legend('clarity', {
    position: 'top' // 单独设置该图例的显示位置
  });
  chart.legend('cut', {
    position: 'right' // 单独设置该图例的显示位置
  });
  chart.axis('cut',{
    gridAlign: 'middle',
    title: null
  });

  chart.pointJitter().position('price*cut').color('cut').shape('clarity');
  chart.render();
});
</script>
