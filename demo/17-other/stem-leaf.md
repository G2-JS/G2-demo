# 茎叶图

- template: demo-detail
- type: 其他图表
- index: 3
- description: 茎叶图（Stem-and-Leaf display)又称“枝叶图”，它的思路是将数组中的数按位数进行比较，将数的大小基本不变或变化不大的位作为一个主干（茎），将变化大的位的数作为分枝（叶），列在主干的后面，这样就可以清楚地看到每个主干后面的几个数，每个数具体是多少。
- antVLink: https://antv.alipay.com/chart/details/stem-leaf.html
-----

<script>
function statStemLeafData(data, num) {
  var str;
  var stem;
  data.sort(function(a, b){
    return a.v-b.v;
  });
  Util.each(data, function(object){
    str = object.v.toString();
    stem = str.substr(0, str.length - num);
    object.stem = stem ? stem : '0';
    object.leaf = str.substr(str.length - num, str.length);
  });
  return data;
}
var Frame = G2.Frame;
var Util = G2.Util;
var Stat = G2.Stat;
var data = [{v: 2},{v: 8},{v: 12},{v: 13},{v: 17},{v: 19},{v: 22},{v: 24},{v: 29},{v: 31},{v: 31},{v: 31},{v: 36},{v: 35},{v: 39},{v: 41},{v: 49},{v: 41},{v: 49},{v: 41},{v: 49},{v: 41},{v: 49},{v: 41},{v: 49},{v: 42},{v: 42},{v: 42},{v: 43},{v: 43},{v: 49},{v: 53},{v: 53},{v: 53},{v: 53},{v: 63},{v: 63},{v: 63},{v: 66},{v: 65},{v: 69},{v: 71},{v: 71},{v: 72},{v: 76},{v: 75},{v: 77},];
var str;
var stem;
var chart;
data = statStemLeafData(data, 1);
chart = new G2.Chart({
  id : 'c1',
  width : 1000,
  height : 500
});
chart.source(data);
chart.axis('leaf', false);
chart.axis('stem', {
  titleOffset: 50,
  grid: null
});
chart.pointStack().position('stem').size(8)
  .label('leaf', {
    offset: 0
  })
  .tooltip('v')
  .style({
    stroke: null,
    fill: null
  });
chart.render();
</script>
