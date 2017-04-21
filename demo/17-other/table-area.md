# 表格内图表

- template: demo-detail
- type: 其他图表
- index: 12

----
 
<style>
  .table{
    border: 1px solid #cdcdcd;
  }
 
  .table td{
    padding: 4px 10px;
    border-left: 1px solid #cdcdcd;
    border-top: 1px solid #cdcdcd;
  }
  .table  .chart-td{
    padding: 0;
  }
 
  #c1{
    position: relative;
  }
 
  .chart-marker{
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 5px;
    border: 2px solid #db4c3c;
    z-index: 10;
    background-color: #fff;
 
  }
 
  .crossLine{
    border-left: 1px solid #db4c3c;
    position: absolute;
    display: none;
    top: 34px;/*表头的高度*/
  }
</style>
 
<script>
var container = $('#c1');
var tableEl = $('<table class="table"><thead><td width="200">name</td><td>chart</td><td width="300" >time/value</td></thead><tbody></tbody></table>').appendTo('#c1');
var tbodyEl = tableEl.find('tbody');
var crossEl = $('<div class="crossLine"></div>').appendTo('#c1');
var charts = []; // 缓存所有的图表
 
// 创建行
function addRow(obj,index){
  var chartId = 'ch' + index;
  var str = '<tr><td>'+obj.name+'</td><td id="'+chartId+'" class="chart-td"></td><td> </td></tr>';
  $(str).appendTo(tbodyEl);
  var chart = createChart(chartId,obj.subData);
  charts.push(chart);
}
// 创建图表
function createChart(id,data) {
  var chart = new G2.Chart({
    id: id,
    width: 400,
    height: 80,
    animate: false,
    plotCfg: {
      margin: 0
    }
  });
  var defs = {
    'timestamp': {type: 'time',mask: 'yy-mm-dd HH:MM:ss'},
    'value': {nice: false}
  };
 
  chart.source(data,defs);
  chart.axis(false); // 隐藏坐标轴
  chart.tooltip(false);// 不显示坐标轴，自己实现坐标轴功能
 
  chart.area().position('timestamp*value').color('#db4c3c');
 
  chart.render();
  return chart;
}
 
// 根据鼠标移动的位置设置当前点的x,y信息
function setChartActive (chart,point) {
  var tipItems = chart.getTooltipItems(point); // 获取当前点的信息
  if (tipItems.length) {
    var item = tipItems[0]; //由于只有一条线
    var chartId = chart.get('id');
    $('#' + chartId).next('td').text(item.title + '/' + item.value + 'ms');
    showMarkerPoint(chart,item.point);
  }
}
 
// 获取点的相对位置
function getOffset(chartId,point) {
  var chartEl = $('#' + chartId);
  var chartOffset = chartEl.offset();
  var containerOffset = container.offset();
  var offset = {
    x: chartOffset.left - containerOffset.left - 4.5, // 半径 4.5
    y: chartOffset.top - containerOffset.top - 4.5
  };
 
  offset.x = offset.x + point.x;
  offset.y = offset.y + point.y;
  return offset;
}
 
// 显示数据对应的点
function showMarkerPoint (chart,point) {
  var chartId = chart.get('id');
  var pointId =  chartId + 'point';
  var offset = getOffset(chartId,point);
  var marker = $('#' + pointId);
  if (!marker.length) {
    marker = $('<span id="'+pointId+'" class="chart-marker"></span>').appendTo(container);
  };
  marker.css({left: offset.x,top: offset.y}); // 设置位置
  marker.show();
}
 
// 显示贯穿所有表的线
function showCrossLine (chart,point) {
  var tipItems = chart.getTooltipItems(point); // 获取当前点的信息
  if (tipItems.length) { 
    var offset = getOffset(chart.get('id'),point);
    crossEl.css({
      left: offset.x + 4.5 // 圆的半径
    });
    crossEl.height(tbodyEl.height());
    crossEl.show();
  }
}
 
// 激活指定的点，显示tooltip和贯穿的线,点是相对于画布的点
function activePoint(point) {
  for(var i = 0; i < charts.length; i++) {
    var chart = charts[i];
    setChartActive(chart,point);
  }
  showCrossLine(charts[0],point);
}

// 委托鼠标事件，在画布上移动时触发
$('#c1').delegate('canvas','mousemove',function(ev){
  //var target = ev.target;
  var point = {
    x: ev.offsetX,
    y: ev.offsetY
  };
  activePoint(point);
});
 
$.getJSON('../../static/data/table-area.json',function (data) {
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    addRow(obj,i);
  }
 
  activePoint({ // 设置默认的点
    x: 50,
    y: 50
  });
 
});
</script>
