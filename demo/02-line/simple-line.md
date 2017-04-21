# 简单线图

- template: demo-detail
- product: G2
- type: 线图
- index: 0
- description: 折线图用于显示数据在一个连续的时间间隔或者时间跨度上的变化，它的特点是反映事物随时间或有序类别而变化的趋势。
- antVLink: https://antv.alipay.com/chart/details/line.html
- cite: http://echarts.baidu.com/demo.html#line-aqi

----
<script>
var data = [
  {month: 'Jan', temperature: 7.0},
  {month: 'Feb', temperature: 6.9},
  {month: 'Mar', temperature: 9.5},
  {month: 'Apr', temperature: 14.5},
  {month: 'May', temperature: 18.2},
  {month: 'Jun', temperature: 21.5},
  {month: 'Jul', temperature: 25.2},
  {month: 'Aug', temperature: 26.5},
  {month: 'Sep', temperature: 23.3},
  {month: 'Oct', temperature: 18.3},
  {month: 'Nov', temperature: 13.9},
  {month: 'Dec', temperature: 9.6}
];

var chart = new G2.Chart({
  id: 'c1',
  width: 1000,
  height: 500
});

chart.source(data, {
  month: {
    alias: '月份',
    range: [0, 1]
  },
  temperature: {
    alias: '平均温度(°C)'
  }
});
chart.line().position('month*temperature').size(2);
chart.render();
</script>
