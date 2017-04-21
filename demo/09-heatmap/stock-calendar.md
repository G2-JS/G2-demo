# 股票波动图

- template: demo-detail
- product: G2
- type: 热力/色块图
- index: 2
- description: 色块图，由小色块有序且紧凑的组成的图表。色块图的最大好处是，2维画布上的空间利用率非常高。理论上小色块的大小是可以等于硬件像素的大小。
- antVLink: https://antv.alipay.com/chart/details/color-map.html
----

<script>
$.getJSON('../../static/data/stock-calendar.json',function(data){
  var Stat = G2.Stat;
  var Frame = G2.Frame;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500,
    plotCfg: {
      margin: [20, 120]
    }
  });
  // 获取当前月的第几周,从 0 开始
  function getMonthWeek(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthFirst = new Date(year,month,0);
    var intervalDays = Math.round((date.getTime() - monthFirst.getTime()) / 86400000);
    var index =  Math.round((intervalDays + monthFirst.getDay()) / 7);
    return index;
  }
  // 加工数据
  // 增加涨幅、跌幅
  // 添加所属月、周几、每个月的第几周
  data.forEach(function(obj){
    var date = new Date(obj['日期']);
    var month = date.getMonth();
    obj.month = month;
    obj.day = date.getDay();
    obj.week = getMonthWeek(date).toString();
  });
  var defs = {
    month: {
      type: 'cat',
      values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December']
    },
    day: {
      type: 'numberCat'
    },
    week: {
      type: 'cat',
      values: ['5','4','3','2','1','0']
    },
    '涨跌幅': {
      type: 'linear',
      min: -10,
      max: 10
    },
    time: {
      type: 'time'
    }
  };
  chart.axis(false);
  chart.col('日期',{
    type: 'time'
  });
  chart.tooltip({
    map: {
      title: '日期'
    }
  });
  chart.legend('涨跌幅', {
    position: 'left'
  });
  chart.source(data,defs);
  chart.facet(['month'], {
    type: 'list',
    cols: 3,
    margin: 30,
    facetTitle: {
      titleOffset: 3,
      colTitle: {
        title: {
          fontSize: 14,
          textAlign: 'center',
          fill: '#000'
        }
      }
    }
  });
  chart.polygon().position('day*week*日期')
    .color('涨跌幅','#006837-#ffffbf-#d73027')
    .style({
      lineWidth: 1,
      stroke: '#999'
    });
  chart.render();
});
</script>
