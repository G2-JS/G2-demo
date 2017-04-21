# 尖底漏斗图

- template: demo-detail
- product: G2
- type: 漏斗图
- index: 1
- description: 漏斗图适用于业务流程比较规范、周期长、环节多的单流程单向分析，通过漏斗各环节业务数据的比较能够直观地发现和说明问题所在的环节，进而做出决策。
- antVLink: https://antv.alipay.com/chart/details/funnel.html
----

<script>
var data = [
  {name:"General Public", value: 3500},
  {name:"Recongnizes Brand", value: 3124},
  {name:"Social Media Subscriber", value: 1003},
  {name:"Prospect Customer", value: 252},
  {name:"Customer", value: 200},
  {name:"Loyal/Returning Customer", value: 137},
  {name:"Brand Evangelist", value: 50},
];
var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [80, 200]
  }
});
chart.source(data);
chart.legend('name', {
  position: 'left'
});
chart.coord('rect').transpose().scale(1,-1);
chart.axis(false);
chart.intervalSymmetric().position('name*value').color('name').shape('pyramid');
chart.render();
</script>
