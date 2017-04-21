# 可点击 treemap

- template: demo-detail
- product: G2
- type: treemap
- index: 1
- description: 矩形树图由马里兰大学教授Ben Shneiderman于上个世纪90年代提出，起初是为了找到一种有效了解磁盘空间使用情况的方法。 矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较。
- antVLink: https://antv.alipay.com/chart/details/treemap.html

----

<script>
$.getJSON('../../static/data/mobile.json',function (data) {
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    animate: false // 阻止动画
  });
  chart.source(data);
  chart.tooltip({
    map: {
      title: 'name',
      value: 'value'
    }
  });
  chart.axis(false);
  chart.legend(false);
  chart.polygon().position(Stat.treemap('1*value'))
    .color('name')
    .label('name')
    .style({
      stroke: '#fff',
      lineWidth: 1
    });;
  chart.render();

  function findNode (name,nodes) {
    var rst = null;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.name === name) {
        rst = node;
      }
      if (!rst && node.children) {
        rst = findNode(name,node.children);
      }
      if (rst) {
        break;
      }
    }
    return rst;
  }
  var expanded = false;
  chart.on('plotclick',function(ev){
    var point = ev.data;
    if (point) {
      var name = point._origin.name;
      var node = findNode(name,data);
      var nodes;
      if (!expanded) { // 未展开
        if (node.children) {
          nodes = node.children;
        } else {
          nodes = [node];
        }

        chart.clear();
        chart.source(nodes);
        chart.polygon().position(Stat.treemap('1*value')).color(point.color)
          .label('name', {
            offset: -2,
            label:{
              fontSize: 10
            }
          })
          .style({
            stroke: '#fff',
            lineWidth: 1
          });
        chart.render();
        expanded = true;
      } else { //已经展开
        chart.clear();
        chart.source(data);
        chart.polygon().position(Stat.treemap('1*value')).color('name')
          .label('name', {
            label: {
              fontSize: 12
            }
          })
          .style({
            stroke: '#fff',
            lineWidth: 1
          });
        chart.render();
        expanded = false;
      }
    }
  });
});
</script>
