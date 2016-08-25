# 饼图

饼图广泛得应用在各个领域，用于表示不同分类的占比情况，通过弧度大小来对比各种分类。
- antVLink: https://antv.alipay.com/chart/details/pie.html

----


## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [
    {name: 'Microsoft Internet Explorer', value: 56.33 },
    {name: 'Chrome', value: 24.03},
    {name: 'Firefox', value: 10.38},
    {name: 'Safari',  value: 4.77},
    {name: 'Opera', value: 0.91},
    {name: 'Proprietary or Undetectable', value: 0.2}
  ];
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data);

  // 重要：绘制饼图时，必须声明 theta 坐标系
  chart.coord('theta', {
    radius: 0.8 // 设置饼图的大小
  });
  chart.legend('bottom');
  chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name')
    .label('name*..percent',function(name, percent){
      percent = (percent * 100).toFixed(2) + '%';
      return name + ' ' + percent;
    });
    
  chart.render();

  // 设置默认选中
  var geom = chart.getGeoms()[0]; // 获取所有的图形
  var items = geom.getData(); // 获取图形对应的数据
  geom.setSelected(items[1]); // 设置选中

```
