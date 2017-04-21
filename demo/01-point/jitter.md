# 扰动点图和箱型图

- template: demo-detail
- product: G2
- type: 点图
- index: 6
- description: 箱型图和扰动点图均可用于展示一个数据集中连续变量如何随着分类变量水平的变化而变化。箱型图使用 5 个数字对分布进行概括，而扰动点图将所有的点绘制在图中以展示分布情况。该图既展示了不同分数段的人数分布。
- cite: https://www.dataplusscience.com/TableauJitter.html

----

<script>
var colorMap = {
  'A': '#3182bd',
  'A-': '#9ecae1',
  'B+': '#deebf7',
  'B': '#bdbdbd',
  'B-': '#ffeda0',
  'C': '#feb24c',
  'F': '#f03b20'
}
$.getJSON('../../static/data/dv-grades.json',function(data){
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
      margin: [80, 200],
      background: {
        stroke: '#ccc'
      }
    }
  });
  chart.source(data);
  // 去除y轴的栅格线
  chart.axis('Score',{
    grid: null
  });
  // x轴的栅格线居中
  chart.axis('Class',{
    position: 'top',
    tickLine: null,    
    grid: {
      line: {
        stroke: '#d9d9d9',
        lineWidth: 2,
        lineDash: [4, 2]
      }
    },
    gridAlign: 'middle'
  });
  chart.pointJitter().position('Class*Score').color('Grade', function(val) {
    return colorMap[val];
  }).shape('circle').size(4);
  chart.schema().position(Stat.bin.quantile.letter('Class*Score')).color('#000').shape('box');
  chart.render();
});
</script>
