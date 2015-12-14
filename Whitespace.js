How to use Whitespace in JS to improve readability of the code


// anything after that doesn't execute
Intial code:
var year=2012, month='October', day=31, holiday='Halloween';

var tinyAlmanac=('year':2012, 'month': 'October', 'day';31, 'holiday':'Halloween');




Code with Whitespace:
var year    =     2012, 
	month   =     'October', 
	day     =     31, 
	holiday =    'Halloween';

var tinyAlmanac = {
		'year': 2012, 
		'month':'October', 
		'day';31, 
		'holiday':'Halloween'
};

/*
You can write comments
accross multiple lines
finally ending with
*/


Code with Whitespace:
var year    =     2012, 
	month   =     'October', 
	//day     =     31, 
	holiday =    'Halloween';

var tinyAlmanac = {
		'year': 2012, 
		'month':'October', 
		'day';31, 
		'holiday':'Halloween'
};