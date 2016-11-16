'use strict';

var _of = require('babel-runtime/core-js/array/of');

var _of2 = _interopRequireDefault(_of);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _a = require('./a.js');

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = {
	name: 'name',
	value: 'obj.value',
	next: 'o.a.b.c'
};

var name = a.name;

var source = (0, _defineProperty3.default)({
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

	b: function b() {
		console.log(123);
	}
}, 'name', name);

for (var key in a) {
	if (source[a[key]]) {
		a[key] = source[a[key]];
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

console.log((0, _a2.default)());

function c() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	console.log(args);
}

(0, _of2.default)(3, 11, 8);
