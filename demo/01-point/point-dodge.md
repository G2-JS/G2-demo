# 分组点图

- template: demo-detail
- product: G2
- type: 点图
- index: 6
----

<script>
$.getJSON('../../static/data/scatter1.json',function(data){
  G2.Global.activeShape.point = {
    stroke: 'blue'
  }
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  for(var i=0;i<data.length;i++) {
    var item = data[i];
    var value = item.exp_amo;
    item.exp_amo = value * 1;
  }
  chart.source(data, {
    exp_dat: {
      type: 'time',
      mask: 'm/yy',
      tickCount: 14
    },
    exp_amo : {
      type: 'log',
      ticks: [225, 1000000 ,2000000 , 4000000, 6000000]
    }
  });
  chart.legend(false);
  chart.tooltip(true, {
    title: null,
    custom: true, // 使用自定义的 tooltip
  })
  chart.axis('exp_dat', {
    title: null,
    tickLine: null,
    titleOffset: 50,
    labels: {
      label: {
        fontSize: '14'
      }
    }
  });
  chart.axis('exp_amo', {
    tickLine: null,
    line: null,
    title: null,
    grid: {
      line: {
        'strokeDasharray': null
      }
    },
    formatter: function(val) {
      var formatted;
      if (val == 225) {
        formatted = 0;
      } else {
        formatted = val / 1000000;  
      }
        
      return '$' + formatted + 'M';
    } 
  });
  chart.point().position('exp_dat*exp_amo').size('exp_amo', 10, 1).opacity('exp_amo').shape('circle').tooltip('exp_dat*can_nam*spe_nam*exp_amo');
  chart.render();
});
</script>

