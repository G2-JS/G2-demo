# 饼图文本排布的各种 BUG

-----

## code

```html
<div id="c1"></div>
<div id="c2"></div>
<div id="c3"></div>
<div id="c4"></div>
<div id="c5"></div>
<div id="c6"></div>
```

```js
var G2 = require('g2');
var Stat = G2.Stat;

var data = [
  {name: "Singapore",count: 28},
  {name: "USA",count: 39},
  {name: "HANGZHOU",count: 1285},
  {name: "SHENZHEN",count: 1378}
]; // 升序
/*
var data = [
  {name: "SHENZHEN",count: 1378},
  {name: "HANGZHOU",count: 1285},
  {name: "Singapore",count: 28},
  {name: "USA",count: 39}
]; // 降序
*/
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [90, 120, 80,80]
  }
});
chart.source(data);
chart.coord('theta');
chart.intervalStack().position(Stat.summary.percent('count')).color('name').label('name*..percent',function(name, percent){
        percent = (percent * 100).toFixed(2) + '%';
        return name + ' ' + percent;
      });
chart.render();


var data = [{"id":0,"isDeleted":0,"value01":"蚂蚁金服-微贷事业部-技术部","value02":"27.7","value03":"10170","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-安全&amp;服务及数据事业群-安全产品技术部","value02":"3.5","value03":"18229","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-安全&amp;服务及数据事业群-安全智能部","value02":"6.9","value03":"18230","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部0","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部0","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部1","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部1","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部2","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部2","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-运营平台产品技术部","value02":"10.2","value03":"21210","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-体验技术部","value02":"8.3","value03":"24434","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-金融核心平台部","value02":"47.8","value03":"28519","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-工程效能部","value02":"1.0","value03":"30384","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-支付事业群-技术部","value02":"32.8","value03":"31076","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-安全&amp;服务及数据事业群-数据资产与智能部","value02":"3.1","value03":"31694","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-财富事业群-财富技术部","value02":"66.1","value03":"34036","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-保险事业部-技术部","value02":"13.6","value03":"35446","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部00","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部01","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-国际事业部-国际产品技术部10","value02":"0.5","value03":"20975","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-架构部20","value02":"0.5","value03":"19859","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"口碑-技术部","value02":"0.2","value03":"37840","value04":"","value05":"","value06":"","value07":"","value08":""},{"id":0,"isDeleted":0,"value01":"蚂蚁金服-平台产品技术部-客户平台部","value02":"25.9","value03":"39261","value04":"","value05":"","value06":"","value07":"","value08":""}];

var Frame = G2.Frame;
var frame = new Frame(data);
frame.addCol('value', function(obj){ 
  return obj.value02*1;
});
var chart = new G2.Chart({
  id: 'c2',
  width: 1000,
  height: 600,
  plotCfg: {
    margin: [100]
  }
});
chart.source(frame);
chart.coord('theta');
chart.legend(false);
chart.intervalStack().position(Stat.summary.percent('value')).color('value01').label('value01');
chart.render(); 

var data = [
  {type: '教育培训', value: 1},
  {type: '超市便利店', value: 33},
  {type: '购物', value: 24},
  {type: '美食', value: 28059},
  {type: '美发/美容/美甲', value: 2},
  {type: '休闲娱乐', value: 92}
];
function formatter(text,item){
  var point = item.point; // 每个弧度对应的点
  var percent = point['..percent'];
  percent = (percent * 100).toFixed(4) + '%';
  return  text + '<span style="color:' + point.color + '">' + percent + '</span>';
}

var chart = new G2.Chart({
  id: 'c5',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [100, 80, 100, 80]
  }
});

chart.source(data);
chart.filter('type', ['教育培训', '美食', '美发/美容/美甲']);
chart.coord('theta');
chart.intervalStack().position(Stat.summary.percent('value')).color('type').label('type');
chart.render();

var data = [
  {year:2007, area:'亚太地区', profit: 7860*0.189},
  {year:2007, area:'非洲及中东', profit: 7860*0.042},
  {year:2007, area:'拉丁美洲', profit: 7860*0.025},
  {year:2007, area:'中欧和东欧', profit: 7860*0.018},
  {year:2007, area:'西欧', profit: 7860*0.462},
  {year:2007, area:'北美', profit: 7860*0.265},
  {year:2011, area:'亚太地区', profit: 7620*0.539},
  {year:2011, area:'非洲及中东', profit: 7620*0.065},
  {year:2011, area:'拉丁美洲', profit: 7620*0.065},
  {year:2011, area:'中欧和东欧', profit: 7620*0.034},
  {year:2011, area:'西欧', profit: 7620*0.063},
  {year:2011, area:'北美', profit: 7620*0.234}
];
function formatter(text,item){
  var point = item.point; // 每个弧度对应的点
  var percent = point['..percent']; // ..proportion 字段由Stat.summary.proportion统计函数生成
  percent = (percent * 100).toFixed(2) + '%';
  return percent;
}
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c6',
  width: 1000,
  height: 450,
  plotCfg: {
    margin: [80, 120]
  }
});
// 以 year 为维度划分分面
chart.facet(['year']); 
chart.source(data);
chart.legend('bottom');
chart.coord('theta', {
  radius: 0.7,
  inner: 0.6
});
chart.tooltip({
  title: null
});
chart.intervalStack().position(Stat.summary.percent('profit')).color('area').label('area');
chart.render();
```
