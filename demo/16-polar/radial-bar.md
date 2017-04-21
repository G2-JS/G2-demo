# 玉玦图

- template: demo-detail
- type: 极坐标
- index: 2
- description: 玉玦图（又名，环形柱状图），是柱状图关于笛卡尔坐标系转换到极坐标系的仿射变换。其意义和用法与柱状图类似。

----

<script>
var data = [
  {question: '问题 1', percent: 0.21},
  {question: '问题 2', percent: 0.47},
  {question: '问题 3', percent: 0.49},
  {question: '问题 4', percent: 0.52},
  {question: '问题 5', percent: 0.53},
  {question: '问题 6', percent: 0.54},
  {question: '问题 7', percent: 0.60},
  {question: '问题 8', percent: 0.67}
];

var Frame = G2.Frame;
var frame = new Frame(data); // 加工数据
frame.addCol('odd',function(obj,index){
  return index % 2;
});

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
var defs = {
  'percent': {min: 0,max: 1},
  'odd': {type: 'cat'}
};
chart.source(frame,defs);
chart.tooltip({
  map: {
    value: 'percent',
    name: '占比',
    title: 'question'
  }
});
chart.legend(false);
chart.coord('polar',{inner: 0.1}).transpose();
chart.interval().position('question*percent')
  .color('odd',function(value){
    return ['rgb(224,74,116)', 'rgb(211,0,57)'][value];
  })
  .label('percent',{offset: -5});

frame.each(function(obj){
  chart.guide().text([obj.question,0],obj.question + ' ',{
    textAlign: 'right'
  });
});
chart.render();
</script>
