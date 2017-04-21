# 范围区域图

- template: demo-detail
- product: G2
- type: 区域图
- index: 3

----

<script>
$.getJSON('../../static/data/stock-data.json',function(data){

  var Stat = G2.Stat;
  var tmpData = [];
  var date = new Date('2015/08/08').getTime();
 
  for(var i = 0; i < data.length; i++) {
    var obj = {};
    obj.time = date + 60 * 1000 * i; // 1分钟一条数据
    var value = data[i];
    obj.value = [value + Math.random() * 0.08, value - Math.random() * 0.08];
    tmpData.push(obj);
  }
 
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
    
  var defs = {
    'time': {
      type: 'time',
      nice: false,
      mask: 'HH:MM'
    }
  };
    
  chart.source(tmpData,defs);
  chart.area().position('time*value');
  chart.render();
});
</script>