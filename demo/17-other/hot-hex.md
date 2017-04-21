# 分块热力图(六边形)

- template: demo-detail
- type: 其他图表
- index: 1
- description: 分块的热力图用于表现x,y都是连续数据，对x,y进行划分封装成一个个的六边形，使用颜色的深浅标示数据的大小
- antVLink: https://antv.alipay.com/chart/details/heatmap.html

----

<script>
$.getJSON('../../static/data/diamond.json',function (data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 1000,
      height: 500
    });
    chart.source(data);
    chart.tooltip({
      title: null
    });
    chart.polygon()
      .position(Stat.bin.hex('carat*price', 0.03))
      .color(Stat.summary.count(), 'blue'); // 指定颜色的计算方式，G2 默认提供了多种的计算方式：'red', 'blue', 'green', 'rainbow', 'hue', 'lightness', 'brightness'
    chart.render();
}); 

</script>
