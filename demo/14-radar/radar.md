# 雷达图(区域)

- template: demo-detail
- product: G2
- type: 雷达图
- index: 0
- description: 雷达又叫戴布拉图、蜘蛛网图。
- antVLink: https://antv.alipay.com/chart/details/radar-chart.html
----

<script>
var data = [
  {item: "易用性", value: 80, obj: "华为Mate"},
  {item: "功能", value: 90, obj: "华为Mate"},
  {item: "拍照", value: 80, obj: "华为Mate"},
  {item: "跑分", value: 70, obj: "华为Mate"},
  {item: "续航", value: 90, obj: "华为Mate"},
  {item: "易用性", value: 70, obj: "中兴Grand Memo"},
  {item: "功能", value: 82, obj: "中兴Grand Memo"},
  {item: "拍照", value: 81, obj: "中兴Grand Memo"},
  {item: "跑分", value: 82, obj: "中兴Grand Memo"},
  {item: "续航", value: 78, obj: "中兴Grand Memo"}
];

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 140, 60, 80]
  }
});

chart.source(data, {
  'value': {
    min: 0,
    max: 100,
    tickCount: 5
  }
});
chart.coord('polar');
chart.legend('obj', { // 配置具体字段对应的图例属性
  title: null,
  position: 'bottom'
});
chart.axis('item',{ // 设置坐标系栅格样式
  line: null
});
chart.axis('value',{ // 设置坐标系栅格样式
  grid: {
    type: 'polygon' //圆形栅格，可以改成
  }
});
chart.line().position('item*value').color('obj');
chart.point().position('item*value').color('obj').shape('circle');
chart.area().position('item*value').color('obj');
chart.render();
</script>
