# Step-line chart

- template: demo-detail
- product: G2
- type: 线图
- index: 4
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
----

<script>
  var data = [
    {x: 1,y: 55,type: 'vh'},
    {x: 2,y: 60,type: 'vh'},
    {x: 3,y: 57,type: 'vh'},
    {x: 4,y: 52,type: 'vh'},
    {x: 5,y: 58,type: 'vh'},
    {x: 1,y: 45,type: 'hv'},
    {x: 2,y: 40,type: 'hv'},
    {x: 3,y: 47,type: 'hv'},
    {x: 4,y: 42,type: 'hv'},
    {x: 5,y: 48,type: 'hv'},
    {x: 1,y: 35,type: 'hvh'},
    {x: 2,y: 30,type: 'hvh'},
    {x: 3,y: 37,type: 'hvh'},
    {x: 4,y: 32,type: 'hvh'},
    {x: 5,y: 38,type: 'hvh'},
    {x: 1,y: 25,type: 'vhv'},
    {x: 2,y: 20,type: 'vhv'},
    {x: 3,y: 27,type: 'vhv'},
    {x: 4,y: 22,type: 'vhv'},
    {x: 5,y: 28,type: 'vhv'}
  ];
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);
  chart.line().position('x*y').color('type').size(3).shape('type', ['vh','hv','hvh','vhv']); // 展示不同的 step 算法
  chart.render();
</script>
