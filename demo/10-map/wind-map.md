# 风向地图

- template: demo-detail
- product: G2
- type: 地图
- index: 9
- description: 模拟了不同时刻，中国地区的风的情况
- antVLink: https://antv.alipay.com/chart/classify/location.html

----
<script type="text/javascript" src="https://as.alipayobjects.com/g/datavis/g-tween/0.2.8/index.js"></script>
<script>
$.getJSON('../../static/data/china.json', function(mapData) {
  var Stat = G2.Stat;
  var tween = new Tween({
    infinite: true
  });
  var userData = [];
  var features = mapData.features;
  var scales;
  var frontCanvas;

  for(var i=0; i<features.length; i++) {
    var name = features[i].properties.name;
    userData.push({
      "name": name,
      "value": Math.round(Math.random()*1000)
    });
  }

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [30, 180]
    }
  });

  chart.source(userData);
  chart.tooltip(false);
  chart.polygon().position(Stat.map.region('name', mapData))
    .style({
      fill: null,
      stroke: '#333',
      lineWidth: 1
    });
  chart.render();

  scales = chart.get('scales');
  frontCanvas = chart.get('frontCanvas');
  /**
   * 模拟风
   * @param  {Number} minAngle 最小风向角
   * @param  {Number} maxAngle 最大风向角
   * @param  {Number} velocity 风速
   */
  function wind(minAngle, maxAngle, velocity, count){
    var maxLo = scales['..long'].max;
    var minLo = scales['..long'].min;
    var maxLa = scales['..lant'].max;
    var minLa = scales['..lant'].min;
    var angle = Math.random() * (maxAngle-minAngle) + minAngle;
    var point;
    var shape;
    var now;
    for (var i = 0; i < count; i++) {
      now = tween.getNow();
      point = chart.getPosition({
        '..long': Math.random() * (maxLo-minLo) + minLo,
        '..lant': Math.random() * (maxLa-minLa) + minLa,
      });
      shape = frontCanvas.addShape("line", {
        attrs: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0,
          lineWidth: 2,
          stroke: 'l (45) 0:#fff 0.5:#000 1:#000'
        }
      });
      shape.rotate(angle);
      shape.translate(point.x, point.y);
      tween.animate(shape)
           .append(now, {
             duration: 500,
             x2: velocity,
             strokeOpacity: 0,
             destroy: true // 动画完成后销毁对象
           });
    }
  }
  setInterval(function(){
    wind(200, 240, Math.random()*60, 5);
  }, 10);
  tween.play();
});
</script>
