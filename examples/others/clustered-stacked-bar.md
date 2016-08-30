# 分组层叠柱状图

----

## code
```html
<div id="c1"></div>
```

```js
var G2 = require('g2');
 var data = [{"State":"AL","Under 5 Years":310504,"5 to 13 Years":552339,"14 to 17 Years":259034,"18 to 24 Years":450818,"25 to 44 Years":1231572,"45 to 64 Years":1215966,"65 Years and Over":641667},{"State":"AK","Under 5 Years":52083,"5 to 13 Years":85640,"14 to 17 Years":42153,"18 to 24 Years":74257,"25 to 44 Years":198724,"45 to 64 Years":183159,"65 Years and Over":50277},{"State":"AZ","Under 5 Years":515910,"5 to 13 Years":828669,"14 to 17 Years":362642,"18 to 24 Years":601943,"25 to 44 Years":1804762,"45 to 64 Years":1523681,"65 Years and Over":862573},{"State":"AR","Under 5 Years":202070,"5 to 13 Years":343207,"14 to 17 Years":157204,"18 to 24 Years":264160,"25 to 44 Years":754420,"45 to 64 Years":727124,"65 Years and Over":407205},{"State":"CA","Under 5 Years":2704659,"5 to 13 Years":4499890,"14 to 17 Years":2159981,"18 to 24 Years":3853788,"25 to 44 Years":10604510,"45 to 64 Years":8819342,"65 Years and Over":4114496},{"State":"CO","Under 5 Years":358280,"5 to 13 Years":587154,"14 to 17 Years":261701,"18 to 24 Years":466194,"25 to 44 Years":1464939,"45 to 64 Years":1290094,"65 Years and Over":511094},{"State":"CT","Under 5 Years":211637,"5 to 13 Years":403658,"14 to 17 Years":196918,"18 to 24 Years":325110,"25 to 44 Years":916955,"45 to 64 Years":968967,"65 Years and Over":478007}];
var Stat = G2.Stat;
var Frame = G2.Frame;
var frame = new Frame(data);
frame = Frame.combinColumns(frame,['Under 5 Years', '5 to 13 Years', '14 to 17 Years', '18 to 24 Years', '25 to 44 Years', '45 to 64 Years', '65 Years and Over'],'population', 'age', 'State');
frame.addCol('type', function(obj) {
  var key = obj.age;
  var type;
  if (key === 'Under 5 Years' || key === '5 to 13 Years' || key === '14 to 17 Years') {
    type = 'a';
  } else if (key === '18 to 24 Years') {
    type = 'b';
  } else if (key === '25 to 44 Years') {
    type = 'c';
  } else {
    type = 'd';
  }
  return type;
});
var colorMap = {
  'Under 5 Years': '#98abc5',
  '5 to 13 Years': '#8a89a6',
  '14 to 17 Years': '#7b6888',
  '18 to 24 Years': '#6b486b',
  '25 to 44 Years': '#a05d56',
  '45 to 64 Years': '#d0743c',
  '65 Years and Over': 'darkorange'
};
var chart = new G2.Chart({
  id : 'c1',
  width : 1000,
  height : 500,
  plotCfg: {
    margin: [20, 130, 80]
  }
});
chart.source(frame, {
  population: {
    tickInterval: 1000000
  }
});
chart.axis('population', {
  formatter: function(val) {
    return (val / 1000000) + 'M';
  }
});
chart.interval(['dodge', 'stack']).position('State*population').color('type*age', function(type, age) {
  return colorMap[age];
}).size(18);
chart.render();
```
