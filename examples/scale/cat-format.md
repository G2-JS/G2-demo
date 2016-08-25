# 分类格式化


----

## code

```html
<div id="c1">
</div>
```

```js
  var G2 = require('g2');
  var data = [];

  /**
   * 有3个字段
   * name ：名称
   * value : 0 - 100 之间的数字
   * type: 类型值 1，2
   */
  for (var i = 0; i < 15; i ++) {
    var obj = {
      name: '同学' + i,
      value: parseInt(Math.random() * 100)
    };
    obj.type = obj.value > 60 ? 2 : 1;
    data.push(obj);
  }
  var Stat = G2.Stat;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.coord().transpose();
  
  chart.source(data,{ // 列定义
    'type': {
      type: 'cat',
      alias: '类型',
      // 用于控制图例、提示信息上显示的文本
      formatter: function (value) {
        if (value == 1) {
          return '警告'
        }
        return '错误';
      }
    }
  });
  
  chart.axis('name',{title: null});
  chart.interval().position('name*value').color('type',function (value,name) {
    if (value == 1) {
      return '#FAC450'
    } else if (value == 2) {
      return '#FF6600';
    }
    return 'green';
  });
  chart.render();
```
