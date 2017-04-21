# 股票图与范围区域图

- template: demo-detail
- product: G2
- type: 股票图
- index: 2
- description: K 线图，原名蜡烛图，又称阴阳图、棒线、红黑线或蜡烛线，常用于展示股票交易数据。
- antVLink: https://antv.alipay.com/chart/details/k-chart.html

----


<script>
$.getJSON('../../static/data/stock-03.json',function(data){
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data, {
    'date': {
      type: 'time',
      nice: false,
      mask: 'yyyy-mm-dd',
      tickCount: 10
    },
    range: {
      min: 20,
      max: 35,
      nice: false,
      tickInterval: 2
    },
    mean: {
      min: 20,
      max: 35,
      nice: false
    },
    'start+end+highest+lowest': {
      min: 20,
      max: 35,
      nice: false
    }
  });
  chart.axis('date', {
    title: null
  });
  chart.axis('range', {
    title: null
  });
  chart.axis('mean', false);
  chart.axis('start+end+highest+lowest', false);
  chart.tooltip({
    crosshairs: true
  });
  chart.area().position('date*range').color('#64b5f6');
  chart.schema()
    .position('date*(start+end+highest+lowest)')
    .color('trend', ['#64b5f6', '#ef6c00'])
    .shape('candle')
    .tooltip('start*end*highest*lowest');
  chart.line().position('date*mean').color('#ef6c00');
  chart.render();
  // chart1.render();
});
</script>

