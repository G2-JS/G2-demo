# 嵌套饼图

----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {gender: 'Famale','answer': 'rarely',proportion: 0.08},
    {gender: 'Famale','answer': 'infrequently',proportion: 0.11},
    {gender: 'Famale','answer': 'occasionally',proportion: 0.17},
    {gender: 'Famale','answer': 'frequently',proportion: 0.32},
    {gender: 'Famale','answer': 'not sure',proportion: 0.32},
    {gender: 'Male','answer': 'rarely',proportion: 0.30},
    {gender: 'Male','answer': 'infrequently',proportion: 0.15},
    {gender: 'Male','answer': 'occasionally',proportion: 0.10},
    {gender: 'Male','answer': 'frequently',proportion: 0.07},
    {gender: 'Male','answer': 'not sure',proportion: 0.38},
  ];

  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [20, 100, 80, 80]
    }
  });
  chart.source(data, {
    '..percent': {max: 1,min: 0}
  });
  chart.coord('polar').transpose();
  chart.intervalStack().position(Stat.summary.percent('gender*proportion')).color('answer');
  chart.render();
```
