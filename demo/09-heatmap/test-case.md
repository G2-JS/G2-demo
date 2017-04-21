# 单元测试覆盖率

- template: demo-detail
- product: G2
- type: 热力/色块图
- index: 0
- description: 使用色块图表示多个系统的单元测试，将覆盖率映射到色块的颜色和宽度，可以对比单个系统在时间上的趋势，也可以对比在一个时间点上不同系统的单元测试覆盖率。
- antVLink: https://antv.alipay.com/chart/details/color-map.html

----

<script>

var data = [];
// 生成数据
for(var i = 0; i < 20; i++){
  var name = '系统'+i;
  var value = Math.random() * 90;
  for(var j =1; j < 10;j++){
    var obj = {};
    obj.name = name;
    obj.value = (value + Math.random() * 10)/100;
    obj.time = '2011-10-0'+j;
    data.push(obj);
  }
}

// 自定义带有宽度的色块
G2.Shape.registShape('polygon', 'custom', {
    drawShape: function(cfg, container) {
      var points = this.parsePoints(cfg.points);
      var startX = points[1].x;
      var startY = points[1].y;
      var size = cfg.size || 1;
      var width = (points[2].x - points[1].x);
      var height = Math.abs(points[1].y - points[0].y);
      // 绘制背景
      container.addShape('rect', {
        attrs: {
          x: startX,
          y: startY,
          width: width,
          height: height,
          fill: '#eee',
          stroke: '#fff'
        }
      });
      // 绘制色块
      return container.addShape('rect', {
        attrs: {
          x: startX,
          y: startY,
          width: width * size,
          height: height,
          fill: cfg.color,
          stroke: '#fff'
        }
      }); 
    }
});

var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
        margin: [20, 120, 50, 120]
    }
});

chart.source(data, {
    time: {
        type: 'cat',
        mask: 'yyyy.mm.dd'
    },
    value: {
        alias: '覆盖率',
        type: 'linear',
        formatter:function(value){
            return (value * 100).toFixed(2) + '%';
        },
        min:0,
        max: 1
    }
});
chart.axis('name', {title: null, grid:null});
chart.polygon().position('time*name').color('value','red-yellow-green')
.size('value', function(size){
    return size;
})
.shape('custom')
.style({
  lineWidth:1,
  stroke: '#fff'
})
chart.render();

</script>