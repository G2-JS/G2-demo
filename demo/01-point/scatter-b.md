# 时间序列散点图

- template: demo-detail
- product: G2
- type: 点图
- index : 1
- description:
- cite: http://vizuly.io/product/scatter-plot/?demo=d3js
----

<style>
  .ac-tooltip{
    position:absolute;
    visibility:hidden;
    border : 1px solid #efefef;
    border-radius: 3px;
    background-color: white;
    opacity: .85;
    padding: 8px;
    font-size: 12px;
    transition: top 200ms,left 200ms;
    -moz-transition:  top 200ms,left 200ms;  /* Firefox 4 */
    -webkit-transition:  top 200ms,left 200ms; /* Safari 和 Chrome */
    -o-transition:  top 200ms,left 200ms;
  }
  .ac-tooltip .ac-list{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ac-tooltip li{
    line-height:  22px; 
  }
</style>


<script>

G2.Global.activeShape.point = {
  stroke: 'blue',
  lineWidth: 3
}; // 自定义鼠标 hover 气泡上的样式主题
$.getJSON('../../static/data/scatter1.json',function (data) {
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
  });
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
        'stroke-dasharray': [0, 0],
        stroke: '#999'
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
