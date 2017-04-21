# 人口金字塔图

- template: demo-detail
- product: G2
- type: 柱状图
- index: 7
----

<script src="https://g.alicdn.com/bui/??seajs/2.3.0/sea.js"></script>
<script src="https://g.alicdn.com/bui/bui/1.1.17/config.js"></script>
<link href="https://g.alicdn.com/bui/bui/1.1.21/css/bs3/bui.css" rel="stylesheet">
<style>
  .bui-slider{
    margin-left: 70px;
  }
  .span-value{
    position: relative;
    top: 25px;
    left: -10px;
    color: #999;
  }
</style>
<script>
BUI.use('bui/slider',function (Slider) {
  var Stat = G2.Stat;
  var defaultYear = 2010;
  var Frame = G2.Frame;
  var totalData;
  var Util = G2.Util;
  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 450,
    animate: false,
    plotCfg: {
      margin: [20, 100, 80]
    }
  });

  var defs = {
    'age': {
      ticks: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']
    },
    'total_percentage':{ 
      formatter: function(value){
        return Math.abs(value).toFixed(2) + '%';
      }
    },
    'gender': {type: 'cat',values: ['男','女']}
  };

  var slider = new Slider.Slider({
    render : '#c1',
    width: 840,
    min : 2000, 
    step: 1,  //滑动最小 100
    max : 2014,
    handleTpl: '<span><span id="v1" class="span-value">2010</span></span>',
    value: defaultYear // 默认日期
  });
  slider.render();
  slider.on('change',function(ev){
    var value = ev.value;
    var data = findData(value,totalData);
    $('#v1').html(value);
    chart.changeData(data);
  });

  function findData(year,people){
    var rst = [];
    var male = [];
    var tmp = findByYear(year,people.male.values);
    var female = findByYear(year,people.female.values);
    Util.each(tmp,function(obj){
      var tmpObj = Util.mix({},obj);
      tmpObj['total_percentage'] *= -1; // 变成负数
      male.push(tmpObj);
    });
    return Frame.combinArray('gender',male,female);
  }

  function findByYear (year,data) {
    var rst = [];
    for (var i = 0; i < data.length; i ++) {
      var obj = data[i];
      if (new Date(obj.date * 1000).getFullYear() === year) {
        rst = obj.age_groups;
      }
    }
    return rst;
  }

  $.getJSON('../../static/data/pyramid.json',function (people) {
      totalData = people;
      var data = findData(defaultYear,people);
      chart.source(data,defs);
      chart.axis('age', {
        titleOffset: 65 
      });
      chart.coord().transpose();
      chart.interval().position('age*total_percentage')
            .color('gender',['rgb(113,192,235)','rgb(246,170,203)'])
            .size(4);

      chart.render();
  });
});

</script>
