webpackJsonp([140],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var G2 = __webpack_require__(2);
	var data = [{ country: 'Asia', year: '1750', value: 502 }, { country: 'Asia', year: '1800', value: 635 }, { country: 'Asia', year: '1850', value: 809 }, { country: 'Asia', year: '1900', value: 947 }, { country: 'Asia', year: '1950', value: 1402 }, { country: 'Asia', year: '1999', value: 3634 }, { country: 'Asia', year: '2050', value: 5268 }, { country: 'Africa', year: '1750', value: 106 }, { country: 'Africa', year: '1800', value: 107 }, { country: 'Africa', year: '1850', value: 111 }, { country: 'Africa', year: '1900', value: 133 }, { country: 'Africa', year: '1950', value: 221 }, { country: 'Africa', year: '1999', value: 767 }, { country: 'Africa', year: '2050', value: 1766 }, { country: 'Europe', year: '1750', value: 163 }, { country: 'Europe', year: '1800', value: 203 }, { country: 'Europe', year: '1850', value: 276 }, { country: 'Europe', year: '1900', value: 408 }, { country: 'Europe', year: '1950', value: 547 }, { country: 'Europe', year: '1999', value: 729 }, { country: 'Europe', year: '2050', value: 628 }, { country: 'Oceania', year: '1750', value: 2 }, { country: 'Oceania', year: '1800', value: 2 }, { country: 'Oceania', year: '1850', value: 2 }, { country: 'Oceania', year: '1900', value: 6 }, { country: 'Oceania', year: '1950', value: 13 }, { country: 'Oceania', year: '1999', value: 30 }, { country: 'Oceania', year: '2050', value: 46 }];

	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});
	chart.source(data, {
	  '..percent': {
	    formatter: function formatter(value) {
	      value = value || 0;
	      value = value * 100;
	      return parseInt(value);
	    }
	  }
	});
	chart.areaStack().position(Stat.summary.percent('year*value')).color('country');
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvYXJlYS9hcmVhLXBlcmNlbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvYXJlYS9hcmVhLXBlcmNlbnQubWQiLCJ3ZWJwYWNrOi8vLz9kNDFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBHMiA9IHJlcXVpcmUoJ2cyJyk7XG52YXIgZGF0YSA9IFtcbiAge2NvdW50cnk6ICdBc2lhJywgeWVhcjogJzE3NTAnLCB2YWx1ZTogNTAyfSxcbiAge2NvdW50cnk6ICdBc2lhJywgeWVhcjogJzE4MDAnLCB2YWx1ZTogNjM1fSxcbiAge2NvdW50cnk6ICdBc2lhJywgeWVhcjogJzE4NTAnLCB2YWx1ZTogODA5fSxcbiAge2NvdW50cnk6ICdBc2lhJywgeWVhcjogJzE5MDAnLCB2YWx1ZTogOTQ3fSxcbiAge2NvdW50cnk6ICdBc2lhJywgeWVhcjogJzE5NTAnLCB2YWx1ZTogMTQwMn0sXG4gIHtjb3VudHJ5OiAnQXNpYScsIHllYXI6ICcxOTk5JywgdmFsdWU6IDM2MzR9LFxuICB7Y291bnRyeTogJ0FzaWEnLCB5ZWFyOiAnMjA1MCcsIHZhbHVlOiA1MjY4fSxcbiAge2NvdW50cnk6ICdBZnJpY2EnLCB5ZWFyOiAnMTc1MCcsIHZhbHVlOiAxMDZ9LFxuICB7Y291bnRyeTogJ0FmcmljYScsIHllYXI6ICcxODAwJywgdmFsdWU6IDEwN30sXG4gIHtjb3VudHJ5OiAnQWZyaWNhJywgeWVhcjogJzE4NTAnLCB2YWx1ZTogMTExfSxcbiAge2NvdW50cnk6ICdBZnJpY2EnLCB5ZWFyOiAnMTkwMCcsIHZhbHVlOiAxMzN9LFxuICB7Y291bnRyeTogJ0FmcmljYScsIHllYXI6ICcxOTUwJywgdmFsdWU6IDIyMX0sXG4gIHtjb3VudHJ5OiAnQWZyaWNhJywgeWVhcjogJzE5OTknLCB2YWx1ZTogNzY3fSxcbiAge2NvdW50cnk6ICdBZnJpY2EnLCB5ZWFyOiAnMjA1MCcsIHZhbHVlOiAxNzY2fSxcbiAge2NvdW50cnk6ICdFdXJvcGUnLCB5ZWFyOiAnMTc1MCcsIHZhbHVlOiAxNjN9LFxuICB7Y291bnRyeTogJ0V1cm9wZScsIHllYXI6ICcxODAwJywgdmFsdWU6IDIwM30sXG4gIHtjb3VudHJ5OiAnRXVyb3BlJywgeWVhcjogJzE4NTAnLCB2YWx1ZTogMjc2fSxcbiAge2NvdW50cnk6ICdFdXJvcGUnLCB5ZWFyOiAnMTkwMCcsIHZhbHVlOiA0MDh9LFxuICB7Y291bnRyeTogJ0V1cm9wZScsIHllYXI6ICcxOTUwJywgdmFsdWU6IDU0N30sXG4gIHtjb3VudHJ5OiAnRXVyb3BlJywgeWVhcjogJzE5OTknLCB2YWx1ZTogNzI5fSxcbiAge2NvdW50cnk6ICdFdXJvcGUnLCB5ZWFyOiAnMjA1MCcsIHZhbHVlOiA2Mjh9LFxuICB7Y291bnRyeTogJ09jZWFuaWEnLCB5ZWFyOiAnMTc1MCcsIHZhbHVlOiAyfSxcbiAge2NvdW50cnk6ICdPY2VhbmlhJywgeWVhcjogJzE4MDAnLCB2YWx1ZTogMn0sXG4gIHtjb3VudHJ5OiAnT2NlYW5pYScsIHllYXI6ICcxODUwJywgdmFsdWU6IDJ9LFxuICB7Y291bnRyeTogJ09jZWFuaWEnLCB5ZWFyOiAnMTkwMCcsIHZhbHVlOiA2fSxcbiAge2NvdW50cnk6ICdPY2VhbmlhJywgeWVhcjogJzE5NTAnLCB2YWx1ZTogMTN9LFxuICB7Y291bnRyeTogJ09jZWFuaWEnLCB5ZWFyOiAnMTk5OScsIHZhbHVlOiAzMH0sXG4gIHtjb3VudHJ5OiAnT2NlYW5pYScsIHllYXI6ICcyMDUwJywgdmFsdWU6IDQ2fSxcbl07XG5cbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gIGlkOiAnYzEnLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA1MDBcbn0pO1xuY2hhcnQuc291cmNlKGRhdGEsIHtcbiAgJy4ucGVyY2VudCc6IHtcbiAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IDA7XG4gICAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbiAgICB9XG4gIH1cbn0pO1xuY2hhcnQuYXJlYVN0YWNrKCkucG9zaXRpb24oU3RhdC5zdW1tYXJ5LnBlcmNlbnQoJ3llYXIqdmFsdWUnKSkuY29sb3IoJ2NvdW50cnknKTtcbmNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2FyZWEvYXJlYS1wZXJjZW50Lm1kXG4gKiovIiwidW5kZWZpbmVkXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQ0NBO0FBQ0E7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9