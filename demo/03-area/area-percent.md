# 百分比层叠区域图

- template: demo-detail
- product: G2
- type: 区域图
- index: 2
- description: 百分比层叠区域图和层叠区域图一样，唯一的区别是各个数据集纵轴数据和是1。
- antVLink: https://antv.alipay.com/chart/details/stacked-area.html
----

<script>
var data = [
  {country: 'Asia', year: '1750', value: 502},
  {country: 'Asia', year: '1800', value: 635},
  {country: 'Asia', year: '1850', value: 809},
  {country: 'Asia', year: '1900', value: 947},
  {country: 'Asia', year: '1950', value: 1402},
  {country: 'Asia', year: '1999', value: 3634},
  {country: 'Asia', year: '2050', value: 5268},
  {country: 'Africa', year: '1750', value: 106},
  {country: 'Africa', year: '1800', value: 107},
  {country: 'Africa', year: '1850', value: 111},
  {country: 'Africa', year: '1900', value: 133},
  {country: 'Africa', year: '1950', value: 221},
  {country: 'Africa', year: '1999', value: 767},
  {country: 'Africa', year: '2050', value: 1766},
  {country: 'Europe', year: '1750', value: 163},
  {country: 'Europe', year: '1800', value: 203},
  {country: 'Europe', year: '1850', value: 276},
  {country: 'Europe', year: '1900', value: 408},
  {country: 'Europe', year: '1950', value: 547},
  {country: 'Europe', year: '1999', value: 729},
  {country: 'Europe', year: '2050', value: 628},
  {country: 'Oceania', year: '1750', value: 200},
  {country: 'Oceania', year: '1800', value: 200},
  {country: 'Oceania', year: '1850', value: 200},
  {country: 'Oceania', year: '1900', value: 300},
  {country: 'Oceania', year: '1950', value: 230},
  {country: 'Oceania', year: '1999', value: 300},
  {country: 'Oceania', year: '2050', value: 460},
];

var Stat = G2.Stat;
var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});
chart.source(data, {
  year: {
    type: 'linear',
    tickInterval: 25
  },
  '..percent': {
    formatter: function(value) {
      value = value || 0;
      value = value * 100;
      return parseInt(value);
    },
    alias: 'percent(%)'
  }
});
chart.areaStack().position(Stat.summary.percent('year*value'))
  .color('country', ['#ffd54f', '#ef6c00', '#1976d2', '#64b5f6']);
chart.render();
</script>
