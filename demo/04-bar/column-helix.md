# 螺旋柱状图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 13
----

<script>
  var data = [];
  var n = 31;
  for(var i = 0;i<372;i++){
    var now = Date();
    data[i] = {};
    data[i].time = new Date(now).getTime()+i*1000*3600*24;
    var random = Math.floor(Math.random()*10);
    if(((i%n>2)&&(i%n < 4))||((i%n>=6)&&(i%n<7))){
      data[i].value = 30 + random*7;
    }else if((i%n>=4)&&(i%n<6)){
      data[i].value = 60 + random*8;
    }else{
      data[i].value = 10 + random*5;
    }
  }
  
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(data,{
    'time':{
      type:'timeCat',
      mask: 'yyyy.mm.dd'
    },
    'value':{
      min: 0
    }
  });
  chart.coord('helix',{
    startAngle: 0.5*Math.PI,
    endAngle: 12.5*Math.PI
  });
  chart.axis('time',{
    line:null        
  });
  chart.interval().position('time*value').color('value','#ffffff-#36B3C3').size(0.45);
  chart.render();

</script>
