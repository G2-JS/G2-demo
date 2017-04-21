# sunburst chart

- template: demo-detail
- product: G2
- type: treemap
- index: 2
- description: 矩形树图的极坐标展示含义及用法与矩形树图类似。
- antVLink: https://antv.alipay.com/chart/details/treemap.html

----

<script>
var colors = ["#f9f0ab", "#e8e596","#f0e2a3","#ede487","#efd580", "#f1cb82","#f1c298","#e8b598","#d5dda1","#c9d2b5","#aec1ad","#aec1ad","#b49a3d","#b28647","#a97d32","#b68334","#d6a680","#dfad70","#a2765d","#9f6652","#b9763f","#bf6e5d","#af643c","#9b4c3f","#72659d","#8a6e9e","#8f5c85","#934b8b","#9d4e87","#92538c","#8b6397","#716084","#2e6093","#3a5988","#4a5072","#393e64","#aaa1cc","#e0b5c9","#e098b0","#ee82a2","#ef91ac","#eda994","#eeb798","#ecc099","#f6d5aa","#f0d48a","#efd95f","#eee469","#dbdc7f","#dfd961","#ebe378","#f5e351"];
$.getJSON('../../static/data/wheel.json',function (data) {
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: 0
    }
  });
  chart.source(data);
  chart.coord('polar');
  chart.tooltip({
    title: null
  });

  chart.axis(false);
  chart.legend(false);
  // 需要将显示tooltip的字段加到语法中，否则无法取到对应的字段例如 name
  chart.polygon().position(Stat.tree.rect('children')).color('name', colors).label('name',{
      offset: 0,
      labelEmit: true, /* 文字的方向，沿半径方向*/
      label:{
        fontSize: 9, 
        fill: '#fff',
        textAlign: 'center'
      }
    }).style({
      stroke: '#000',
      lineWidth: 1
    }).tooltip('name');
  chart.render();
});
</script>
