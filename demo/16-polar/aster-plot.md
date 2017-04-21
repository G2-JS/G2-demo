# Aster plot

- template: demo-detail
- product: G2
- type: 极坐标
- index: 0
- description: 极坐标下的柱状图。

----

<script>
var data = [{"label":"Fisheries","colour":"#9E0041","score":59},{"label":"Mariculture","colour":"#C32F4B","score":24},{"label":"Artisanal Fishing Opportunities","colour":"#E1514B","score":98},{"label":"Natural Products","colour":"#F47245","score":60},{"label":"Carbon Storage","colour":"#FB9F59","score":74},{"label":"Coastal Protection","colour":"#FEC574","score":70},{"label":"Tourism &  Recreation","colour":"#FAE38C","score":42},{"label":"Livelihoods","colour":"#EAF195","score":77},{"label":"Economies","colour":"#C7E89E","score":88},{"label":"Iconic Species","colour":"#9CD6A4","score":60},{"label":"Lasting Special Places","colour":"#6CC4A4","score":65},{"label":"Clean Waters","colour":"#4D9DB4","score":71},{"label":"Habitats","colour":"#4776B4","score":88},{"label":"Species","colour":"#5E4EA1","score":83}];

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});

chart.source(data);
chart.coord('polar', {
  inner: 0.2
});
chart.legend(false);
chart.axis('score', false);
chart.axis('label', {
  labels: null
});
chart.interval().position('label*score').color('colour', function(val) {
  return val;
}).style({
  stroke: '#999',
  lineWidth: 1
}).tooltip('score');
chart.render();
</script>
