# 嵌套饼图

- template: demo-detail
- product: G2
- type: 饼图
- index: 2
- description: 饼图广泛得应用在各个领域，用于表示不同分类的占比情况，通过弧度大小来对比各种分类。
- antVLink: https://antv.alipay.com/chart/details/pie.html
- cite: http://echarts.baidu.com/demo.html#pie-nest
----

<script>
var data = [
  {value:335, type:'直达', name:'直达'},
  {value:310, type:'营销广告', name:'邮件营销'},
  {value:234, type:'营销广告', name:'联盟广告'},
  {value:135, type:'营销广告', name:'视频广告'},
  {value:1048, type:'搜索引擎', name:'百度'},
  {value:251, type:'搜索引擎', name:'谷歌'},
  {value:147, type:'搜索引擎', name:'必应'},
  {value:102, type:'搜索引擎', name:'其他'}
];

var Stat = G2.Stat;

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [60, 80, 60, 80]
  }
});
chart.source(data);
chart.legend(false);
chart.coord('theta', {
  radius: 0.5 // 设置饼图的大小
});

chart.intervalStack()
  .position(Stat.summary.percent('value'))
  .color('type', ['#B22425', '#243543', '#518F98'])
  .label('type', {
    offset: -20,
    label: {
      fontSize: 14
    }
  });
  
var view = chart.createView();
view.source(data);
view.coord('theta', {
  inner: 0.75
});
view.intervalStack()
  .position(Stat.summary.percent('value'))
  .color('name', ['#B22425', '#C86D51', '#81BB9D', '#63906E', '#BD7212', '#AE9088', '#5B5D61', '#43525D'])
  .label('name*type');
chart.render();

chart.on('plotclick', function(ev) {
  var chartGeom = chart.get('geoms')[0];
  var viewGeom = view.get('geoms')[0];
  viewGeom.clearSelected();
  var selected = chartGeom.getSelected();
  if (selected) {     
    var data = selected['_origin'];
    var selectedType = data.type;
    var items = viewGeom.getData();
    for(var i = 0; i < items.length; i++) {
      var item = items[i];
      if(item['_origin'].type === selectedType) {
        viewGeom.setSelected(item);
      }
    }
  }
});
</script>
