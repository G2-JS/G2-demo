# 自定义柱状图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 11
- cite: https://www.amcharts.com/demos/column-chart-images-top/
----

<script>
var data = [
  {"name":"John","vote":35654},
  {"name":"Damon","vote":65456},
  {"name":"Patrick","vote":45724},
  {"name":"Mark","vote":13654}
];

var imageMap = {
  'John': 'https://zos.alipayobjects.com/rmsportal/mYhpaYHyHhjYcQf.png',
  'Damon': 'https://zos.alipayobjects.com/rmsportal/JBxkqlzhrlkGlLW.png',
  'Patrick': 'https://zos.alipayobjects.com/rmsportal/zlkGnEMgOawcyeX.png',
  'Mark': 'https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png'
}

// 自定义 shape, 支持图片形式的气泡
var Shape = G2.Shape;
Shape.registShape('interval', 'image-top', {
  drawShape: function(cfg, container) {
    var points = cfg.points; // 点从左下角开始，顺时针方向
    var path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path = this.parsePath(path);
    container.addShape('rect', {
      attrs: {
        x: cfg.x - 80,
        y: path[1][2], // 矩形起始点为左上角
        width: 160,
        height: path[0][2] - cfg.y,
        fill: cfg.color,
        radius: 10
      }
    });
    return container.addShape('image', {
      attrs: {
        x: cfg.x - 30,
        y: cfg.y - 30,
        width: 60,
        height: 60,
        img: cfg.shape[1]
      }
    }); 
  }
});
var chart = new G2.Chart({
  id : 'c1',
  width : 1000,
  height : 500
});

chart.source(data, {
  vote: {
    min: 0
  }
});
chart.legend(false);
chart.axis('vote', {
  labels: null,
  title: null,
  line: null,
  tickLine: null
});
chart.axis('name', {
  title: null
});
chart.interval().position('name*vote').color('name', ['#7f8da9', '#fec514', '#db4c3c', '#daf0fd'])
  .shape('name', function(name){
    return ['image-top', imageMap[name]]; // 根据具体的字段指定 shape
  });
chart.render();
</script>
