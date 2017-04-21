# 钉形柱状图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 8
- cite: http://www.anychart.com/products/anychart/gallery/Error_Charts/Column_Chart.php
- description: 实心的柱子标识不同性别的平均身高，而工字型柱子标识了不同性别的身高范围。

----

<script>
var data = [{"age":"5","gender":"女性","mean":101,"lower":93,"upper":109},{"age":"10","gender":"女性","mean":120,"lower":110,"upper":124},{"age":"15","gender":"女性","mean":150,"lower":134,"upper":165},{"age":"20","gender":"女性","mean":167,"lower":151.6,"upper":178},{"age":"25","gender":"女性","mean":175,"lower":156.7,"upper":181},{"age":"30","gender":"女性","mean":175,"lower":160,"upper":181},{"age":"35","gender":"女性","mean":173,"lower":156,"upper":181},{"age":"40","gender":"女性","mean":170,"lower":152,"upper":173},{"age":"45","gender":"女性","mean":170,"lower":154,"upper":176},{"age":"50","gender":"女性","mean":163,"lower":149,"upper":166},{"age":"5","gender":"男性","mean":104,"lower":101,"upper":111},{"age":"10","gender":"男性","mean":130,"lower":120,"upper":134},{"age":"15","gender":"男性","mean":165,"lower":149,"upper":180},{"age":"20","gender":"男性","mean":178,"lower":152.6,"upper":193},{"age":"25","gender":"男性","mean":185,"lower":166.7,"upper":194},{"age":"30","gender":"男性","mean":183,"lower":158,"upper":189},{"age":"35","gender":"男性","mean":182,"lower":165,"upper":192},{"age":"40","gender":"男性","mean":180,"lower":172,"upper":190},{"age":"45","gender":"男性","mean":182,"lower":166,"upper":188},{"age":"50","gender":"男性","mean":177,"lower":163,"upper":192}];
var chart = new G2.Chart({
  id : 'c1',
  width : 1000,
  height : 500
});

chart.source(data, {
  mean: {
    min: 0,
    tickInterval: 50,
    alias: '身高'
  },
  'lower+upper': {
    min: 0
  }
});
chart.axis('lower+upper', false);
chart.intervalDodge().position('age*mean').color('gender', function(val) {
  if (val === '男性') {
    return '#64b5f6';
  } 
  return '#ff9999';
 }).size(25);
chart.intervalDodge().position('age*(lower+upper)').color('#ef6c00').shape('gender', function() {
  return 'tick'
}).size(8);
chart.render();

chart.on('tooltipchange', function(ev) {
  var items = ev.items; // tooltip显示的项
  var femaleName = items[0].name;
  var femaleMean = items[0].value;
  var femaleRange = (items[2].value).split('-');
  var femaleColor = items[0].color;
  var maleName = items[1].name;
  var maleMean = items[1].value;
  var maleRange = (items[3].value).split('-');
  var maleColor = items[1].color;
  items.splice(0); // 清空

  items.push({
    title: null,
    name: femaleName,
    marker: true,
    color: femaleColor,
    value: femaleRange[0] + ' cm < ' + femaleMean + ' cm < ' + femaleRange[1] + ' cm'
  });
  items.push({
    title: null,
    name: maleName,
    marker: true,
    color: maleColor,
    value: maleRange[0] + ' cm < ' + maleMean + ' cm < ' + maleRange[1] + ' cm'
  });
});
</script>
