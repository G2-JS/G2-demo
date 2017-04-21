# polar treemap

- template: demo-detail
- product: G2
- type: treemap
- index: 3
- description: 矩形树图的极坐标展示含义及用法与矩形树图类似。
- antVLink: https://antv.alipay.com/chart/details/treemap.html

----

<script>

$.getJSON('../../static/data/mobile.json',function (data) {
  // 因为只有第一层的手机数据存在品牌（brand）字段，所以，将所有手机型号，增加brand字段
  function processData (data) {
    for(var i = 0; i < data.length ; i++) {
      var node = data[i];
      if (node.children) {
        for (var j = 0; j < node.children.length; j++) {
          node.children[j].brand = node.brand;
        }
      }
    }
  }

  processData(data);

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.coord('polar');
  chart.tooltip({
    map: {
      title: 'brand',
      name: 'name',
      value: 'value'
    }
  });

  chart.axis(false);
  chart.legend(false);
  // 需要将显示tooltip的字段加到语法中，否则无法取到对应的字段例如 name
  chart.polygon().position(Stat.treemap('children*value*name')).color('brand')
    .label('brand*..level*value',function(name, level, value){
      if (level === 0 && value > 0.5) { // 只有第一层的，同时占比超过 0.5
        return name;
      }
    },
    {
      offset: 2,
      label:{
        fill: '#000',
        'fontSize': 12,
        'fontWeight': 'bold',
        shadowBlur: 8,
        shadowColor: '#fff'
      }
    }).style({
      stroke: '#fff',
      lineWidth: 1
    });
  chart.render();
});
</script>
