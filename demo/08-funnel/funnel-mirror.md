# 对称漏斗图

- template: demo-detail
- product: G2
- type: 漏斗图
- index: 3
- description: 漏斗图适用于业务流程比较规范、周期长、环节多的单流程单向分析，通过漏斗各环节业务数据的比较能够直观地发现和说明问题所在的环节，进而做出决策。
- antVLink: https://antv.alipay.com/chart/details/funnel.html

----
<style>
  .ac-labels{
    color: #fff;
  }
  .ac-labels .title{
    font-size: 16px;
    width: 100px;
  }
  .ac-labels .text{
    font-size: 14px;
  }
</style>

<script>
var data = [
  {action:'访问',visitor:500,site: '站点1'},
  {action:'浏览',visitor:400,site: '站点1'},
  {action:'交互',visitor:300,site: '站点1'},
  {action:'下单',visitor:200,site: '站点1'},
  {action:'访问',visitor:550,site: '站点2'},
  {action:'浏览',visitor:420,site: '站点2'},
  {action:'交互',visitor:280,site: '站点2'},
  {action:'下单',visitor:150,site: '站点2'}
];

data.sort(function(obj1, obj2){ // 从小到大
  return obj1.visitor - obj2.visitor;
});

function formatter(text, item){
  var point = item.point;
  return point.action + text;
}

var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [50, 80, 80]
  }
});
chart.source(data);
chart.facet(['site'], {
  type: 'mirror',
  transpose: true,
  margin: 0
});
chart.axis(false);
chart.interval()
  .position('action*visitor')
  .color('action', ['#81BB9D', '#C86D51', '#B22226', '#243543'])
  .label('visitor', {
    offset: -2,
    renderer: formatter
  })
  .shape('funnel')
  .style({
    lineWidth: 1,
    stroke: '#fff'
  });
chart.render();
</script>
