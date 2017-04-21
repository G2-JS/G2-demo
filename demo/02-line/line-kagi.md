# Kagi chart

- template: demo-detail
- product: G2
- type: 线图
- index: 7
- description: 卡吉图用于显示价格类数据的变化和趋势，独立于时间，只有当达到特定量时才发生方向变化，可用作帮助投资者对股票做出更好决策。
- antVLink: https://antv.alipay.com/chart/details/kagi.html
----

<script>
$.getJSON('../../static/data/kagi.json',function(data){
  // 获取卡吉图数据点
  var kagiData = getKagiData(data,'date','value');

  var chart = new G2.Chart({
    id: 'c1',
    width: 1000,
    height: 500
  });
  chart.source(kagiData, {
    date: {
      type: 'cat',
      tickCount: 10,
      range: [0, 1]
    }
  });
  chart.tooltip({
    crosshairs: true
  });
  
  chart.path().position('date*value').color('type').size('type',2,3);
  chart.render();
});

/**
* 获取卡吉图数据点
* @param  {Array} points 原始数据点
* @param  {String} x x维度字段名
* @param  {String} y y维度字段名
* @return {Array} data 卡吉图数据点
**/
function getKagiData(points,x,y){
  // 初始最小值
  var min = points[0][y];
  // 初始最大值
  var max = points[0][y];
  // 初始绘制起点
  var start = points[0];
  // 阳线和阴线判断标志
  var isPos = points[1][y] >= points[0][y] ? true : false;
  // 初始绘制方向，1为向上，－1为向下
  var direction = isPos ? 1 : -1;
  // 阈值，默认为最大值的4%
  var maxValue = getMax(points,y);
  var threshold= maxValue * 0.04;
  // 阴线数组
  var negPath = [];
  // 阳线数组
  var posPath = [];

  var tmp1 = {};
  tmp1[x] = start[x];
  tmp1[y] = start[y];
  pushPoint(tmp1,isPos,posPath,negPath,x,y);

  if(points.length>1){
    for (var i = 0; i <= points.length - 1; i++) {
      // 浮动超过阈值时执行算法
      if(Math.abs(start[y]-points[i][y])>threshold){
        if(direction>0){
          if(points[i][y] >= start[y]){
            isPos = getVerticalPoints(start,points[i],max,direction,negPath,posPath,isPos,x,y);
            start[y] = points[i][y];
          }else{
            var tmp2 = {};
            tmp2[x] = points[i][x];
            tmp2[y] = start[y];
            pushPoint(tmp2,isPos,posPath,negPath,x,y)
            start[x] = points[i][x];
            direction = -1; // 转向
            isPos = getVerticalPoints(start,points[i],min,direction,negPath,posPath,isPos,x,y);
            max = start[y] // 更新当前最高点
            start = points[i]; // 更新当前绘制起点
          }
        }else{
          if(points[i][y] < start[y]){
            isPos = getVerticalPoints(start,points[i],min,direction,negPath,posPath,isPos,x,y);
            start[y] = points[i][y];
          }else{
            var tmp3 = {};
            tmp3[x] = points[i][x];
            tmp3[y] = start[y];
            pushPoint(tmp3,isPos,posPath,negPath,x,y)
            start[x] = points[i][x];
            direction = 1;
            isPos = getVerticalPoints(start,points[i],max,direction,negPath,posPath,isPos,x,y);
            min = start[y] // 更新当前最低点
            start = points[i]
          }
        }
      }
    }
  }
  return posPath.concat(negPath);
}
/**
 * 获取卡吉图垂直线数据点
 * @param  {Array} start 起点坐标
 * @param  {Array} end 终点坐标
 * @param  {Number} changePoint 转折点y坐标
 * @param  {Number} direction 绘制方向
 * @param  {Array} negPath 阴线数组
 * @param  {Array} posPath 阳线数组
 * @param  {Boolean} isPos 是否阳线标志位
 * @param  {String} x x维度字段名
 * @param  {String} y y维度字段名
 * @return  {Boolean} isPos 是否阳线标志位
 **/
function getVerticalPoints(start,end,changePoint,direction,negPath,posPath,isPos,x,y){
  // 阳线和阴线相互转换的判断条件
  var condition = direction > 0 ? (end[y] > changePoint) && (start[y] < changePoint) && !isPos: (end[y] < changePoint) && (start[y] > changePoint) && isPos;
  
  var tmp1 = {};
  tmp1[x] = start[x];
  tmp1[y] = changePoint;
  var tmp2 = {};
  tmp2[x] = start[x];
  tmp2[y] = end[y];
  
  if(condition){
    pushPoint(tmp1,isPos,posPath,negPath,x,y,true);
    isPos = isPos?false:true;
    pushPoint(tmp2,isPos,posPath,negPath,x,y)
  }else{
    pushPoint(tmp2,isPos,posPath,negPath,x,y)
  }
  return isPos;
}
/**
 * 将卡吉图数据分别放入阳线数组和阴线数组
 * @param  {Object} point 当前数据点
 * @param  {Boolean} isPos 是否阳线标志位
 * @param  {Array} negPath 阴线数组
 * @param  {Array} posPath 阳线数组
 * @param  {String} x x维度字段名
 * @param  {String} y y维度字段名
 * @param  {Boolean} isChangePoint 是否转折点
 **/
function pushPoint(point,isPos,posPath,negPath,x,y,isChangePoint=false){
  var tmpPoint  = {};
  tmpPoint[x] = point[x];
  tmpPoint[y] = isChangePoint?point[y]:null; // 转折点阳线和阴线都有数据，非转折点阳线或阴线的数据点为空 
  if(isPos){
    point.type = 'pos';
    posPath.push(point);
    tmpPoint.type = 'neg';
    negPath.push(tmpPoint);
  }else{
    point.type = 'neg';
    negPath.push(point);
    tmpPoint.type = 'pos';
    posPath.push(tmpPoint);
  }
}

function getMax(points,y){
  var max = points[points.length-1][y];
  if(points.length > 0){
    for(var i = points.length - 1;i >= 0;i--){
      max = points[i][y]>max?points[i][y]:max;
    }
  }
  return max;
}
</script>
