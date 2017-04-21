# 各城市温度对比

- template: demo-detail
- product: G2
- type: 线图
- index: 3
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
----

<script>
$.getJSON('../../static/data/avg-temp.json',function(data){
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.combinColumns(frame, ['New York', 'San Francisco','Austin'], 'value', 'city', 'date'); 
  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
      margin: [20, 120, 80, 80]
    }
  });

  chart.source(frame, {
    date: {
      type: 'time',
      mask: 'yyyy.mm',
      tickCount: 12
    },
    value: {
      alias: 'Temperature, ºF'
    }
  });
  chart.axis('date', {
    line: null,
    tickLine: {
      stroke: '#000',
      value: 6 // 刻度线长度
    },
    title: null
  });
  chart.axis('value', {
    tickLine: {
      stroke: '#000',
      value: 6 // 刻度线长度
    },
    labels: {
      label: {
        fill: '#000'
      }
    },
    line: {
      stroke: '#000'
    },
    grid: null
  });
  chart.line().position('date*value').color('city', ['#1f77b4', '#ff7f0e', '#2ca02c']).shape('spline').size(2);
  chart.render();
});
</script>
