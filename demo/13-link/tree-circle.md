# 径向树图

- template: demo-detail
- product: G2
- type: 关系图
- description: 径向树图，可以解决大量层级数据的空间利用率问题
- index: 1
----

<script>
$.getJSON('../../static/data/d3-module.json', function(data) {
  var Layout = G2.Layout;
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 800,
    plotCfg: {
      margin: [20,50]
    }
  });

  // 不显示title
  chart.tooltip({
    title: null
  }); 

  // 不显示图例
  chart.legend(false);

  // 使用layout，用户可以自己编写自己的layout
  // 仅约定输出的节点 存在 id,x，y字段即可
  var layout = new Layout.Tree({
    nodes: data
  });
  var nodes = layout.getNodes();
  var edges = layout.getEdges();

  // 首先绘制 edges，点要在边的上面
  // 创建单独的视图
  var edgeView = chart.createView();
  edgeView.source(edges);
  edgeView.coord('polar'); // 
  edgeView.axis(false);
  edgeView.tooltip(false);
  // Stat.link 方法会生成 ..x, ..y的字段类型，数值范围是 0-1
  edgeView.edge()
       .position(Stat.link('source*target',nodes))
       .shape('smooth')
       .color('#ccc')
       .shape('vhv');

  // 创建节点视图
  var nodeView = chart.createView();
  nodeView.coord('polar'); //'polar'
  nodeView.axis(false);

  // 节点的x,y范围是 0，1
  // 因为边的范围也是 0,1所以正好统一起来
  nodeView.source(nodes, {
    x: {min: 0,max:1},
    y: {min: 0, max:1},
    value: {min: 0}
  });
  
  nodeView.point().position('x*y').color('steelblue').size(3).label('name', {
    offset: 5,
    labelEmit: true
  })
  .tooltip('name');
  chart.render();
});
</script>
