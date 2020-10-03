'use strict';
// Java 版
const TokenType = {
	// 关键字分类：基本数据类型
	Key_byte: 1,
	Key_short: 2,
	Key_int: 3,
	Key_long: 4,
	Key_char: 5,
	Key_boolean: 6,
	Key_float: 7,
	Key_double: 8,
	Key_void: 9,
	Key_enum: 10,
	// 关键字分类：流程控制语句
	Key_break: 11,
	Key_continue: 12,
	Key_return: 13,
	Key_if: 14,
	Key_else: 15,
	Key_switch: 16,
	Key_case: 17,
	Key_default: 18,
	Key_for: 19,
	Key_while: 20,
	Key_do: 21,
	Key_goto: 22,
	// 关键字分类：类和接口
	Key_class: 23,
	Key_interface: 24,
	Key_extends: 25,
	Key_implements: 26,
	// 关键字分类：包
	Key_package: 27,
	Key_import: 28,
	// 关键字分类：访问修饰符
	Key_private: 29,
	Key_protected: 30,
	Key_public: 31,
	// 关键字分类：类、方法、变量修饰符
	Key_strictfp: 32,
	Key_abstract: 33,
	Key_final: 34,
	Key_static: 35,
	Key_native: 36,
	Key_synchronized: 37,
	Key_transient: 38,
	Key_volatile: 39,
	Key_const: 40,
	// 关键字分类：类实例化
	Key_new: 41,
	Key_this: 42,
	Key_super: 43,
	// 关键字分类：异常处理
	Key_throws: 44,
	Key_try: 45,
	Key_catch: 46,
	Key_finally: 47,
	Key_throw: 48,
	// 关键字分类：运算符
	Key_instanceof: 49,
	// 关键字分类：断言符
	Key_assert: 50,
}

class lexical {
	// 构造函数
	constructor(source) {
		this.source = source; // 源代码
		this.pos = 1; // 当前位置：位于行间
		this.position = 0; // 当前位置：位于源代码中
		this.line = 1; // 当前行位置
		this.chr = this.source.charAt(0); // 当前字符
		// 关键字对照
		this.keywords = {
			"byte": TokenType.Key_byte,
			"short": TokenType.Key_short,
			"int": TokenType.Key_int,
			"long": TokenType.Key_long,
			"char": TokenType.Key_char,
			"boolean": TokenType.Key_boolean,
			"float": TokenType.Key_float,
			"double": TokenType.Key_double,
			"void": TokenType.Key_void,
			"enum": TokenType.Key_enum,
			"break": TokenType.Key_break,
			"continue": TokenType.Key_continue,
			"return": TokenType.Key_return,
			"if": TokenType.Key_if,
			"else": TokenType.Key_else,
			"switch": TokenType.Key_switch,
			"case": TokenType.Key_case,
			"default": TokenType.Key_default,
			"for": TokenType.Key_for,
			"while": TokenType.Key_while,
			"do": TokenType.Key_do,
			"goto": TokenType.Key_goto,
			"class": TokenType.Key_class,
			"interface": TokenType.Key_interface,
			"extends": TokenType.Key_extends,
			"implements": TokenType.Key_implements,
			"package": TokenType.Key_package,
			"import": TokenType.Key_import,
			"private": TokenType.Key_private,
			"protected": TokenType.Key_protected,
			"public": TokenType.Key_public,
			"strictfp": TokenType.Key_strictfp,
			"abstract": TokenType.Key_abstract,
			"final": TokenType.Key_final,
			"static": TokenType.Key_static,
			"native": TokenType.Key_native,
			"synchronized": token.synchronized,
			"transient": TokenType.Key_transient,
			"volatile": TokenType.Key_volatile,
			"const": TokenType.Key_const,
			"new": TokenType.Key_new,
			"this": TokenType.Key_this,
			"super": TokenType.Key_super,
			"throws": TokenType.Key_throws,
			"try": TokenType.Key_try,
			"catch": TokenType.Key_catch,
			"finally": TokenType.Key_finally,
			"throw": TokenType.Key_throw,
			"instanceof": TokenType.Key_instanceof,
			"assert": TokenType.Key_assert
		}
	}
	
	// 获取下一个
}



















})
