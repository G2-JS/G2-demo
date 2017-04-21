# heatmap canvas

- template: demo-detail
- product: G2
- type: 热力/色块图
- index: 3
- description: 
- antVLink: 
- cite: http://www.highcharts.com/demo/heatmap-canvas
----

<script>
$.getJSON('../../static/data/heatmap-temperature.json', function(data) {
  var monthMap = {
    '2013-01-01': 'January',
    '2013-02-01': 'February',
    '2013-03-01': 'March',
    '2013-04-01': 'April',
    '2013-05-01': 'May',
    '2013-06-01': 'June',
    '2013-07-01': 'July',
    '2013-08-01': 'August',
    '2013-09-01': 'September',
    '2013-10-01': 'October',
    '2013-11-01': 'November',
    '2013-12-01': 'December'
  };
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [80]
    }
  });

  chart.source(data, {
    Date: {
      type: 'cat'
    },
    Time: {
      type: 'numberCat'
    }
  });
  chart.axis('Date', {
    formatter: function(val) {
      return monthMap[val];
    },
    labels: {
      label: {
        rotate: -86
      }
    }
  });
  chart.polygon().position('Date*Time').color('Temperature', '#3060cf-#fffbbc-#c4463a');
  chart.render();
});
</script>
