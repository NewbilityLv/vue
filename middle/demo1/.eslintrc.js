// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	plugins: [ 'vue' ],
	// add your custom rules here
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': [
			0,
			{
				// 允许声明未使用变量
				vars: 'local',
				// 参数不检查
				args: 'none'
			}
		],
		// 关闭语句强制分号结尾
		semi: [ 0 ],
		//空行最多不能超过100行
		'no-multiple-empty-lines': [ 0, { max: 100 } ],
		//关闭禁止混用tab和空格
		'no-mixed-spaces-and-tabs': [ 0 ],
		quotes: [ 0, 'single' ],
		indent: [ 0, 4 ],
		'eol-last': 0,
		'no-tabs': 0,

		'no-trailing-spaces': 0, //一行结束后面不要有空格
		'comma-dangle': [ 0, 'never' ], //对象字面量项尾不能有逗号
		'space-before-function-paren': [ 0, 'always' ] //函数定义时括号前面要不要有空格
	}
};
