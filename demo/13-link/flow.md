# 流程图

- template: demo-detail
- product: G2
- type: 关系图
- description: 流程图，展示一个简单的流程
- index: 0
----

<script>
  
  // 定义流程图的各种图形
  // 起始点、结束点、流程节点、条件节点

  // 自定义start 的图形
  G2.Shape.registShape('point', 'start', {
    drawShape: function(cfg, group) {
      var x = cfg.x;
      var y = cfg.y;
      group.addShape('circle', { // 由于开始的点设置了透明度，所以会显示连接线
        attrs: {
          x: x,
          y: y,
          r: 15,
          fill: '#fff'
        }
      });
      var shape = group.addShape('circle', {
        attrs: {
          x: x,
          y: y,
          r: 10,
          fill: 'black',
          fillOpacity: 0.6,
          stroke: 'black'
        }
      });
      return shape;
    }
  });
  
  // 自定义action的图形
  G2.Shape.registShape('point', 'action', {
    drawShape: function(cfg, group) {
      var x = cfg.x;
      var y = cfg.y;
      var width = 60;
      var height = 30;
      var shape = group.addShape('rect', {
        attrs: {
          x: x - width / 2,
          y: y - height / 2,
          width: width,
          height: height,
          fill: '#fff',
          stroke: 'black'
        }
      });
      return shape;
    }
  });

  function combine(Command, x, y) {
    return Command + ' ' + x + ' ' + y;
  }

  // 自定义condition 的图形
  G2.Shape.registShape('point', 'condition', {
    drawShape: function(cfg, group) {
      var x = cfg.x;
      var y = cfg.y;
      var width = 50;
      var height = 50;
      var path = '';
      path += combine('M', x, y - height / 2);
      path += combine('L', x - width / 2, y);
      path += combine('L', x, y + height / 2);
      path += combine('L', x + width / 2, y);
      path += 'z';
      var shape = group.addShape('path', {
        attrs: {
          path: path,
          fill: '#fff',
          stroke: 'black' // 可以直接设置颜色 cfg.color，也可以使用映射
        }
      });
      return shape;
    }
  });

  // 自定义end 的图形
  G2.Shape.registShape('point', 'end', {
    drawShape: function(cfg, group) {
      var x = cfg.x;
      var y = cfg.y;

      group.addShape('circle', {
        attrs: {
          x: x,
          y: y,
          r: 15,
          fill: '#fff',
          stroke: 'black'
        }
      });

      var shape = group.addShape('circle', {
        attrs: {
          x: x,
          y: y,
          r: 10,
          fill: 'black',
          fillOpacity: 0.6,
          stroke: 'black'
        }
      });
      return shape;
    }
  });
  
  var nodes = [// 节点信息：类别、ID，位置 x,y
    {id: '0',name: '',type: 'start',x: 50,y: 10},
    {id: '1',name: '步骤一',type: 'action',x: 50,y: 20},
    {id: '2',name: '步骤二',type: 'action',x: 50,y: 30},
    {id: '3',name: '条件',type: 'condition',x: 50,y: 40},
    {id: '4.1',name: '分步骤一',type: 'action',x: 40,y: 50},
    {id: '4.2',name: '分步骤二',type: 'action',x: 60,y: 50},
    {id: '5',name: '汇总',type: 'action',x: 50,y: 60},
    {id: '6',name: '',type: 'end',x: 50,y: 70}
  ];
  var edges = [
    {source: '0', target: '1'},
    {source: '1', target: '2'},
    {source: '2', target: '3'},
    {source: '3', target: '4.1'},
    {source: '3', target: '4.2'},
    {source: '4.1', target: '5'},
    {source: '4.2', target: '5'},
    {source: '5', target: '6'}
  ];

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [0,0]
    }
  });
  // 不显示title
  chart.tooltip({
    title: null
  }); 
  // x,y的范围是0-100
  // 因为边的统计函数生成的数据范围默认是0-1，所以需要设置范围是 0-100 统一起点、边的数据范围
  var defs = {
    x: {min: 0,max:100},
    y: {min: 0, max:100},
    '..x': {min: 0,max:100},
    '..y': {min: 0,max:100}
  };
  // 首先绘制 edges，点要在边的上面
  // 创建单独的视图
  var edgeView = chart.createView();
  edgeView.source(edges, defs);
  edgeView.coord().reflect(); // 从上到下
  edgeView.axis(false);
  edgeView.tooltip(false);
  // Stat.link 方法会生成 ..x, ..y的字段类型，数值范围是 0-1
  edgeView.edge()
       .position(Stat.link('source*target',nodes))
       .color('#ccc');

  // 创建节点视图
  var nodeView = chart.createView();
  nodeView.coord().reflect(); // 从上到下
  nodeView.axis(false);

  nodeView.source(nodes, defs);
  nodeView.point().position('x*y').color('steelblue')
    .shape('type', function(val) {
      return val;
    })
    .label('name', {
      offset: 0,
      labelEmit: true
    })
  .tooltip('name');
  chart.render();
</script>