# 子弹图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 9
- description: 子弹图通过线性表达方式展示单一数据源各阶段精确的数据信息、某项数据与不同目标的校对结果等。
- cite: http://bl.ocks.org/mbostock/4061961
----

<script>
var data = [
  {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"actual":270,"target":250},
  {"title":"Profit","subtitle":"%","ranges":[20,25,30],"actual":23,"target":26},
  {"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"actual":100,"target":550},
  {"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"actual":1650,"target":2100},
  {"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"actual":3.2,"target":4.4}
];

var chart = new G2.Chart({
  id: 'c1',
  width : 1000,
  height : 500,
  plotCfg: {
    margin: [100, 150]
  }
}); 
chart.legend(false); // 不展示图例

var y = 0;
var yGap = 0.1;
for(var i=0, l = data.length; i < l; i++) {
  var ranges = data[i].ranges;
  var view = chart.createView({
    index: i,
    start: {
      x: 0,
      y: y
    },
    end: {
      x: 1, 
      y: y + yGap
    }
  });
  view.source([data[i]], {
    actual: {
      min: 0,
      max: ranges[2],
      nice: false
    },
    target: {
      min: 0,
      max: ranges[2],
      nice: false
    }
  });
  view.coord().transpose();
  view.axis('target', false);
  view.axis('actual', {
    position: 'right',
    title: null
  });
  view.axis('title', {
    title: null
  });
  view.point().position('title*target').color('#5b0101').shape('line').size(12).style({
    lineWidth: 2
  });
  view.interval().position('title*actual').color('#5b0101').size(15);
  view.guide().rect([-1, 0], [1, ranges[0]], {
    fill: '#e96e33',
    fillOpacity: 0.5

  });
  view.guide().rect([-1, ranges[0]], [1, ranges[1]], {
    fill: '#f9ca47',
    fillOpacity: 0.5
  });
  view.guide().rect([-1, ranges[1]], [1, ranges[2]], {
    fill: '#88bb34',
    fillOpacity: 0.5

  });
  y += yGap + 0.125;
}

chart.render();

</script>
