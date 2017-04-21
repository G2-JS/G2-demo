# 层叠柱状图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 2
- description: 与并排显示分类的分组柱状图不同，层叠柱状图将每个柱子进行分割以显示相同类型下各个数据的大小情况。它可以形象得展示一个大分类包含的每个小分类的数据，以及各个小分类的占比，显示的是单个项目与整体之间的关系。
- antVLink: https://antv.alipay.com/chart/details/stacked-bar.html
- cite: http://bl.ocks.org/mbostock/3886208
----

<script>
$.getJSON('../../static/data/populationsByage.json', function(data) {
  var Stat = G2.Stat;
  var Frame = G2.Frame;
  var frame = new Frame(data);
  frame = Frame.combinColumns(frame,["小于5岁","5至13岁","14至17岁","18至24岁","25至44岁","45至64岁","65岁及以上"],'人口数量','年龄段','State');

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [30, 80, 90, 40],
      background: { 
        stroke: '#ccc', // 边颜色
        lineWidth: 1, // 边框粗细
      } // 绘图区域背景设置
    }
  });
  chart.source(frame);
  chart.legend({
    position: 'bottom'
  });
  chart.axis('State', {
    title: null
  });
  chart.axis('人口数量', {
    titleOffset: 75,
    formatter: function(val) {
      return val / 1000000 + 'M';
    },
    position: 'right'
  });
  chart.intervalStack().position('State*人口数量').color('年龄段', ['#98ABC5', '#8A89A6', '#7B6888', '#6B486B', '#A05D56', '#D0743C', '#FF8C00']).size(9);
  chart.render();
});
</script>
