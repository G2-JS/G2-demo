# 自定义图片气泡图

- template: demo-detail
- product: G2
- type: 点图
- index: 5
- description: 气泡图是一种多变量图表，是散点图的变体，也可以认为是散点图和百分比区域图的组合。
- antVLink: https://antv.alipay.com/chart/details/bubble-chart.html

----

<script>
// 自定义 shape, 支持图片形式的气泡
var Shape = G2.Shape;
Shape.registShape('point', 'image', {
  drawShape: function(cfg, container) {
    cfg.points = this.parsePoints(cfg.points);
    container.addShape('line', {
      attrs: {
        x1: cfg.points[0].x,
        y1: cfg.points[0].y,
        x2: cfg.points[0].x,
        y2: 440,
        stroke: '#ccc',
        lineWidth: 2,
        lineDash: [4, 2]
      }
    });
    return container.addShape('image', {
      attrs: {
        x: cfg.points[0].x - (20 * cfg.size / 2),
        y: cfg.points[0].y - 20 * cfg.size,
        width: 20 * cfg.size,
        height: 20 * cfg.size,
        img: cfg.shape[1]
      }
    }); 
  }
});
var data = [
  {name: 'Internet Explorer', value: 26},
  {name: 'Chrome', value: 40},
  {name: 'Firefox', value: 30},
  {name: 'Safari',  value: 24},
  {name: 'Opera', value: 15},
  {name: 'Undetectable', value: 8}
];
var imageMap = {
  'Internet Explorer': 'https://zos.alipayobjects.com/rmsportal/FDWrsEmamcNvtEf.png',
  'Chrome': 'https://zos.alipayobjects.com/rmsportal/GHGrgIDTVMCaYZT.png',
  'Firefox': 'https://zos.alipayobjects.com/rmsportal/vzhXpeDRQURIStk.png',
  'Safari': 'https://zos.alipayobjects.com/rmsportal/nAVchPnSaAWncPj.png',
  'Opera': 'https://zos.alipayobjects.com/rmsportal/RdEElDcYVXtHDRD.png',
  'Undetectable': 'https://zos.alipayobjects.com/rmsportal/YCLAblnKOdToECl.png'
}
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 100, 60]
  }
});

chart.source(data, {
  value: {
    nice: false,
    max: 60,
    min: 0
  }
});
chart.legend('value', false);
chart.axis('value', false);
chart.point().position('name*value').size('value').color('name')
  .shape('name', function(name){
    return ['image', imageMap[name]]; // 根据具体的字段指定 shape
  })
  .label('value', {
    offset: -20,
    label: {
      fontSize:16, // 文本大小
    }
  });
chart.render();
</script>
