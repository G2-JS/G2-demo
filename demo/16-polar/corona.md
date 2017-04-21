# 日冕图

- template: demo-detail
- product: G2
- type: 极坐标
- index: 4
- description: 极坐标下的区域图，展示一天内各个时间段内的数据变化，主要用于时变数据的可视化。

----

<script>
var Frame = G2.Frame;
$.getJSON('../../static/data/page-views.json',function (data) {
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [60, 100]
    }
  });

  chart.source(data, {
    views: {
      max: 25,
      min: 0,
      nice: false
    },
    hour: {
      ticks: ['0', '3', '6', '9', '12', '15', '18', '21']
    }
  });
  chart.coord('polar', {
    inner: 0.35
  });
  chart.axis('hour', {
    grid: null,
    formatter: function(val) {
      if (val * 1 >= 12) {
        return val + ' pm';
      } else {
        return val + ' am';
      }
    }
  });
  chart.axis('views', {
    tickLine: null,
    line: null,
    grid: {
      line: {
        lineDash: [0, 0]
      }
    }
  });
  chart.legend(false);
  chart.area().position('hour*views').color('page', ['#cd57a4', '#b236a3', '#fa6f7f', '#fa7c3b', '#e96b6b']).shape('smooth').opacity(0.15);
  chart.render();
}); 
</script>




