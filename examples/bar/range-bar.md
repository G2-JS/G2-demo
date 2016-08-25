# 有区间范围的条形图

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {profession: '两年制副学士学位',highest: 110000,minimum: 23000,mean: 56636},
    {profession: '执法与救火',highest: 120000,minimum: 18000,mean: 66625},
    {profession: '教育学',highest: 125000,minimum: 24000,mean: 72536},
    {profession: '心理学',highest: 130000,minimum: 22500,mean: 75256},
    {profession: '计算机科学',highest: 131000,minimum: 23000,mean: 77031},
    {profession: '医学与护理',highest: 132000,minimum: 23500,mean: 77791},
    {profession: '农学',highest: 135000,minimum: 23200,mean: 78526},
    {profession: '数学',highest: 137000,minimum: 23000,mean: 78526},
    {profession: '物理与化学',highest: 130000,minimum: 30500,mean: 79975},
    {profession: '哲学',highest: 140000,minimum: 22200,mean: 81911},
    {profession: '建筑学',highest: 139000,minimum: 23000,mean: 83971},
    {profession: '经管营销',highest: 138000,minimum: 23000,mean: 84572},
    {profession: '工程学',highest: 145000,minimum: 32200,mean: 88037},
    {profession: '人文科学',highest: 136000,minimum: 40000,mean: 84572},
    {profession: '新闻学',highest: 148000,minimum: 33000,mean: 89064},
    {profession: '生物学',highest: 147000,minimum: 34200,mean: 89869},
    {profession: '传播学',highest: 149000,minimum: 34000,mean: 90735},
    {profession: '社会学、政治学',highest: 148500,minimum: 35000,mean: 91704},
    {profession: '经济学',highest: 146000,minimum: 37200,mean: 91923},
    {profession: '视觉与表演艺术',highest: 148900,minimum: 40000,mean: 94381},
    {profession: '历史系',highest: 155000,minimum: 38200,mean: 95900},
    {profession: '英语',highest: 159000,minimum: 39000,mean: 99533}
  ];
 
  var Stat = G2.Stat;
  var Frame = G2.Frame;
  var frame = new Frame(data); // 加工数据
 
  frame.addCol('range',function (obj) {
    return [obj.minimum,obj.highest];
  });
 
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [80, 120, 90, 180]
    }
  });
  var defs = {
    'range': {min: 0,max: 200000,alias: '收入范围'},
    'mean': {min: 0,max: 200000,alias: '收入均值'}
  };
 
  chart.source(frame,defs);
  chart.axis('profession',{title: null});
  chart.axis('mean',false);
 
  chart.coord().transpose();
  chart.interval().position('profession*range').size(12);
  chart.point().position('profession*mean').color('#F8AB60')
    .shape('circle')
    .label('mean',{offset: 20,label: {fill: '#F8AB60'}});
 
  chart.render();
```
