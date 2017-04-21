# 雷达图(多维对比)

- template: demo-detail
- product: G2
- type: 雷达图
- index: 3
- description: 雷达又叫戴布拉图、蜘蛛网图。
- antVLink: https://antv.alipay.com/chart/details/radar-chart.html
----

<script>
  var data = [
    {item: "创新", value: 3.9, level: 3},
    {item: "商业成熟度", value: 4.4, level: 3},
    {item: "创新与成熟因素", value: 4.1, level: 3},
    {item: "市场大小", value: 6.9, level: 2},
    {item: "技术准备", value: 3.5, level: 2},
    {item: "金融市场发展", value: 4.3, level: 2},
    {item: "劳动市场效率", value: 4.6, level: 2},
    {item: "商品市场效率", value: 4.4, level: 2},
    {item: "高等教育和训练", value: 4.4, level: 2},
    {item: "效率增强器", value: 4.7, level: 2},
    {item: "健康和基础教育", value: 6.1, level: 1},
    {item: "宏观经济环境", value: 6.4, level: 1},
    {item: "设施", value:4.7, level: 1},
    {item: "机构", value: 4.2, level: 1},
    {item: "基本要求", value: 5.3, level: 1}
  ];

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data, {
    'value': {
      min: 0,
      max: 10,
      tickCount: 10
    }
  });
  chart.coord('polar', {radius: 0.8});
  chart.axis('value',{ // 设置坐标系栅格样式
    grid: {
      type: 'polygon', //圆形栅格，可以改成
    }
  });
  chart.axis('item', { // 设置坐标系栅格样式
    line: null
  });
  chart.line().position('item*value').color('#F15A24').label('value').size(2);
  chart.point().position('item*value').color('level',['#FCDC21', '#FF931E', '#ED1C24']).shape('circle');
  chart.render();
</script>
