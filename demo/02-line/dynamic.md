# 动态线

- template: demo-detail
- product: G2
- type: 线图
- index: 6

----

<script>
  
  var data = [];

  function addRecord(arr, time) {
    
    var temperature1 = ~~(Math.random() * 5) + 22;
    var temperature2 = ~~(Math.random() * 7) + 17;
    if(data.length >= 200) {
      data.shift();
      data.shift();
    }
    data.push({time: time, temperature: temperature1, type: '记录1'});
    data.push({time: time, temperature: temperature2, type: '记录2'});
  }

  var begin = new Date().getTime() -  10 * 1000;
  for (var i = 0; i < 10; i++) {
    addRecord(data, begin + i * 1000);
  };

  var chart = new G2.Chart({
    id: 'c1',
    forceFit: true,
    height: 450
  });
  chart.source(data, {
    time: {
      alias: '时间',
      type: 'time',
      mask: 'MM:ss',
      tickCount:10,
      nice: false
    },
    temperature: {
      alias: '平均温度(°C)',
      min: 10,
      max: 35
    },
    type:{
      type:'cat'
    }
  });
  chart.line().position('time*temperature').color('type',['#ff7f0e','#2ca02c']).shape('smooth').size(2);
  chart.render();


  setInterval(function(){
    var time = new Date().getTime();
    addRecord(data, time);
    chart.changeData(data);
  },1000);

</script>