# 地图与热力图

- template: demo-detail
- product: G2
- type: 地图
- index: 4
- description: 最开始的热力图，是矩形色块加上颜色编码。经过多年的演化，习语上的热力图，如今更规范，更被大多数人理解的是这种经过平滑模糊过的热力图谱。
- antVLink: https://antv.alipay.com/chart/details/heatmap.html

----

<style type="text/css">
  #c1 {
    background-image: url(https://zos.alipayobjects.com/rmsportal/kqiqfRADgLgCCNJRHhDv.png);
    background-repeat: no-repeat;
    width: 787px;
    height: 500px;
    background-size: 100%;
    margin: 0 auto;
  }
</style>

<script>
$.getJSON('../../static/data/china.json', function(mapData) {
  $.getJSON('../../static/data/temp.json', function(data) {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
      id: 'c1',
      width: 787,
      height: 500,
      plotCfg: {
        margin: [5, 225, 125, 65]
      }
    });
    chart.source(data, {
      'out-temperature': {
        alias: '室外温度'
      },
      '..lant': {
        min: 18.16933828300006,
        max: 53.56779083300003
      },
      '..long': {
        min: 73.60225630700012,
        max: 134.77257938700012
      }
    });
    chart.coord('map', {
      projection: 'mercator',
      max: [134.77, 63.68],
      min: [73.60, 18.48]
    });
    chart.tooltip({
      map: {
        'title': 'city',
        value: 'out-temperature'
      }
    });
    chart.heatmap().position(Stat.map.location('longitude*latitude')).color('out-temperature', '#50a3ba-#eac736-#d94e5d')
      .size(15) //调整热力图一个点可以影响的范围
      .label('city',{label:{opacity: 0}}); // 设置文本但是不显示，使得tooltip可以显示对应的字段
    chart.render();
  });
});
</script>
