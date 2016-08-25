# 自定义提示信息

----

## code

```html
<style>
  .pie-container{
    position:absolute;
    visibility:hidden;
    border : 1px solid #efefef;
    background-color: white;
    opacity: .8;
    padding: 5px;
 
    transition: top 200ms,left 200ms;
    -moz-transition:  top 200ms,left 200ms;  /* Firefox 4 */
    -webkit-transition:  top 200ms,left 200ms; /* Safari 和 Chrome */
    -o-transition:  top 200ms,left 200ms;
  }
</style>

<div id="c1"></div>
<div style="display:none">
  <div id="p1" class="pie-container ac-tooltip">
    <span>细节分步图</span>
    <div id="c2"></div>
  </div>
</div>
```

```js
    var G2 = require('g2');
    
    var data = [
      {name: '类别1',value: 10,children: [
        {name: '类别11',value: 18},
        {name: '类别12',value: 10},
        {name: '类别13',value: 7},
        {name: '类别14',value: 12}
      ]},
      {name: '类别2',value: 8,children: [
        {name: '类别21',value: 28},
        {name: '类别22',value: 20},
        {name: '类别23',value: 7},
        {name: '类别24',value: 2}
      ]},
      {name: '类别3',value: 4,children: [
        {name: '类别31',value: 14},
        {name: '类别32',value: 12},
        {name: '类别33',value: 6},
        {name: '类别34',value: 1}
      ]},
      {name: '类别4',value: 9,children: [
        {name: '类别41',value: 38},
        {name: '类别42',value: 10},
        {name: '类别43',value: 17},
        {name: '类别44',value: 22}
      ]}
    ];
    var Stat = G2.Stat;
    // 创建柱状图
    var chart = new G2.Chart({
      id: 'c1',
      animate: false,
      width: 1000,
      height: 500
    });
    var defs = {
      'value': {min: 0}
    };
    chart.source(data);
    chart.tooltip(true,{
      custom : true,
      html : '#p1'
    });
    chart.interval().position('name*value').color('name');
    chart.render();


    // 创建柱状图
    var chart2 = new G2.Chart({
      id: 'c2',
      animate: false,
      width: 300,
      height: 300,
      plotCfg: {
        margin: [0,0,35]// 设置边框
      }
    });

    chart2.coord('theta');
    chart2.legend('name', {
      position: 'bottom',
      title: null
    });

    // 查找对应的数据
    function findObj(name) {
      var rst = null
      data.forEach(function(item){
        if(item.name === name) {
          rst = item;
        }
      });
      return rst;
    }

    // 监听tooltip 改变事件
    chart.on('tooltipchange',function(ev){
      var item = ev.items[0]; // 获取tooltip要显示的内容
      var name = item.name;
      var obj = findObj(name);
      if (obj) {
        chart2.clear();
        chart2.source(obj.children);
        chart2.intervalStack().position(Stat.summary.percent('value')).color('name');  
        chart2.render();
      }
    });
```
