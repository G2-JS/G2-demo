# 瀑布图

- template: demo-detail
- product: G2
- type: 柱状图
- description: 瀑布图显示值在受到各种因子影响后如何改变，要么增加值，要么减少值，然后将呈现结果值。例如，瀑布图可以用于图表化某个值随着时间的变动，或图表化不同因子对总计的影响。该图蓝色代表收益，红色代表支出，而灰色代表总收入。
- index: 10
----

<script>
var Util = G2.Util;
var data = [
  {type: 'Gross Revenue', value: 245631},
  {type: 'Rev Adjustments', value: [245631, 243219]},
  {type: 'Net Revenue', value: 243219},
  {type: 'Inventory', value: [243219, 128320]},
  {type: 'Merchandising', value: [128320, 109589]},
  {type: 'Other scales costs', value: [109589, 103345]},
  {type: 'Gross Income', value: 103345},
  {type: 'Staff', value: [103345, 76591]},
  {type: 'Marketing', value: [76591, 65312]},
  {type: 'Facilities & Ins.', value: [65312, 29312]},
  {type: 'Operating Income', value: 29321},
  {type: 'Taxes', value: [29321, 24912]},
  {type: 'Net Income', value: 24921}
];
var Frame = G2.Frame;
var frame = new Frame(data);
frame.addCol('trend', function(obj) {
  if (obj.type === 'Gross Revenue') {
    return 'Increase';
  } else if (!Util.isArray(obj.value)) {
    return 'Total';
  } else if (obj.value[0] >= obj.value[1]) {
    return 'Decrease';
  } else {
    return 'Increase';
  }
});
var colorMap = {
  Increase: '#2b8cbe',
  Decrease: '#e34a33',
  Total: '#636363'
};
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500,
  plotCfg: {
    margin: [20, 80, 80, 80] 
  }
});
chart.source(frame, {
  type: {
    values: ["Gross Revenue", "Rev Adjustments", "Net Revenue", "Inventory", "Merchandising", "Other scales costs", "Gross Income", "Staff", "Marketing", "Facilities & Ins.", "Operating Income", "Taxes", "Net Income"]
  }
});
chart.axis('value', {
  formatter: function(val) {
    return (val / 1000 ) + 'k';
  }
});
chart.axis('type', {
  title: null,
  labels: {
    label: {
      'textAlign': 'middle'
    }
  }
});
chart.interval().position('type*value').color('trend', function(val) {
  return colorMap[val];
}).size(50);
chart.render();
</script>
