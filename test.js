var a = {
	name: 'name',
	value: 'obj.value',
	next: 'o.a.b.c'
};

var name = a.name;

var source = {
	name: '李彦朋',
	obj: {
		value: '张三'
	},
	o: {
		a: {
			b: {
				c: '搭讪'
			}
		}
	},

	b(){
		console.log(123);
	},
	name
};



for (var key in a) {
	if (source[a[key]]) {
		a[key] = source[a[key]]
	} else {
		console.log(a[key]);
		if (typeof a[key] === 'string') {
			var keys = a[key].split('.').reverse();
			console.log(keys);
			var i = keys.length;
			var next = source;
			while (i--) {
				next = next[keys[i]];

				if (!next) {
					break;
				}
			}
			a[key] = next;
		}
	}
}

console.log(a);

if (typeof expr === 'string' && expr.indexOf('pageInfo') >= 0) {
	var keys = expr.split('.').reverse();
	var i = keys.length;
	var next = obj;
	while (i--) {
		next = next[keys[i]];
		if (!next) {
			break;
		}
	}
	ret = next;
}

if (typeof expr === 'string') {
	prm = expr.split('.');
	i = prm.length;

	if (expr.indexOf('pageInfo') >= 0) {
		var keys = prm.reverse();
		var next = obj;
		while (i--) {
			next = next[keys[i]];
			if (!next) {
				break;
			}
		}
		ret = next;
	} else {
		if (i) {
			ret = obj;
			while (ret && i--) {
				p = prm.shift();
				ret = ret[p];
			}
		}
	}
}

var a = require('./a.js');

import b from './a.js'

console.log(b());

function c(...args){
	console.log(args);
}

Array.of(3, 11, 8)