;;
(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global = global || self, global.Table = factory());
})(this, function() {
	'use strict';
	// 判断是否为Object
	function isObject(obj) {
		return typeof obj === "object" && obj !== null;
	}
	// 判断是否为数组
	function isArray(arr) {
		return arr.constructor === Array;
	}

	return function(obj) {
		if (!isObject(obj)) {
			throw new Error("传值类型错误，类型应该为[Object]");
		} else if (isArray(obj)) {
			throw new Error("数据类型错误，类型应该为[Array]");
		}
		// 如果不是Object或Array，抛出错误

		// 取得：包名，引用包，类名
		let paName = obj.packageName,
			importList = obj.importList,
			className = obj.className;

		if (paName == undefined) {
			throw new Error("请传递 [Package]");
		}
		if(className==undefined){
			throw new Error("请传递 [class]");
		}

	}
})
