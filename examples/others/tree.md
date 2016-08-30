# Tree

-----


```` html
<div id="c1"></div>

<button id="btn">去除线</button>
````

````js

var G2 = require('g2');
var Layout = G2.Layout;
var $ = require('jquery');
var Stat = G2.Stat;
$.getJSON('./data/d3.json', function(data){
  var layout = new Layout.Tree({
      nodes: data
    });
    var nodes = layout.getNodes();
    var edges = layout.getEdges();

    var chart = new G2.Chart({
      id: 'c1',
      width: 800,
      height: 800,
      plotCfg: {
        margin: 0
      }
    });
    chart.tooltip({
      title: null/*,
      custom: true*/
    });

    var view0 = chart.createView();
    view0.source(edges);
    view0.coord('polar')//.transpose(); // 
    view0.axis(false);
    view0.tooltip(false);
    view0.edge()
         .position(Stat.link('source*target',nodes))
         .shape('smooth')
         .color('#ccc');

    var view = chart.createView();
    view.coord('polar')//.transpose(); //'polar'
    view.axis(false);

    view.source(nodes, {
      x: {min: 0,max:1},
      y: {min: 0, max:1},
      value: {min: 0}
    });
    view.point().position('x*y').color('steelblue').size(3).label('name', {
      offset: 5,
      labelEmit: true
    })
    .tooltip('name');
    chart.render();

    $('#btn').on('click', function() {
      view0.clear();
      chart.render();
    });
});

````
