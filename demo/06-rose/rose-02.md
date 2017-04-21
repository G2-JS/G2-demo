# 各国消费对比

- template: demo-detail
- product: G2
- type: 南丁格尔玫瑰图
- index: 1
- description: 南丁格尔玫瑰图又名鸡冠花图、极坐标区域图，是南丁格尔在克里米亚战争期间提交的一份关于士兵死伤的报告时发明的一种图表,是在极坐标下绘制的柱状图，使用圆弧的半径长短表示数据的大小（数量的多少）。
- antVLink: https://antv.alipay.com/chart/details/rose.html

----

<script>
var data = [{country:'中国',cost:96},{country:'德国',cost:121},{country:'美国',cost:100},{country:'日本',cost:111},{country:'韩国',cost:102},{country:'法国',cost:124},{country:'意大利',cost:123},{country:'荷兰',cost:111},{country:'比利时',cost:123},{country:'英国',cost:109},{country:'加拿大',cost:115},{country:'俄罗斯',cost:99},{country:'墨西哥',cost:91},{country:'印度',cost:87},{country:'瑞士',cost:125},{country:'澳大利亚',cost:130},{country:'西班牙',cost:109},{country:'巴西',cost:123},{country:'泰国',cost:91},{country:'印尼',cost:83},{country:'波兰',cost:101},{country:'瑞典',cost:116},{country:'奥地利',cost:111},{country:'捷克',cost:107}];

var chart = new G2.Chart({
  id: 'c1',
  width : 1000,
  height : 500,
  plotCfg: {
    margin: [20, 80, 100, 80]
  }
});

chart.source(data, {
  'cost': {
    min: 0
  }
});
chart.coord('polar');
chart.axis('cost', {
  labels: null
});
chart.axis('country', {
  gridAlign: 'middle',
  labels: {
    label: {
      textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
    }
  }
});
chart.legend('country', {
  position: 'bottom',
  itemWrap: true // 图例换行，将该参数设置为 true, 默认为 false，不换行。
});
chart.interval().position('country*cost')
  .color('country','rgb(252,143,72)-rgb(255,215,135)')
  .label('cost',{offset: -15,label: {textAlign: 'center', fontWeight: 'bold'}})
  .style({
    lineWidth: 1,
    stroke: '#fff'
  });
chart.render();
</script>
