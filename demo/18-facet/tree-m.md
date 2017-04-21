# 树形分面-多级

- template: demo-detail
- type: 分面
- index: 5
----

<script>

  var data = [
    {gender:'男',count:40,'class': '一班',grade: '一年级'},
    {gender:'女',count:30,'class': '一班',grade: '一年级'},
    {gender:'男',count:35,'class': '二班',grade: '一年级'},
    {gender:'女',count:45,'class': '二班',grade: '一年级'},
    {gender:'男',count:20,'class': '三班',grade: '一年级'},
    {gender:'女',count:35,'class': '三班',grade: '一年级'},

    {gender:'男',count:30,'class': '一班',grade: '二年级'},
    {gender:'女',count:40,'class': '一班',grade: '二年级'},
    {gender:'男',count:25,'class': '二班',grade: '二年级'},
    {gender:'女',count:32,'class': '二班',grade: '二年级'},
    {gender:'男',count:28,'class': '三班',grade: '二年级'},
    {gender:'女',count:36,'class': '三班',grade: '二年级'}/**/
  ];
  var Stat = G2.Stat;

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });

  chart.source(data);
  chart.coord('theta');
  chart.facet(['grade','class'],{type: 'tree',line: {stroke: '#00a3d7'},smooth: true}); 
  chart.intervalStack().position(Stat.summary.percent('count')).color('gender');//
  chart.render();

</script>
