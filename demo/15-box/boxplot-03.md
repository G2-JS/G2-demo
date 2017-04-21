# 一维箱型图

- template: demo-detail
- type: 箱型图
- index: 2
- description: 箱形图又称盒须图、盒式图或箱线图，是一种用作显示一组数据分布情况的统计图。
- antVLink: https://antv.alipay.com/chart/details/boxplot.html

----

<script>
$.getJSON('../../static/data/iris_flower_data.json', function(data) {
  var Stat = G2.Stat;
  var Util = G2.Util;
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.combinColumns(frame,['萼片长度','萼片宽度','花瓣长度','花瓣宽度'],'value','type','品种');

  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
      margin: [80, 120]
    }
  });
  chart.source(frame);
  chart.tooltip({
    map:{
      title: "type"
    }
  });
  chart.schemaDodge().position(Stat.bin.quantile.letter('value')).color('type').shape('box').size(50);
  chart.render();
  chart.on('tooltipchange', function(ev){
    var items = ev.items;
    var origin = items[0];
    var values = origin.point._origin.value;
    items.splice(0); // 清空

    items.push(Util.mix({}, origin, {
      name: '最小值',
      value: values[0].toFixed(2)
    }));
    items.push(Util.mix({}, origin, {
      name: '下四分位数',
      value: values[1].toFixed(2),
      marker: 'circle'
    }));
    items.push(Util.mix({}, origin, {
      name: '中位数',
      value: values[2].toFixed(2),
      marker: 'circle'
    }));
    items.push(Util.mix({}, origin, {
      name: '上四分位数',
      value: values[3].toFixed(2),
      marker: 'circle'
    }));
    items.push(Util.mix({}, origin, {
      name: '最大值',
      value: values[4].toFixed(2),
      marker: 'circle'
    }));
  });
});
</script>
