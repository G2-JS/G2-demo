# 钟表

- template: demo-detail
- product: G2
- type: 仪表盘
- index: 1
- description: 仪表盘(Gauge)是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。
仪表盘的好处在于它能跟人们的常识结合，使大家马上能理解看什么、怎么看。拟物化的方式使图标变得更友好更人性化，正确使用可以提升用户体验。
- antVLink: https://antv.alipay.com/chart/details/gauge.html

----

<script>
var Shape = G2.Shape;
var Vector = G2.Canvas.Matrix.Vector2;

// 自定义Shape 部分
Shape.registShape('point', 'clock', {
  drawShape: function(cfg, group){
    var point; // 针尖点
    var point1; // 针尾点1
    var point2; // 针尾点2
    var center;
    var shape;
    var r; // 中心点半径
    var v1; // 指针向量
    var v2; // 与指针垂直向量
    var vstash;
    point = cfg.points[0];
    point.y = cfg.size;
    point = this.parsePoint(point);
    center = this.parsePoint({
      x: 0,
      y: 0
    });
    r = 20 * (1-cfg.size);
    v1 = Vector.sub(point, center);
    v2 = v1.vertical();
    shape = group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: r/1.3,
        fill: cfg.color
      }
    });
    // v2.negate();
    v2.setLength(r/2);
    point1 = Vector.add(v2, center);
    point2 = Vector.add({
      x: -v2.x,
      y: -v2.y
    }, center);
    shape = group.addShape('polygon', {
      attrs: {
        points: [
          [point1.x, point1.y],
          [point2.x, point2.y],
          [point.x, point.y]
        ],
        lineWidth: 2,
        arrow: true,
        fill: cfg.color
      }
    });
    return shape;
  }
});



// G2 语法部分
var color = ['#18B7D6', '#EFCF6E', '#E47668'];
var chart = new G2.Chart({
  id : 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: 50
  }
});
chart.legend(false);
chart.tooltip(false);
chart.source(getData(),{
  'value': {type: 'linear',min: 0,max: 12, tickCount:12}
});
chart.coord('clock');

chart.axis('value', {
  labels: {
    label: {
      fontSize: 14
    },
    autoRotate: false
  },
  line: {
    stroke: "#ccc"
  },
  tickLine: {
    stroke: "#333",
    value: -10
  },
  labelOffset: -12
});
chart.point()
     .position('value')
     .size('length',0.8, 0.4)
     .color('name', ['#333333', '#333333', '#CC0000'])
     .shape('clock');
chart.render();
function getData(){
  var date = new Date();
  var data = [
    {name: 'hour', value: date.getHours(), length: 5},
    {name: 'minute', value: date.getMinutes()*12/60, length: 9},
    {name: 'second', value: date.getSeconds()*12/60, length: 10}
  ];
  return data;
}

setInterval(function(){
  chart.changeData(getData());
}, 1000);


</script>
